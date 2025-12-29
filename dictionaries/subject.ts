
export const SUBJECT_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "many"];
export const SUBJECT_GROUPING = ["solo", "couple", "small_group", "crowd"];
export const SUBJECT_ROLES = ["primary", "secondary", "background", "foreground_accent"];
export const IDENTITY_LOCKS = ["none", "soft", "strong"];
export const AGE_RANGES = ["child", "teen", "young_adult", "adult", "mature_adult", "middle_aged", "senior"];

export const CONSISTENCY_TAGS = [
    "freckles", "scar_left_cheek", "scar_right_cheek", "mole_upper_lip", "dimples", 
    "cleft_chin", "glasses", "beard_stubble", "full_beard", "mustache", 
    "nose_ring", "ear_piercings", "blue_hair", "pink_hair", "shaved_head",
    "distinct_gap_teeth", "heterochromia", "vitiligo", "albino", "birthmark_face"
].sort();

export const ETHNICITIES = [
    // Broad / umbrella groupings
    "African",
    "Asian",
    "Caucasian",
    "Indigenous",
    "Indigenous American",
    "Middle Eastern",
    "Mixed Race",
    "Pacific Islander",

    // Europe (broad)
    "Celtic",
    "Germanic",
    "Mediterranean",
    "Nordic",
    "Slavic",
    "Southern European",
    "Eastern European",
    "Western European",
    "Northern European",
    "Central European",
    "Balkan",
    "Iberian",
    "Baltic",

    // Specific European identities (requested + common additions)
    "Polish",
    "Ukrainian",
    "Russian",
    "Belarusian",
    "Czech",
    "Slovak",
    "Lithuanian",
    "Latvian",
    "Estonian",
    "Swedish",
    "Finnish",
    "Norwegian",
    "Danish",
    "Icelandic",
    "British",
    "English",
    "Scottish",
    "Welsh",
    "Irish",
    "French",
    "German",
    "Dutch",
    "Belgian",
    "Swiss",
    "Austrian",
    "Hungarian",
    "Romanian",
    "Bulgarian",
    "Serbian",
    "Croatian",
    "Bosnian",
    "Montenegrin",
    "Macedonian",
    "Albanian",
    "Greek",
    "Italian",
    "Sicilian",
    "Spanish",
    "Portuguese",
    "Maltese",
    "Georgian",
    "Armenian",
    "Azerbaijani",

    // Africa (regional)
    "West African",
    "East African",
    "North African",
    "Central African",
    "South African",
    "African American",
    "Afro-Caribbean",

    // MENA (Middle East & North Africa) more granular
    "Arab",
    "Berber/Amazigh",
    "Egyptian",
    "Levantine",
    "Israeli",
    "Kurdish",
    "Persian",
    "Turkish",

    // Americas (identity / nationality-ish — as in your current list)
    "American",
    "Canadian",
    "Mexican",
    "Latino/Hispanic",
    "Brazilian",
    "Colombian",
    "Argentinian",
    "Chilean",
    "Peruvian",
    "Venezuelan",
    "Cuban",
    "Puerto Rican",
    "Dominican",

    // Indigenous Americas (broader)
    "Native American",
    "First Nations",
    "Inuit",
    "Metis",

    // Asia (regional)
    "Central Asian",
    "East Asian",
    "South Asian",
    "Southeast Asian",

    // East Asia (requested + clearer structure)
    "Chinese",
    "Japanese",
    "Korean",
    "Mongolian",

    // Southeast Asia (requested + common additions)
    "Thai",
    "Vietnamese",
    "Filipino",
    "Indonesian",
    "Malaysian",
    "Singaporean",
    "Cambodian",
    "Laotian",
    "Burmese/Myanmarese",

    // South Asia (requested + common additions)
    "Indian",
    "Pakistani",
    "Bangladeshi",
    "Sri Lankan",
    "Nepalese",
    "Bhutanese",

    // Central Asia (requested)
    "Uzbek",
    "Kazakh",
    "Kyrgyz",
    "Tajik",
    "Turkmen",

    // Pacific / Oceania (requested + common additions)
    "Hawaiian",
    "Polynesian",
    "Maori",
    "Samoan",
    "Tongan",
    "Guamanian/Chamorro",
    "Melanesian",
    "Micronesian",

    // Mixed (your current set + a couple popular)
    "Blasian",
    "Eurasian",
    "Mestizo",
    "Mulatto",
    "Afro-Latino"
].sort();

