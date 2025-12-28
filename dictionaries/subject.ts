
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
    "Caucasian", "Nordic", "Slavic", "Mediterranean", "Celtic", "Germanic",
    "African", "West African", "East African", "South African", "African American", "Afro-Caribbean",
    "Asian", "East Asian (Chinese)", "East Asian (Japanese)", "East Asian (Korean)", "Southeast Asian (Thai/Vietnamese)", "South Asian (Indian)", "South Asian (Pakistani)",
    "Latino/Hispanic", "Mexican", "Brazilian", "Colombian", "Indigenous American",
    "Middle Eastern", "Arab", "Persian", "Turkish", "Israeli",
    "Pacific Islander", "Polynesian", "Maori", "Filipino",
    "Mixed Race", "Eurasian", "Blasian", "Mestizo", "Mulatto"
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
    "elderly_frail", "childlike"
].sort();

export const SKIN_TONE_MAP: Record<string, string> = {
    "Albino": "#FDFDFD", "Pale Porcelain": "#F5EBE0", "Fair Ivory": "#F2D8C9", "Light Beige": "#EAC0A6", 
    "Medium Beige": "#D9A988", "Olive Light": "#C6A07E", "Olive Medium": "#B0885F", "Tan": "#C68642", 
    "Golden": "#D29851", "Honey": "#BB7E42", "Bronze": "#A26435", "Rich Brown": "#8D5524", 
    "Copper": "#965424", "Mocha": "#6F3C1B", "Deep Chocolate": "#4F2B16", "Dark Ebony": "#3B2219", 
    "Blue-Black": "#1E1312", "Reddish": "#C77A58", "Cool Pink": "#E8C3B7", "Warm Yellow": "#EED2B2",
    "Light": "#F5DEB3" // Added for "Light" skin tone
};

export const HAIR_COLORS_MAP: Record<string, string> = {
    "Black": "#090909", "Off-Black": "#2C2C2C", "Dark Brown": "#3B3024", "Medium Brown": "#4E433F", 
    "Light Brown": "#8D745C", "Chestnut": "#5D4037", "Auburn": "#7D3F32", "Red": "#8D2818", 
    "Reddish Brown": "#8D4004", // Added
    "Ginger": "#B65F43", "Strawberry Blonde": "#D68E69", "Dark Blonde": "#A78B66", "Golden Blonde": "#D1B26F", 
    "Platinum Blonde": "#EFE8C9", "White": "#F5F5F5", "Grey": "#9E9E9E", "Salt and Pepper": "#686868", 
    "Dyed Blue": "#1E3A8A", "Dyed Pink": "#EC4899", "Dyed Green": "#10B981", "Dyed Purple": "#7C3AED", 
    "Rainbow": "#F59E0B"
};

export const HAIR_STYLES = [
    "Bald/Shaved", "Buzz Cut", "Crew Cut", "Fade", "Undercut", "Short Textured", "Pixie Cut", "Bob", 
    "Long Bob (Lob)", "Shoulder Length", "Long Straight", "Long Wavy", "Long Curly", "Afro", "Short Dreads", 
    "Long Dreads", "Braids (Box)", "Cornrows", "French Braid", "Ponytail High", "Ponytail Low", "Messy Bun", 
    "Top Knot", "Space Buns", "Pigtails", "Mohawk", "Mullet", "Curtains", "Slicked Back", "Pompadour", 
    "Quiff", "Faux Hawk", "Bowl Cut", "Layered Cut", "Layered with bangs", "Feathered", "Shag", "Wolf Cut", "Hime Cut", 
    "Bangs (Blunt)", "Bangs (Curtain)", "Bangs (Side)", "Wispy Bangs", "Wet Look", "Windblown", 
    "Bedhead/Messy", "Half-Up Half-Down", "Crown Braid", "Fishtail Braid", "Twists", "Bantu Knots", 
    "Finger Waves", "Vintage Rolls", "Beehive", "Perm"
].sort();

export const EYE_COLOR_MAP: Record<string, string> = {
    "Amber": "#FFBF00", "Blue": "#4287f5", "Blue-Grey": "#69829c", "Brown": "#634e34", 
    "Dark Brown": "#3d2b1f", "Green": "#4d8c57", "Grey": "#8c9491", "Hazel": "#8e7618", 
    "Honey": "#ba8e23", "Violet": "#7a4988", "Black": "#1a1a1a", "Heterochromia": "#d4af37", 
    "Albino Red": "#b0413e", "Pale Blue": "#a8c8e8", "Emerald": "#0f7028"
};

export const EYE_SHAPES = [
    "Almond", "Round", "Monolid", "Hooded", "Upturned", "Downturned", "Deep Set", "Wide Set", 
    "Close Set", "Protruding", "Small", "Large", "Asian", "Cat-eye", "Droopy", "Sleepy", 
    "Squinting", "Uneven", "Sanpaku", "Doe-eyed", "Smiling"
].sort();

export const DISTINCT_FEATURES = [
    "Freckles", "Moles", "Acne Scars", "Surgical Scar", "Cleft Chin", "Dimples", "High Cheekbones", 
    "Strong Jawline", "Double Chin", "Hooked Nose", "Button Nose", "Large Ears", "Gap Teeth", 
    "Braces", "Glasses", "Monocle", "Eye Patch", "Nose Ring", "Lip Ring", "Eyebrow Piercing", 
    "Face Tattoo", "Rosy Cheeks", "Dark Circles", "Wrinkles", "Birthmark", "Smile lines", "Friendly expression"
].sort();

export const TATTOO_PLACEMENTS = [
    "Forearm", "Upper Arm", "Full Sleeve", "Chest", "Back", "Neck", "Face", "Hand", "Fingers", 
    "Leg", "Calf", "Thigh", "Ankle", "Foot", "Ribs", "Stomach", "Lower Back", "Shoulder", 
    "Behind Ear", "Collarbone", "Wrist", "Knuckles", "Palm", "Head/Scalp", "Lip (Inner)", 
    "Eyebrow", "Cheek", "Chin", "Throat", "Full Body"
].sort();

export const TATTOO_SIZES = ["small", "medium", "large", "xl", "xxl", "full_coverage"];
