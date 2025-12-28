
import { MALE_CLOTHING } from './clothing/male';
import { FEMALE_CLOTHING } from './clothing/female';
import { UNISEX_CLOTHING } from './clothing/unisex';

// Export everything from sub-modules
export * from './wardrobe_common';
export * from './poses';
export * from './fabrics';
export * from './patterns';
export * from './clothing/male';
export * from './clothing/female';
export * from './clothing/unisex';
export * from './fit';
export * from './clothing/presets'; // New export

// --- ACCESSORIES (Not split by gender yet as they are generally universally applicable in prompts) ---
export const ACCESSORIES = [
  // Jewelry
  "Necklace",
  "Pendant Necklace",
  "Chain Necklace",
  "Beaded Necklace",
  "Choker",
  "Earrings",
  "Stud Earrings",
  "Hoop Earrings",
  "Drop Earrings",
  "Bracelet",
  "Bangle",
  "Cuff Bracelet",
  "Ring",
  "Signet Ring",
  "Stacking Rings",
  "Watch",
  "Smartwatch",
  "Anklet",
  "Brooch",
  "Body Chain",

  // Eyewear
  "Glasses",
  "Sunglasses",
  "Aviator Sunglasses",
  "Wayfarer Sunglasses",
  "Cat-Eye Sunglasses",
  "Round Glasses",

  // Headwear / hair (Items that act as accessories rather than primary clothing)
  "Headband",
  "Hair Clip",
  "Hair Pin",
  "Scrunchie",
  "Hair Scarf",
  "Veil",

  // Neck / hands
  "Scarf",
  "Silk Scarf",
  "Cashmere Scarf",
  "Neck Tie",
  "Bow Tie",
  "Pocket Square",

  // Belts
  "Belt",
  "Leather Belt",
  "Chain Belt",
  "Corset Belt",

  // Bags
  "Bag",
  "Handbag",
  "Shoulder Bag",
  "Crossbody Bag",
  "Tote Bag",
  "Clutch",
  "Backpack",
  "Briefcase",
  "Messenger Bag",
  "Belt Bag",
  "Travel Bag",

  // Small items
  "Wallet",
  "Card Holder",
  "Keychain",
  "Phone Case",
  "Earbuds",
  "Headphones",
  "Umbrella",
  "Cigarette Holder (Prop)",
  "Fan (Hand Fan)",
  "Perfume Bottle (Prop)"
].sort();

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
