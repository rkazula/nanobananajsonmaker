
export const CLOTHING_PLACEMENTS = [
  "Head", 
  "Upper Body", 
  "Lower Body", 
  "Full Body", 
  "Feet", 
  "Hands", 
  "Intimate"
] as const;

export type ClothingPlacement = typeof CLOTHING_PLACEMENTS[number];

export const CLOTHING_COVERAGE = [
  "Full Coverage", "Partial Coverage", "Minimal Coverage", "Revealing"
] as const;
