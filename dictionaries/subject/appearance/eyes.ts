
export const EYE_COLOR_MAP: Record<string, string> = {
    // ===== Darkest =====
    "Black": "#1A1A1A",
    "Brown (Very Dark)": "#2A1B14",
    "Brown (Dark)": "#3D2B1F",
    "Brown": "#634E34",
    "Brown (Medium)": "#6B4A2F",
    "Brown (Light)": "#7A5A3A",
    "Chocolate Brown": "#3B241A",
    "Espresso Brown": "#2B1A14",

    // ===== Brown variations (warm/cool) =====
    "Warm Brown": "#6A3F2A",
    "Cool Brown": "#5A463B",
    "Cognac": "#7B4A2A",
    "Chestnut Brown": "#6D3F2B",

    // ===== Amber / Honey / Gold =====
    "Amber": "#FFBF00",
    "Amber (Deep)": "#D79A00",
    "Amber (Light)": "#FFD36B",
    "Honey": "#BA8E23",
    "Honey (Light)": "#D0A53A",
    "Gold": "#D4AF37",
    "Golden Brown": "#8A6A2A",

    // ===== Hazel (mixed brown/green) =====
    "Hazel": "#8E7618",
    "Hazel (Green-Dominant)": "#6F7A22",
    "Hazel (Brown-Dominant)": "#7B6216",
    "Hazel (Golden)": "#9A7B1F",

    // ===== Greens =====
    "Green": "#4D8C57",
    "Green (Dark)": "#2F6E3B",
    "Green (Light)": "#77B37A",
    "Emerald": "#0F7028",
    "Emerald (Deep)": "#0B4E22",
    "Forest Green": "#1F5A3A",
    "Olive Green": "#5B6E3B",
    "Sage Green": "#7E9A7A",

    // ===== Teal / Blue-Green (common in real photos) =====
    "Teal": "#2F7F7A",
    "Teal (Light)": "#4CA7A0",
    "Aqua": "#5BB9C9",

    // ===== Greys =====
    "Grey": "#8C9491",
    "Grey (Light)": "#A7B0AD",
    "Grey (Dark)": "#66706E",
    "Steel Grey": "#6E7D8B",
    "Slate Grey": "#5F6E7A",

    // ===== Blue-Grey =====
    "Blue-Grey": "#69829C",
    "Blue-Grey (Light)": "#8FA3B7",
    "Blue-Grey (Dark)": "#4F667E",

    // ===== Blues =====
    "Blue": "#4287F5",
    "Blue (Deep)": "#1E57C8",
    "Blue (Light)": "#78A8FF",
    "Pale Blue": "#A8C8E8",
    "Sky Blue": "#7FB4E6",
    "Ice Blue": "#C7E6FF",
    "Navy Blue": "#203A73",

    // ===== Violet / Purple =====
    "Violet": "#7A4988",
    "Violet (Deep)": "#5A2E6D",
    "Lavender": "#A78BFA",

    // ===== Rare / Special cases =====
    "Albino Red": "#B0413E",
    "Heterochromia": "#D4AF37",
};

export const EYE_COLORS = Object.keys(EYE_COLOR_MAP);

export const EYE_SHAPES = [
    "Almond",
    "Round",
    "Oval",
    "Elongated",
    "Tapered",
    "Triangular",
];

export const EYE_LID_TYPES = [
    "Monolid",
    "Low Crease",
    "Double Eyelid",
    "Deep Crease",
    "Hooded",
    "Partially Hooded",
    "Heavy Upper Lid",
];

export const EYE_TILTS = [
    "Upturned",
    "Downturned",
    "Straight Set",
    "Cat-Eye",
    "Fox-Eye",
];

export const EYE_EXPRESSIONS = [
    "Doe-Eyed",
    "Soft Gaze",
    "Sharp Gaze",
    "Intense",
    "Piercing",
    "Relaxed",
    "Smiling",
    "Sleepy",
    "Bedroom Eyes",
    "Droopy",
    "Wide Open",
    "Squinting",
    "Narrowed",
];

export const EYE_SPACING = [
    "Close Set",
    "Balanced Set",
    "Wide Set",
];

export const EYE_DEPTH = [
    "Deep Set",
    "Recessed",
    "Balanced Depth",
    "Prominent",
    "Protruding",
];