export const SKIN_QUALITIES = [
    "hyper-realistic", "realistic mature skin", "porcelain", "rough", "weathered", "oily", "sweaty", "dry", "wrinkled", 
    "freckled_heavy", "freckled_light", "sun-damaged", "perfectly_smooth", "makeup_foundation", 
    "acne_prone", "scarred", "rosacea_flush", "pale_translucent", "tanned_bronze", "sunburned", 
    "vitiligo_patches", "dirty/grimy", "wet_rain", "subsurface_scattering_heavy", "glowing_ethereal",
    "doll-like_plastic", "matte_finish", "dewy_fresh", "pockmarked", "cellulite_visible", "veiny", 
    "hairy_vellus", "shaved_stubble", "goosebumps", "birthmarked", "ashy", "reddish_undertone", 
    "yellow_undertone", "olive_undertone", "cool_undertone", "warm_undertone"
].sort();

export const BODY_TYPES = [
    "slim", "athletic", "average", "curvy", "muscular", "bodybuilder", "plus_size", "obese", 
    "skinny/lanky", "petite", "tall", "stocky", "broad-shouldered", "pear_shaped", "hourglass", 
    "rectangular", "inverted_triangle", "soft/flabby", "toned/lean", "wiry", "pregnant", 
    "elderly_frail", "childlike", "curvy_fit", "fit_curvy"
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

export const HAIR_COLORS_MAP: Record<string, string> = {
    // --- Blacks (natural) ---
    "Jet Black": "#050505",
    "Black": "#090909",
    "Soft Black": "#121212",
    "Off Black": "#2C2C2C",
    "Blue Black": "#0B0F1A",

    // --- Dark Browns ---
    "Espresso Brown": "#1B120E",
    "Dark Chocolate Brown": "#2A1C16",
    "Chocolate Brown": "#3B3024",
    "Dark Brown": "#3B3024",
    "Cool Dark Brown": "#2F2A28",
    "Warm Dark Brown": "#3A261C",

    // --- Medium Browns ---
    "Medium Brown": "#4E433F",
    "Mocha Brown": "#3F2C25",
    "Coffee Brown": "#4A332B",
    "Walnut Brown": "#4A372F",
    "Chestnut Brown": "#5D4037",
    "Mahogany Brown": "#5A2D2D",
    "Cocoa Brown": "#5B4036",

    // --- Light Browns / Brunettes ---
    "Light Brown": "#8D745C",
    "Sandy Brown": "#8A6B55",
    "Caramel Brown": "#8B5A2B",
    "Honey Brown": "#9A6B3C",
    "Toffee Brown": "#7A5536",
    "Ash Brown (Light)": "#7C6F66",
    "Ash Brown (Medium)": "#6B5E55",

    // --- Brunette Highlights / Sun-kissed ---
    "Brown With Caramel Highlights": "#8A6A4F",
    "Brown With Honey Highlights": "#8D745C",
    "Brown With Golden Highlights": "#916B4A",

    // --- Red / Auburn spectrum ---
    "Reddish Brown": "#8D4004",
    "Auburn (Dark)": "#5A2A22",
    "Auburn": "#7D3F32",
    "Copper Auburn": "#8A3B2A",
    "Cinnamon": "#7A3A2A",
    "Rust": "#8B3A2B",
    "True Red": "#8D2818",
    "Copper Red": "#B34A2E",
    "Ginger": "#B65F43",
    "Light Copper": "#C56E4A",

    // --- Strawberry / Rose tones (natural-leaning) ---
    "Strawberry Blonde": "#D68E69",
    "Rose Gold": "#C98A7A",

    // --- Blondes (dark → light) ---
    "Dark Blonde": "#A78B66",
    "Dirty Blonde": "#A38B6A",
    "Beige Blonde": "#C7A985",
    "Golden Blonde": "#D1B26F",
    "Honey Blonde": "#D6B07A",
    "Warm Blonde": "#D8B58A",
    "Sandy Blonde": "#D4B08F",
    "Ash Blonde": "#BFAE9A",
    "Champagne Blonde": "#E2D2B8",
    "Light Blonde": "#E4C79A",
    "Butter Blonde": "#E3C27A",

    // --- Ultra-light blondes / platinum ---
    "Platinum Blonde": "#E5E4E2",
    "Icy Platinum": "#EEEFF2",
    "Silver Blonde": "#D9DCE1",

    // --- Grey / White ---
    "Salt And Pepper": "#686868",
    "Steel Grey": "#7A7F86",
    "Grey": "#9E9E9E",
    "Silver": "#C0C0C0",
    "White": "#F5F5F5",

    // --- Fantasy / Dyed (cool tones) ---
    "Dyed Blue (Deep)": "#1E3A8A",
    "Dyed Blue (Electric)": "#2563EB",
    "Dyed Teal": "#0EA5A4",
    "Dyed Green (Emerald)": "#10B981",
    "Dyed Green (Lime)": "#84CC16",
    "Dyed Purple (Deep)": "#4C1D95",
    "Dyed Purple": "#7C3AED",
    "Dyed Lavender": "#A78BFA",

    // --- Fantasy / Dyed (warm tones) ---
    "Dyed Pink": "#EC4899",
    "Dyed Hot Pink": "#FF2D95",
    "Dyed Rose": "#F472B6",
    "Dyed Coral": "#FB7185",
    "Dyed Orange": "#F97316",
    "Dyed Yellow": "#F59E0B",

    // --- Pastels (photo-real friendly) ---
    "Pastel Pink": "#FBCFE8",
    "Pastel Peach": "#FED7AA",
    "Pastel Mint": "#BBF7D0",
    "Pastel Blue": "#BFDBFE",
    "Pastel Lilac": "#E9D5FF",

    // --- Multi / gradients / techniques (single representative hex) ---
    "Brunette Balayage": "#7C5A45",
    "Bronde Balayage": "#967658",
    "Blonde Balayage": "#C9AD86",
    "Ombré (Brown To Blonde)": "#A48366",
    "Money Piece Highlights": "#D6B07A",

    // --- Special ---
    "Rainbow": "#F59E0B",
};

export const HAIR_STYLES = [
    // Natural / Everyday
    "Straight",
    "Wavy",
    "Curly",
    "Coily",
    "Layered Cut",
    "Feathered",
    "Shag",
    "Wolf Cut",
    "Bob",
    "Lob",
    "Pixie Cut",
    "Afro",
    "Buzz Cut",
    "Crew Cut",
    "Undercut",
    "Fade",
    "Pompadour",
    "Quiff",
    "Slick Back",
    "Side Part",
    "Curtains",
    "Bowl Cut",

    // Braids / Protective
    "Box Braids",
    "Knotless Braids",
    "Cornrows",
    "Dreads",
    "Faux Locs",
    "Twists",
    "Bantu Knots",

    // Updos / Styling
    "High Ponytail",
    "Low Ponytail",
    "Messy Bun",
    "Sleek Bun",
    "Top Knot",
    "Space Buns",
    "Half-Up Half-Down",

    // Alternative
    "Mohawk",
    "Faux Hawk",
    "Mullet",
    "Modern Mullet",
    "Shullet",

    // Historical
    "Beehive",
    "Finger Waves",
    "Victory Rolls",
    "Pageboy",
    "Roman Curls",
    "Medieval Braids",
    "Victorian Updo",

    // Futuristic / Sci-Fi
    "Cyber Undercut",
    "Neon Fade",
    "Holographic Bob",
    "Synthetic Dreads",
    "Chrome Buzz",
    "Asymmetrical Tech Cut",

    // Iconic – Football
    "Beckham 1998 Curtains",
    "Ronaldo Nazario 2002",
    "Cristiano Ronaldo Fade",
    "Neymar Frosted Tips",
    "Messi Short Fade",
    "Mbappe Buzz Fade",

    // Iconic – Film / Pop Culture
    "Matrix Neo Cut",
    "Blade Runner Undercut",
    "Leia Space Buns",
    "Daenerys Braids",
    "Viking Undercut",
    "Elvis Pompadour",
    "James Bond Classic Side Part",
];

export const HAIR_STYLE_GENDER_MAP: Record<string, ("Male" | "Female" | "Unisex")[]> = {
    "Buzz Cut": ["Male", "Unisex"],
    "Crew Cut": ["Male"],
    "Fade": ["Male"],
    "Pompadour": ["Male"],
    "Quiff": ["Male"],
    "Side Part": ["Male", "Unisex"],
    "Curtains": ["Male"],
    "Undercut": ["Male", "Unisex"],
    "Mohawk": ["Male", "Unisex"],
    "Faux Hawk": ["Male"],
    "Mullet": ["Unisex"],
    "Modern Mullet": ["Unisex"],

    "Pixie Cut": ["Female"],
    "Bob": ["Female", "Unisex"],
    "Lob": ["Female", "Unisex"],
    "Layered Cut": ["Female", "Unisex"],
    "Feathered": ["Female"],
    "Shag": ["Unisex"],
    "Wolf Cut": ["Unisex"],

    "Box Braids": ["Female", "Unisex"],
    "Knotless Braids": ["Female"],
    "Cornrows": ["Unisex"],
    "Dreads": ["Unisex"],
    "Faux Locs": ["Female"],
    "Twists": ["Unisex"],

    "High Ponytail": ["Female"],
    "Low Ponytail": ["Unisex"],
    "Messy Bun": ["Unisex"],
    "Sleek Bun": ["Female"],
    "Top Knot": ["Unisex"],
    "Space Buns": ["Female"],
    "Half-Up Half-Down": ["Female"],

    // history & sci-fi
    "Beehive": ["Female"],
    "Finger Waves": ["Female"],
    "Victory Rolls": ["Female"],
    "Pageboy": ["Unisex"],
    "Cyber Undercut": ["Unisex"],
    "Neon Fade": ["Unisex"],
    "Holographic Bob": ["Female"],
    "Synthetic Dreads": ["Unisex"],

    // iconic
    "Beckham 1998 Curtains": ["Male"],
    "Ronaldo Nazario 2002": ["Male"],
    "Cristiano Ronaldo Fade": ["Male"],
    "Neymar Frosted Tips": ["Male"],
    "Messi Short Fade": ["Male"],
    "Mbappe Buzz Fade": ["Male"],

    "Leia Space Buns": ["Female"],
    "Daenerys Braids": ["Female"],
    "Viking Undercut": ["Male"],
    "Elvis Pompadour": ["Male"],
    "James Bond Classic Side Part": ["Male"],
};

export const HAIR_LENGTHS = [
    "Bald",
    "Buzz",
    "Very Short",
    "Short",
    "Medium",
    "Medium-Long",
    "Long",
    "Very Long",
    "Ultra Long",
];

export const HAIR_STYLE_LENGTH_MAP: Record<string, typeof HAIR_LENGTHS[number][]> = {
    "Buzz Cut": ["Buzz"],
    "Crew Cut": ["Very Short"],
    "Fade": ["Very Short", "Short"],
    "Pixie Cut": ["Short"],
    "Bob": ["Short", "Medium"],
    "Lob": ["Medium"],
    "Layered Cut": ["Medium", "Long"],
    "Feathered": ["Medium", "Long"],
    "Shag": ["Medium", "Long"],
    "Wolf Cut": ["Medium", "Long"],
    "Afro": ["Short", "Medium"],
    "Dreads": ["Medium", "Long", "Very Long"],
    "Box Braids": ["Medium", "Long", "Very Long"],
    "Cornrows": ["Short", "Medium"],
    "High Ponytail": ["Long", "Very Long"],
    "Messy Bun": ["Medium", "Long"],
    "Top Knot": ["Medium", "Long"],

    // iconic
    "Beckham 1998 Curtains": ["Medium"],
    "Cristiano Ronaldo Fade": ["Short"],
    "Neymar Frosted Tips": ["Short"],
    "Daenerys Braids": ["Very Long"],
    "Leia Space Buns": ["Medium"],
    "Viking Undercut": ["Medium", "Long"],

    // futuristic
    "Cyber Undercut": ["Short", "Medium"],
    "Holographic Bob": ["Medium"],
    "Synthetic Dreads": ["Long", "Very Long"],
};

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


export const DISTINCT_FEATURES = [
    "Freckles", "Moles", "Acne Scars", "Surgical Scar", "Cleft Chin", "Dimples", "High Cheekbones", 
    "Strong Jawline", "Double Chin", "Hooked Nose", "Button Nose", "Large Ears", "Gap Teeth", 
    "Braces", "Glasses", "Monocle", "Eye Patch", "Nose Ring", "Lip Ring", "Eyebrow Piercing", 
    "Face Tattoo", "Rosy Cheeks", "Dark Circles", "Wrinkles", "Birthmark", "Smile lines", "Friendly expression",
    "glam makeup (defined brows, eyeliner, matte lipstick)",
    "tattoo sleeves on both arms",
    "tattoo on upper thigh",
    "soft makeup",
    "calm confident expression",
    "subtelny makijaż beauty (lekki połysk ust, wyrównany koloryt)",
    "mały, delikatny naszyjnik",
    "Navel Piercing",
    "Tan Lines",
    "Sun-kissed Skin",
    "Wet Skin",
    "Sand on Skin"
].sort();

export const TATTOO_PLACEMENTS = [
    "Forearm", "Upper Arm", "Full Sleeve", "Chest", "Back", "Neck", "Face", "Hand", "Fingers", 
    "Leg", "Calf", "Thigh", "Ankle", "Foot", "Ribs", "Stomach", "Lower Back", "Shoulder", 
    "Behind Ear", "Collarbone", "Wrist", "Knuckles", "Palm", "Head/Scalp", "Lip (Inner)", 
    "Eyebrow", "Cheek", "Chin", "Throat", "Full Body"
].sort();

export const TATTOO_SIZES = ["small", "medium", "large", "xl", "xxl", "full_coverage"];
