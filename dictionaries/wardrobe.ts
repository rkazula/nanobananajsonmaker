
import { MALE_CLOTHING } from './clothing/male';
import { FEMALE_CLOTHING } from './clothing/female';
import { UNISEX_CLOTHING } from './clothing/unisex';

// Export everything from sub-modules
export * from './clothing/clothing_features/wardrobe_common';
export * from './clothing/clothing_features/fabrics';
export * from './clothing/clothing_features/patterns';
export * from './clothing/male';
export * from './clothing/female';
export * from './clothing/unisex';
export * from './clothing/presets'; // New export

// --- AGGREGATE LISTS (For backward compatibility or simple search) ---

// Helper to merge all values from a dictionary into a single sorted array
const mergeDictValues = (...dicts: object[]) => {
    const allItems = new Set<string>();
    dicts.forEach(dict => {
        Object.values(dict).forEach((arr: string[]) => {
            arr.forEach(item => allItems.add(item));
        });
    });
    return Array.from(allItems).sort();
};

export const CLOTHING_ITEMS = mergeDictValues(MALE_CLOTHING, FEMALE_CLOTHING, UNISEX_CLOTHING);

export const LINGERIE_ITEMS = [
    ...(FEMALE_CLOTHING["Intimate"] || []),
    ...(MALE_CLOTHING["Intimate"] || [])
].sort();