import { z } from 'zod';
import { NanoBananaSchema, DEFAULT_VALUES } from '../schema';

interface FixReport {
  fixed: boolean;
  logs: string[];
  data: any;
}

/**
 * Attempts to fix a raw JSON object against the Schema.
 * It uses a heuristic approach:
 * 1. Checks strict Zod parsing.
 * 2. If fail, it walks the schema structure and attempts to merge valid input fields
 *    into a fresh default object, converting types where possible.
 */
export const autoFixJson = (inputStr: string): FixReport => {
  const logs: string[] = [];
  let parsedRaw: any;

  // 1. Syntax Check
  try {
    parsedRaw = JSON.parse(inputStr);
  } catch (e) {
    return {
      fixed: false,
      logs: ["CRITICAL: Invalid JSON syntax. Could not parse string."],
      data: null
    };
  }

  // 2. Strict Validation Attempt
  const strictResult = NanoBananaSchema.safeParse(parsedRaw);
  if (strictResult.success) {
    logs.push("Validation successful. No changes needed.");
    return { fixed: true, logs, data: strictResult.data };
  }

  logs.push("Validation failed. Attempting auto-recovery...");

  // 3. Recursive Recovery Strategy
  // We start with the full DEFAULTS and recursively merge specific fields from parsedRaw
  // if they match the expected type or can be coerced.

  const recovered = recursiveRecover(DEFAULT_VALUES, parsedRaw, NanoBananaSchema, logs, "");

  return {
    fixed: true,
    logs,
    data: recovered
  };
};

// Simplified recursive merger.
// In a real-world production app, this would inspect the Zod schema shape dynamically.
// Here we assume structure match between DEFAULT_VALUES and the Input.
function recursiveRecover(
  defaults: any,
  input: any,
  schema: z.ZodTypeAny,
  logs: string[],
  path: string
): any {
  if (input === undefined || input === null) {
    logs.push(`Missing field: '${path}'. Using default.`);
    return defaults;
  }

  // Handle Primitives
  if (typeof defaults !== 'object' || defaults === null) {
    // Basic type coercion
    if (typeof input === typeof defaults) {
      return input;
    }
    // Attempt coercion
    if (typeof defaults === 'number' && !isNaN(Number(input))) {
        logs.push(`Type mismatch at '${path}': converted string to number.`);
        return Number(input);
    }
    if (typeof defaults === 'string') {
        logs.push(`Type mismatch at '${path}': converted to string.`);
        return String(input);
    }
     // Enum check would happen here if we had introspected Zod enums fully,
    // but simplified, we fallback to default if type is totally wrong.
    logs.push(`Invalid type at '${path}'. Expected ${typeof defaults}, got ${typeof input}. Reverted to default.`);
    return defaults;
  }

  // Handle Arrays
  if (Array.isArray(defaults)) {
    if (!Array.isArray(input)) {
        logs.push(`Expected array at '${path}', got ${typeof input}. Reset to default array.`);
        return defaults;
    }
    // For arrays of objects, we can't easily merge index-by-index without ID.
    // We will just accept the input array IF the items look "okay" (lazy check), or return input
    // In a strict mode, we'd map over input and validate each item.
    // For this app, let's trust the array content but maybe trim strings.
    return input;
  }

  // Handle Objects
  const res: any = {};
  for (const key of Object.keys(defaults)) {
    const nextPath = path ? `${path}.${key}` : key;
    res[key] = recursiveRecover(defaults[key], input[key], (schema as any).shape?.[key], logs, nextPath);
  }
  
  // Preserve "extra" fields if they seem deliberate? No, strict schema usually prefers stripping.
  // We stick to keys present in defaults (Schema-driven).

  return res;
}
