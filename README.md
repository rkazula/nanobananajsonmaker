# NanoBanana JSON Builder

A React + TypeScript application for generating, validating, and managing configuration files for the "Nano Banana" ultra-realistic image generation model.

## Features

*   **Wizard UI:** Step-by-step form builder categorized by logical sections (Intent, API, Meta, Scene, etc.).
*   **Type Safety:** Powered by Zod and TypeScript.
*   **Auto-Fix Import:** Paste broken or partial JSON, and the app will attempt to repair it (convert types, fill defaults, fix enums).
*   **Live Preview:** Real-time JSON visualization.
*   **Export:** One-click download or copy to clipboard.

## How to Run

1.  Clone repository.
2.  Install dependencies: `npm install`
3.  Run dev server: `npm run dev`
4.  Build for production: `npm run build`

## Architecture

*   **`schema.ts`**: The Source of Truth. Contains the Zod definition of the JSON structure. Edit this file to add new fields or change validation rules.
*   **`constants.ts`**: Stores static lists (Enums) for Select dropdowns.
*   **`utils/autoFix.ts`**: Contains the heuristic logic that recursively merges imported JSON with the Zod schema defaults.
*   **`components/sections/SectionRenderer.tsx`**: The "Router" for the form. It maps the active sidebar step to specific form fields.

## Adding New Fields

1.  Open `schema.ts`.
2.  Add the field to the appropriate Zod object (e.g., `SceneSchema`).
3.  Add a default value in `DEFAULT_VALUES`.
4.  Open `components/sections/SectionRenderer.tsx`.
5.  Add the UI component (e.g., `<TextInput ... />`) in the corresponding `case`.

## Auto-Repair Logic

When importing JSON:
1.  **Parse:** Validates syntax.
2.  **Validate:** Runs strict Zod check.
3.  **Recover:** If validation fails, it recursively walks the `DEFAULT_VALUES` structure.
    *   If an input field exists but has the wrong type (e.g., string "123" instead of number 123), it attempts to cast it.
    *   If a field is missing, it injects the default.
    *   If an enum is invalid, it falls back to default (can be enhanced to find closest match).
