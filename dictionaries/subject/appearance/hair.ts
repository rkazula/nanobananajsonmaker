
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

export const HAIR_COLORS = Object.keys(HAIR_COLORS_MAP);

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
