
export const COLOR_HEX_MAP: Record<string, string> = {
  "Black": "#000000", "White": "#FFFFFF", "Red": "#FF0000", "Blue": "#0000FF", "Green": "#008000", "Yellow": "#FFFF00",
  "Cream": "#FFFDD0", "Beige": "#F5F5DC", "Brown": "#A52A2A", "Grey": "#808080", "Pink": "#FFC0CB", "Purple": "#800080",
  "Orange": "#FFA500", "Gold": "#FFD700", "Silver": "#C0C0C0", "Navy": "#000080", "Teal": "#008080", "Maroon": "#800000",
  "Olive": "#808000", "Cyan": "#00FFFF", "Magenta": "#FF00FF",
  // New additions
  "Reddish Brown": "#8D4004", "Silver/Crystal": "#E0E0E0", "Crystal": "#F0F8FF"
};

export const COLORS = Object.keys(COLOR_HEX_MAP).sort();

export const NEGATIVE_PROMPT_GROUPS = {
  "Safety / Content": [
    "nudity", "explicit nudity", "nsfw", "porn", "sexual content", "genitals", 
    "nipples", "areola", "see-through", "erotic", "fetish", "bondage", 
    "sexual pose", "suggestive pose", "child", "minor", "teen", "loli", 
    "young-looking", "underage"
  ],
  "Anatomy / Body": [
    "bad anatomy", "deformed anatomy", "disfigured", "mutated", "malformed", 
    "gross proportions", "bad proportions", "asymmetrical face", "warped face", 
    "broken neck", "broken spine", "missing limbs", "extra limbs", "extra arms", 
    "extra legs", "extra fingers", "missing fingers", "fused fingers", 
    "too many fingers", "long fingers", "crooked fingers", "bad hands", 
    "poorly drawn hands", "deformed hands", "bad feet", "extra toes", 
    "missing toes", "fused toes", "bad joints", "twisted limbs", "unnatural pose", 
    "unnatural body", "duplicate body", "cloned face", "double head", 
    "multiple heads", "floating limbs", "floating head"
  ],
  "Face / Eyes / Details": [
    "bad face", "deformed face", "uncanny face", "melted face", "bad eyes", 
    "cross-eyed", "lazy eye", "misaligned eyes", "different eye sizes", 
    "extra eyes", "missing eyes", "glassy eyes", "dead eyes", "bad pupils", 
    "bad iris", "bad teeth", "extra teeth", "missing teeth", "crooked teeth", 
    "weird smile", "bad mouth", "bad lips"
  ],
  "Quality / Artifacts": [
    "low quality", "worst quality", "lowres", "pixelated", "jpeg artifacts", 
    "compression artifacts", "aliasing", "moire", "banding", "noise", 
    "oversharpened", "overprocessed", "plastic skin", "waxy skin", "airbrushed", 
    "over-smoothed", "overexposed", "underexposed", "blown highlights", 
    "crushed blacks", "posterization", "static background", "frozen image"
  ],
  "Focus / Geometry": [
    "blur", "motion blur", "camera shake", "out of focus", "soft focus", 
    "depth of field errors", "distortion", "fisheye distortion", 
    "warped perspective", "tilted horizon", "wrong horizon", "bent lines", 
    "bad composition", "cropped face", "cropped head", "cropped hands", 
    "cropped feet", "cut off", "out of frame"
  ],
  "Text / Watermarks": [
    "text", "caption", "subtitles", "logo", "brand logo", "watermark", 
    "signature", "timestamp", "ui", "interface", "frame", "border", "qr code"
  ],
  "Style Blockers (Anti-Art)": [
    "cartoon", "anime", "manga", "illustration", "cgi", "3d render", 
    "game art", "toy-like", "doll", "plastic", "painting", "sketch", "lineart"
  ]
};

// Flatten for backward compatibility with schema validation or simple lists
export const COMMON_NEGATIVE_PROMPTS = Object.values(NEGATIVE_PROMPT_GROUPS).flat();
