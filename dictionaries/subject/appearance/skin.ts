
export const SKIN_QUALITIES = [
    "hyper-realistic", "realistic mature skin", "porcelain", "rough", "weathered", "oily", "sweaty", "dry", "wrinkled", 
    "freckled_heavy", "freckled_light", "sun-damaged", "perfectly_smooth", "makeup_foundation", 
    "acne_prone", "scarred", "rosacea_flush", "pale_translucent", "tanned_bronze", "sunburned", 
    "vitiligo_patches", "dirty/grimy", "wet_rain", "subsurface_scattering_heavy", "glowing_ethereal",
    "doll-like_plastic", "matte_finish", "dewy_fresh", "pockmarked", "cellulite_visible", "veiny", 
    "hairy_vellus", "shaved_stubble", "goosebumps", "birthmarked", "ashy", "reddish_undertone", 
    "yellow_undertone", "olive_undertone", "cool_undertone", "warm_undertone"
].sort();

export const SKIN_TONE_MAP: Record<string, string> = {
    // Lightest → darkest

    // Ultra-light
    "Albino": "#FDFDFD",
    "Alabaster": "#FBF2EA",
    "Porcelain": "#F5EBE0",
    "Milk": "#F7E6D5",
    "Ivory": "#F2D8C9",
    "Pearl": "#F1D6C6",

    // Undertone markers (still in tone order)
    "Pink (Cool Undertone)": "#E8C3B7",
    "Yellow (Warm Undertone)": "#EED2B2",

    // Light range
    "Wheat": "#F5DEB3",
    "Sand (Light)": "#EFD2B5",
    "Beige (Light)": "#EAC0A6",
    "Beige (Neutral)": "#E2B79C",
    "Buff": "#DCB08F",

    // Light-medium / medium
    "Beige (Medium)": "#D9A988",
    "Oat": "#D2A27F",
    "Olive (Light)": "#C6A07E",
    "Golden (Light)": "#D5A06A",
    "Golden": "#D29851",
    "Tan (Light)": "#CF9254",
    "Tan": "#C68642",
    "Caramel (Light)": "#C37C3F",

    // Undertone marker in the mid-range
    "Reddish (Warm Undertone)": "#C77A58",

    // Medium-deep
    "Honey": "#BB7E42",
    "Caramel": "#B8743A",
    "Olive (Medium)": "#B0885F",
    "Bronze": "#A26435",
    "Copper": "#965424",

    // Deep range
    "Amber Brown": "#8F522C",
    "Brown (Rich)": "#8D5524",
    "Chestnut": "#7E4524",
    "Mocha": "#6F3C1B",
    "Cocoa": "#5E331A",
    "Chocolate (Deep)": "#4F2B16",
    "Espresso": "#3F2416",

    // Darkest
    "Ebony (Dark)": "#3B2219",
    "Onyx": "#2A1A16",
    "Blue-Black": "#1E1312",
};

export const SKIN_TONES = Object.keys(SKIN_TONE_MAP);

export const BODY_TYPES = [
    "slim", "athletic", "average", "curvy", "muscular", "bodybuilder", "plus_size", "obese", 
    "skinny/lanky", "petite", "tall", "stocky", "broad-shouldered", "pear_shaped", "hourglass", 
    "rectangular", "inverted_triangle", "soft/flabby", "toned/lean", "wiry", "pregnant", 
    "elderly_frail", "childlike", "curvy_fit", "fit_curvy"
].sort();
