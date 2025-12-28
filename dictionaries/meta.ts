
export const QUALITY_MODES_DATA = [
  {
    value: "ultra_photorealistic",
    desc: "Maximum camera-believability: lifelike skin texture, natural micro-contrast, realistic materials, zero ‘CG’ feel. Best for premium portraits, product realism, and images meant to pass as real photos. Works best when prompts specify lens + lighting + subtle grain."
  },
  {
    value: "photorealistic",
    desc: "Strong real-photo look without pushing into hyper-detail artifacts. Best default for most portrait/lifestyle work. Safer than ultra_photorealistic when anatomy or hands are complex."
  },
  {
    value: "high_realism",
    desc: "Realistic with a touch more clarity and definition than standard photoreal. Best for editorial portraits, fashion, and crisp lifestyle scenes—good balance of detail vs stability."
  },
  {
    value: "realistic",
    desc: "General-purpose realism. Best for quick iterations and broad scenes where strict photographic perfection isn’t required. Often more forgiving for complex compositions."
  },
  {
    value: "natural_realism",
    desc: "Realism with ‘honest’ texture: natural skin, subtle imperfections, minimal glamour. Best for documentary portraits, lifestyle, and believable everyday scenes."
  },
  {
    value: "cinematic_realism",
    desc: "Film-like realism: motivated lighting, atmospheric depth, controlled contrast, and ‘movie frame’ composition. Best for night streets, dramatic interiors, widescreen ratios (2:1 / 2.39:1), and narrative scenes."
  },
  {
    value: "editorial_realism",
    desc: "Magazine-ready realism: premium lighting, intentional styling, clean composition, but still photographic. Best for fashion portraits, covers, and high-end lifestyle. Pair with subtle film grain for credibility."
  },
  {
    value: "commercial_photo",
    desc: "Brand-safe, polished, readable realism. Best for ads, hero images, and clean product-in-context shots. Prioritizes clarity, flattering light, and minimal visual noise."
  },
  {
    value: "studio_clean",
    desc: "Controlled studio look: even exposure, clean backgrounds, predictable shadows. Best for headshots, corporate portraits, and catalog-style images where consistency matters."
  },
  {
    value: "catalog_product",
    desc: "E-commerce product realism: sharp edges, accurate materials, neutral lighting, minimal shadows. Best for packshots, listings, and product detail pages—avoid heavy atmosphere and stylization."
  },
  {
    value: "documentary",
    desc: "Truth-first realism: imperfect framing, available light, authentic mood, sometimes grain/noise. Best for reportage, travel, and ‘real moment’ storytelling. Great for reducing the ‘posed AI’ vibe."
  },
  {
    value: "street_photography",
    desc: "Candid urban realism: fast shutter feel, natural clutter, strong sense of place, occasional motion. Best for city scenes, nightlife, and spontaneous portraits—pair with 28–35mm lens cues."
  },
  {
    value: "portrait_pro",
    desc: "Professional portrait standard: flattering perspective, controlled skin texture, clean catchlights, and strong subject separation. Best for headshots, editorial portraits, and premium personal branding."
  },
  {
    value: "beauty_retouch",
    desc: "High-end beauty finish: smoother skin while preserving realism, clean highlights, refined makeup/hair. Best for cosmetics, glamour, and beauty editorials. AI tip: include 'natural pores, not plastic' to avoid over-smoothing."
  },
  {
    value: "soft_retouch",
    desc: "Light retouch only: reduces distractions but keeps pores and natural texture. Best for realistic portraits that still feel polished—ideal for ‘natural but premium’ results."
  },
  {
    value: "hyperreal",
    desc: "Sharper-than-life clarity and contrast—almost ‘too real’. Best for dramatic product shots, architecture, and stylized portraits where intensity is desired. Risk: can create uncanny skin or crunchy edges if overdone."
  },
  {
    value: "high_detail",
    desc: "Enhanced detail level (fabric, hair, micro-textures) while staying mostly natural. Best for premium portraits, fashion fabrics, jewelry, and close editorial crops."
  },
  {
    value: "ultra_detail",
    desc: "Maximum micro-detail emphasis (pores, threads, tiny reflections). Best for macro/product and very controlled portraits. Risk: can amplify artifacts—use with simple compositions and strong lighting descriptions."
  },
  {
    value: "crisp_detail",
    desc: "Clean, sharp, high-clarity look without going full ultra-detail. Best for commercial/editorial where readability matters (hair, eyes, clothing edges)."
  },
  {
    value: "low_detail",
    desc: "Reduced micro-detail for a softer, simpler image. Best for background plates, dreamy portraits, nostalgic looks, or when artifacts appear at high detail settings."
  },
  {
    value: "painterly_realism",
    desc: "Realistic scene with painterly softness and gentle brush-like transitions (still grounded in photography). Best for fine-art editorial, romantic portraits, and stylized realism without going full illustration."
  },
  {
    value: "film_emulation",
    desc: "Color/contrast shaped like film stocks: softer highlight roll-off, gentle grain, organic tones. Best for portraits and lifestyle where you want believable ‘shot on film’ vibe."
  },
  {
    value: "vintage_film_look",
    desc: "Stronger retro film character: more grain, halation, slight color shifts, lower contrast or lifted blacks. Best for 70s/90s nostalgia, street at night, and imperfect candid moods."
  },
  {
    value: "dreamy_realism",
    desc: "Soft, romantic realism with diffusion, bloom, and gentle contrast. Best for golden hour, intimate interiors, and memory-like scenes. AI tip: specify 'diffusion filter' and keep skin texture natural."
  }
] as const;

export const TONES = [
  "warm", "cool", "neutral", "balanced", "natural", "golden", "amber", "sun_kissed", "honey_warm",
  "peachy", "rosy", "dusty_rose", "pastel", "muted", "desaturated", "vibrant", "punchy",
  "teal_and_orange", "cyan_shift", "magenta_shift", "green_cast", "tungsten_warm",
  "daylight_clean", "moonlight_blue", "noir_cool", "moody", "dramatic", "high_contrast",
  "low_contrast", "soft_contrast", "matte", "filmic_matte", "crisp", "clean", "vintage_fade",
  "washed_out", "sepia", "monochrome", "duotone", "black_and_white", "silvery_bw"
].sort();

export const GRAIN_AMOUNTS_DATA = [
  { value: "none", desc: "Pure digital cleanliness. No visible noise. Best for modern commercial work, beauty retouch, and smooth product shots." },
  { value: "ultra_subtle", desc: "Almost invisible structure. Removes the 'plastic' AI sheen without adding visible grit. Essential for basic realism." },
  { value: "very_subtle", desc: "Hint of texture. Mimics ISO 50-100 film or high-end digital sensors. Adds organic cohesion to skin and surfaces." },
  { value: "subtle", desc: "The standard for 'film look'. Noticeable only if looking closely. Bridges the gap between digital and analog. ISO 200 equivalent." },
  { value: "light", desc: "Visible fine grain. Creates a pleasant texture across gradients (sky/walls). Great for lifestyle and daylight editorial. ISO 400 vibe." },
  { value: "light_medium", desc: "Definite analog presence. Softens sharpness slightly for a flattering, non-digital aesthetic. Good for wedding/event vibes." },
  { value: "medium", desc: "Classic 35mm feel. Visible grain pattern that adds character. Best for street photography, candid moments, and ISO 800 looks." },
  { value: "medium_strong", desc: "Pronounced texture. Adds grit and mood. Shadows become textured. Best for low-light reportage and indie cinema styles." },
  { value: "strong", desc: "Heavy aesthetic grain. Reduces fine detail but adds intense atmosphere. Best for black & white noir, punk fashion, or raw documentary." },
  { value: "very_strong", desc: "Dominant texture. The image feels 'rough'. Best for war photography simulation, vintage 70s/80s snapshots, or distress effects." },
  { value: "heavy", desc: "Thick, chunky grain. Obscures details. Best for artistic statements, horror moods, or emulating very expired film." },
  { value: "gritty", desc: "Sharp, harsh noise. Less 'organic' and more 'damaged'. Best for cyberpunk, dystopia, or industrial themes." },
  { value: "chunky", desc: "Large grain particles. Low-fidelity look. Best for mimicking old newspaper prints or cheap disposable cameras." },
  { value: "extreme", desc: "Stylized destruction. Image is defined by noise. Best for glitch art or experimental visuals." },
  { value: "over_the_top", desc: "Maximum interference. Use only for specific 'broken camera' or abstract effects." }
] as const;

export const ISO_VALUES_DATA = [
  { value: "ISO 25", desc: "Extremely clean, practically grainless. Maximum sharpness and dynamic range. Sun-drenched landscapes and macro." },
  { value: "ISO 50", desc: "Very fine grain. Studio quality, rich colors, deep blacks. Ideal for high-end fashion and fine art." },
  { value: "ISO 64", desc: "Famous Kodachrome speed. Punchy contrast, almost no noise. Classic vivid travel photography." },
  { value: "ISO 80", desc: "Older digital sensor baseline. Very clean, slightly cooler shadows." },
  { value: "ISO 100", desc: "The daylight standard. Crisp, neutral, perfect for general outdoor use. Reference quality for most models." },
  { value: "ISO 125", desc: "Classic B&W film speed (FP4). nice balance of sharpness and very fine tonal transitions." },
  { value: "ISO 160", desc: "Portrait standard (Portra 160). Exceptionally fine grain for skin, soft contrast, airy highlights." },
  { value: "ISO 200", desc: "Versatile daylight. A hint of texture, very natural. The most common 'sunny day' film speed." },
  { value: "ISO 250", desc: "Vintage cinema stock speed. Rich colors, slightly warmer/softer than digital 200." },
  { value: "ISO 320", desc: "Modern cinema native ISO (Arri). extremely clean highlights, natural shadow rolloff." },
  { value: "ISO 400", desc: "The do-it-all speed (Portra/Tri-X). Visible but pleasant texture. Standard for indoor/outdoor versatility." },
  { value: "ISO 500", desc: "Cinema Tungsten speed (Vision3). Great for artificial light, nice organic grain structure." },
  { value: "ISO 640", desc: "Common digital native ISO. Very clean shadows but slightly more 'electronic' feel than film 400." },
  { value: "ISO 800", desc: "Low light standard. Noticeable grain/noise, adds mood and 'candid' energy. Best for evening events." },
  { value: "ISO 1000", desc: "High speed film push. Contrast increases, shadows get grittier. Dramatic reportage feel." },
  { value: "ISO 1250", desc: "Action freezing speed. Grain becomes a major aesthetic element. Sports and night street." },
  { value: "ISO 1600", desc: "Fast film (Superia/Natura). heavy grain, pastel color shifts, soft details. Nostalgic party vibe." },
  { value: "ISO 3200", desc: "Delta 3200 territory. Golf-ball grain, high contrast B&W, moody, raw, and atmospheric." },
  { value: "ISO 6400", desc: "Modern digital night vision. Color noise enters, shadows lift. Documentary/Surveillance aesthetic." },
  { value: "ISO 12800", desc: "Extreme low light. Significant loss of color accuracy, heavy speckling. Use for 'found footage' looks." }
] as const;

export const IMPERFECTION_PRESETS = [
  "clean_digital", "film_clean", "film_subtle", "film_classic_35mm", "film_heavy_35mm", 
  "cinematic_35mm", "cinematic_16mm", "super8_home_movie", "vintage_print", "disposable_camera", 
  "lofi_point_and_shoot", "gritty_street", "noir_grain", "dreamy_halation", "washed_vintage", 
  "aged_archive", "documentary_rough", "experimental_damage"
].sort();

export const IMPERFECTION_DETAILS = [
  "fine_grain", "coarse_grain", "color_noise_subtle", "luma_noise_subtle", "halation", "bloom", 
  "soft_highlights", "glow_in_highlights", "light_leaks", "gate_weave", "film_jitter", "dust_specs", 
  "hair_in_gate", "micro_scratches", "edge_wear", "vignette_subtle", "vignette_strong", 
  "corner_darkening", "chromatic_aberration_subtle", "focus_breathing_look", "slight_blur_analog", 
  "raised_blacks", "crushed_blacks", "contrast_curve_s", "faded_blacks", "washed_colors", 
  "muted_saturation", "cyan_shift_shadows", "warm_highlights", "cool_shadows", "print_fade", 
  "paper_texture_hint", "scan_lines_subtle"
].sort();

export const FILM_STOCKS_DATA = [
  { value: "Kodak Portra 160", desc: "Very fine grain, natural skin tones, soft saturation. Best for daylight portraits." },
  { value: "Kodak Portra 400", desc: "The industry standard. Great skin tones, warmth, flexible exposure, fine grain." },
  { value: "Kodak Portra 800", desc: "Higher grain, punchy color, warm but handles low light well." },
  { value: "Kodak Ektar 100", desc: "Ultra-fine grain, high saturation, high contrast. Vivid landscapes, not great for skin." },
  { value: "Kodak Gold 200", desc: "Classic nostalgic warm consumer look. Golden hues, affordable vibe." },
  { value: "Kodak ColorPlus 200", desc: "Vintage, slightly yellow/warm cast, nostalgic grain structure." },
  { value: "Kodak Ultramax 400", desc: "Punchy, saturated blues and primary colors. Versatile consumer stock." },
  { value: "Kodak Tri-X 400", desc: "Classic B&W journalism. Gritty grain, high contrast, dramatic." },
  { value: "Kodak T-Max 100", desc: "Sharpest B&W, extremely fine grain, clinical detail." },
  { value: "Kodak T-Max 400", desc: "Sharp B&W with modern grain structure, versatile." },
  { value: "Kodak Vision3 50D", desc: "Cinema film. Extremely fine grain, consistent color, wide dynamic range (daylight)." },
  { value: "Kodak Vision3 200T", desc: "Cinema film. Tungsten balanced, great for artificial light, cinematic look." },
  { value: "Kodak Vision3 500T", desc: "Cinema film. High speed tungsten, classic movie grain, halation potential." },
  { value: "Fujifilm Pro 400H", desc: "Famous for pastel tones, airy highlights, and cool/greenish shadows. Wedding favorite." },
  { value: "Fujifilm Superia X-TRA 400", desc: "Cooler tone, slight magenta/green shift in fluorescents, consumer grade grain." },
  { value: "Fujifilm C200", desc: "Neutral to cool tones, affordable everyday look." },
  { value: "Fujifilm Velvia 50", desc: "Slide film. Extreme saturation, high contrast, vivid landscapes. Difficult dynamic range." },
  { value: "Fujifilm Velvia 100", desc: "Slide film. Vivid colors, high contrast, slightly finer grain than 50." },
  { value: "Fujifilm Provia 100F", desc: "Slide film. Natural but vibrant colors, very fine grain, realistic." },
  { value: "Fujifilm Acros 100 II", desc: "B&W. Rich gradation, sharpness, distinct look." },
  { value: "Ilford HP5 Plus 400", desc: "B&W. Classic press look, medium grain, wide latitude, slightly softer contrast than Tri-X." },
  { value: "Ilford Delta 100", desc: "B&W. Sharp, fine grain, clean look." },
  { value: "Ilford Delta 400", desc: "B&W. Modern crystal structure, sharp but with character." },
  { value: "Ilford Delta 3200", desc: "B&W. heavy prominent grain, mood, low light atmosphere." },
  { value: "Ilford Pan F Plus 50", desc: "B&W. Virtually grain-free, high contrast, studio use." },
  { value: "Ilford FP4 Plus 125", desc: "B&W. High quality, fine grain, excellent latitude." },
  { value: "Ilford XP2 Super 400", desc: "C-41 B&W. Creamy highlights, very fine grain, dye-based monochrome." },
  { value: "Cinestill 50D", desc: "Cinema film for stills. Daylight, distinct halation on bright highlights, cinematic." },
  { value: "Cinestill 800T", desc: "Tungsten cinema film. Famous red halation around lights, teal shadows, night vibe." },
  { value: "Lomography Color 400", desc: "Vibrant, slightly unpredictable, saturated." },
  { value: "Lomography Color 800", desc: "High grain, saturated, lo-fi aesthetic." },
  { value: "Lomography Redscale", desc: "Experimental. Everything is washed in strong red/orange/yellow tones." },
  { value: "Lomography Purple", desc: "Experimental. Shifts greens to purples, surreal look." },
  { value: "Polaroid Color 600", desc: "Soft focus, chemical shifts, square crop vibe, nostalgic imperfections." },
  { value: "Polaroid B&W 600", desc: "Creamy B&W, soft contrast, vintage instant photo look." },
  { value: "Agfa Vista 200", desc: "Punchy reds and blues, very saturated consumer look." },
  { value: "AgfaPhoto APX 100", desc: "B&W. Traditional emulsion, nice gray scale." },
  { value: "Rollei Retro 400S", desc: "B&W. High contrast, clear base, dramatic skies." },
  { value: "Rollei IR 400", desc: "Infrared sensitive. Dreamy, white foliage if filtered, high contrast." },
  { value: "Harman Phoenix 200", desc: "Experimental color. High contrast, strong grain, punchy, sometimes quirky colors." },
  { value: "Kodak Aerochrome (IR Look)", desc: "Faux-Infrared. Turns foliage pink/red, surreal landscapes." },
  { value: "Kodachrome 64 (Classic Look)", desc: "The legend. Archival color, unique color palette, high contrast, red pop." },
  { value: "Ektachrome E100 (Slide Look)", desc: "Slide film. Neutral, fine grain, clean colors." },
  { value: "Generic 35mm Color Negative", desc: "Standard analog look without specific brand bias." },
  { value: "Generic 35mm B&W", desc: "Standard monochrome analog look." },
  { value: "Disposable Camera Look", desc: "Plastic lens feel, flash falloff, cheap film stock aesthetic." }
];

export const FILM_STOCK_DEFAULTS: Record<string, { iso: string, grain: string }> = {
  "Kodak Portra 160": { iso: "ISO 160", grain: "ultra_subtle" },
  "Kodak Portra 400": { iso: "ISO 400", grain: "subtle" },
  "Kodak Portra 800": { iso: "ISO 800", grain: "light_medium" },
  "Kodak Ektar 100": { iso: "ISO 100", grain: "very_subtle" },
  "Kodak Gold 200": { iso: "ISO 200", grain: "subtle" },
  "Kodak ColorPlus 200": { iso: "ISO 200", grain: "light" },
  "Kodak Ultramax 400": { iso: "ISO 400", grain: "light_medium" },
  "Kodak Tri-X 400": { iso: "ISO 400", grain: "strong" },
  "Kodak T-Max 100": { iso: "ISO 100", grain: "very_subtle" },
  "Kodak T-Max 400": { iso: "ISO 400", grain: "medium_strong" },
  "Kodak Vision3 50D": { iso: "ISO 50", grain: "ultra_subtle" },
  "Kodak Vision3 200T": { iso: "ISO 200", grain: "subtle" },
  "Kodak Vision3 500T": { iso: "ISO 500", grain: "light_medium" },
  "Fujifilm Pro 400H": { iso: "ISO 400", grain: "subtle" },
  "Fujifilm Superia X-TRA 400": { iso: "ISO 400", grain: "light_medium" },
  "Fujifilm C200": { iso: "ISO 200", grain: "subtle" },
  "Fujifilm Velvia 50": { iso: "ISO 50", grain: "ultra_subtle" },
  "Fujifilm Velvia 100": { iso: "ISO 100", grain: "very_subtle" },
  "Fujifilm Provia 100F": { iso: "ISO 100", grain: "very_subtle" },
  "Fujifilm Acros 100 II": { iso: "ISO 100", grain: "ultra_subtle" },
  "Ilford HP5 Plus 400": { iso: "ISO 400", grain: "medium_strong" },
  "Ilford Delta 100": { iso: "ISO 100", grain: "very_subtle" },
  "Ilford Delta 400": { iso: "ISO 400", grain: "medium" },
  "Ilford Delta 3200": { iso: "ISO 3200", grain: "heavy" },
  "Ilford Pan F Plus 50": { iso: "ISO 50", grain: "ultra_subtle" },
  "Ilford FP4 Plus 125": { iso: "ISO 125", grain: "subtle" },
  "Ilford XP2 Super 400": { iso: "ISO 400", grain: "subtle" },
  "Cinestill 50D": { iso: "ISO 50", grain: "subtle" },
  "Cinestill 800T": { iso: "ISO 800", grain: "medium_strong" },
  "Lomography Color 400": { iso: "ISO 400", grain: "medium" },
  "Lomography Color 800": { iso: "ISO 800", grain: "strong" },
  "Lomography Redscale": { iso: "ISO 200", grain: "medium_strong" },
  "Lomography Purple": { iso: "ISO 200", grain: "medium" },
  "Polaroid Color 600": { iso: "ISO 600", grain: "chunky" },
  "Polaroid B&W 600": { iso: "ISO 600", grain: "chunky" },
  "Agfa Vista 200": { iso: "ISO 200", grain: "subtle" },
  "AgfaPhoto APX 100": { iso: "ISO 100", grain: "subtle" },
  "Rollei Retro 400S": { iso: "ISO 400", grain: "strong" },
  "Rollei IR 400": { iso: "ISO 400", grain: "strong" },
  "Harman Phoenix 200": { iso: "ISO 200", grain: "light_medium" },
  "Kodak Aerochrome (IR Look)": { iso: "ISO 200", grain: "medium" },
  "Kodachrome 64 (Classic Look)": { iso: "ISO 64", grain: "very_subtle" },
  "Ektachrome E100 (Slide Look)": { iso: "ISO 100", grain: "very_subtle" },
  "Generic 35mm Color Negative": { iso: "ISO 200", grain: "subtle" },
  "Generic 35mm B&W": { iso: "ISO 400", grain: "medium" },
  "Disposable Camera Look": { iso: "ISO 800", grain: "gritty" }
};

export interface OverlayDeviceProfile {
  name: string;
  brand: string;
  notes: string;
  tuning: {
    deFisheye: number;
    distortionCorrection: number;
    sharpening: number;
    microContrast: number;
    noiseReduction: number;
    highlightRecovery: number;
    shadowLift: number;
    hdrCompression: number;
    saturation: number;
    whiteBalanceBiasK: number;
    tint: number;
    skinToneProtect: number;
    stabilizationAssist: number;
    horizonLock: boolean;
  }
}

const DEFAULT_TUNING = {
    deFisheye: 0, distortionCorrection: 35, sharpening: 40, microContrast: 6, noiseReduction: 18, highlightRecovery: 22, shadowLift: 14, hdrCompression: 8, saturation: 2, whiteBalanceBiasK: 0, tint: 0, skinToneProtect: 0, stabilizationAssist: 0, horizonLock: false,
};

// Helper: makes profiles easier without repeating 13 tuning fields
const T = (overrides: Partial<typeof DEFAULT_TUNING>) => ({ ...DEFAULT_TUNING, ...overrides });

// =========================
// PRO CAMERAS (Top 50)
// =========================
export const PRO_APARATY_TOP50: OverlayDeviceProfile[] = [
  // --- Your base entries (kept, tuning refined) ---
  { name: "Canon EOS R5", brand: "Canon", notes: "High-res mirrorless. Best for: pro portraits, landscapes, product, weddings.", tuning: T({ sharpening: 42, microContrast: 7, highlightRecovery: 24, shadowLift: 12, noiseReduction: 16 }) },
  { name: "Sony A7R V", brand: "Sony", notes: "Ultra detail. Best for: landscapes, architecture, beauty/editorial, studio.", tuning: T({ sharpening: 44, microContrast: 9, noiseReduction: 14, highlightRecovery: 24, shadowLift: 10 }) },
  { name: "Nikon Z9", brand: "Nikon", notes: "Flagship speed + reliability. Best for: sports, wildlife, reportage, events.", tuning: T({ sharpening: 40, microContrast: 7, noiseReduction: 18, highlightRecovery: 22, stabilizationAssist: 10 }) },
  { name: "Leica M11", brand: "Leica", notes: "Rangefinder vibe, organic look. Best for: street, fine-art portraits, editorial, travel.", tuning: T({ sharpening: 34, microContrast: 10, noiseReduction: 14, highlightRecovery: 26, saturation: 1 }) },
  { name: "Fujifilm GFX 100S", brand: "Fujifilm", notes: "Medium format softness + detail. Best for: fashion, beauty, premium product, premium portraits.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 14, highlightRecovery: 28, shadowLift: 10 }) },

  // --- Canon ---
  { name: "Canon EOS R3", brand: "Canon", notes: "Speed + low light. Best for: sports, events, reportage, concerts.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 22, shadowLift: 18, hdrCompression: 10 }) },
  { name: "Canon EOS R6 Mark II", brand: "Canon", notes: "All-rounder. Best for: weddings, lifestyle, portraits, reportage.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 20, highlightRecovery: 22, shadowLift: 16 }) },
  { name: "Canon EOS R5 C", brand: "Canon", notes: "Hybrid photo/video. Best for: cinematic realism, backstage, fashion film frames.", tuning: T({ sharpening: 38, microContrast: 7, noiseReduction: 18, hdrCompression: 10, stabilizationAssist: 10 }) },
  { name: "Canon EOS R7", brand: "Canon", notes: "APS-C reach. Best for: wildlife, sports (tele), outdoor reportage.", tuning: T({ sharpening: 42, microContrast: 6, noiseReduction: 20, highlightRecovery: 20 }) },
  { name: "Canon EOS R8", brand: "Canon", notes: "Lightweight full-frame. Best for: travel, street, portraits, everyday realism.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 18, highlightRecovery: 22 }) },
  { name: "Canon EOS R", brand: "Canon", notes: "Classic 1st-gen mirrorless look. Best for: portraits, lifestyle, calm editorial.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 18, highlightRecovery: 24 }) },
  { name: "Canon EOS 5D Mark IV", brand: "Canon", notes: "DSLR classic. Best for: weddings, reportage, portraits, commercial work.", tuning: T({ sharpening: 38, microContrast: 7, noiseReduction: 18, highlightRecovery: 22 }) },
  { name: "Canon EOS-1D X Mark III", brand: "Canon", notes: "DSLR flagship speed. Best for: sports, events, reportage, harsh conditions.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 20, hdrCompression: 8 }) },

  // --- Sony ---
  { name: "Sony A1", brand: "Sony", notes: "Flagship hybrid. Best for: sports + portraits + commercial (one body for everything).", tuning: T({ sharpening: 42, microContrast: 8, noiseReduction: 16, highlightRecovery: 22 }) },
  { name: "Sony A7 IV", brand: "Sony", notes: "Workhorse full-frame. Best for: weddings, lifestyle, content, pro portraits.", tuning: T({ sharpening: 40, microContrast: 7, noiseReduction: 18, shadowLift: 14 }) },
  { name: "Sony A7S III", brand: "Sony", notes: "Low-light king vibe. Best for: night scenes, concerts, cinematic interiors, video frames.", tuning: T({ sharpening: 34, microContrast: 5, noiseReduction: 30, shadowLift: 18, hdrCompression: 12 }) },
  { name: "Sony A9 II", brand: "Sony", notes: "Speed/AF. Best for: sports, events, dynamic portraits in motion.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 20, stabilizationAssist: 10 }) },
  { name: "Sony FX3", brand: "Sony", notes: "Compact cinema. Best for: cinematic realism, low light interiors, backstage.", tuning: T({ sharpening: 32, microContrast: 5, noiseReduction: 28, hdrCompression: 12, stabilizationAssist: 20 }) },
  { name: "Sony FX6", brand: "Sony", notes: "Pro cinema. Best for: film-set vibes, haze scenes, motivated lighting.", tuning: T({ sharpening: 30, microContrast: 5, noiseReduction: 26, hdrCompression: 12 }) },
  { name: "Sony A7R IV", brand: "Sony", notes: "High-res previous gen. Best for: landscapes, product, studio beauty.", tuning: T({ sharpening: 42, microContrast: 8, noiseReduction: 16, highlightRecovery: 24 }) },

  // --- Nikon ---
  { name: "Nikon Z8", brand: "Nikon", notes: "Z9 feel in a smaller body. Best for: sports, wildlife, weddings, commercial.", tuning: T({ sharpening: 40, microContrast: 7, noiseReduction: 18, highlightRecovery: 22 }) },
  { name: "Nikon Z7 II", brand: "Nikon", notes: "High-res stills. Best for: landscapes, architecture, studio portrait.", tuning: T({ sharpening: 40, microContrast: 8, noiseReduction: 16, highlightRecovery: 24 }) },
  { name: "Nikon Z6 II", brand: "Nikon", notes: "All-round full-frame. Best for: weddings, reportage, lifestyle, portrait.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 20, shadowLift: 16 }) },
  { name: "Nikon Z6 III", brand: "Nikon", notes: "Modern all-rounder. Best for: action + portraits + night lifestyle.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 22, shadowLift: 16, hdrCompression: 10 }) },
  { name: "Nikon D850", brand: "Nikon", notes: "DSLR high-res legend. Best for: landscapes, studio, product, portrait.", tuning: T({ sharpening: 40, microContrast: 8, noiseReduction: 16, highlightRecovery: 24 }) },
  { name: "Nikon D6", brand: "Nikon", notes: "DSLR speed tank. Best for: sports, events, reportage, harsh conditions.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 20 }) },
  { name: "Nikon Zf", brand: "Nikon", notes: "Retro body with a modern sensor. Best for: street, editorial, film-emulation vibe.", tuning: T({ sharpening: 34, microContrast: 6, noiseReduction: 20, saturation: 1, hdrCompression: 8 }) },

  // --- Fujifilm ---
  { name: "Fujifilm GFX 100 II", brand: "Fujifilm", notes: "Medium format flagship. Best for: high-end fashion, beauty, premium product.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 14, highlightRecovery: 30 }) },
  { name: "Fujifilm GFX 50S II", brand: "Fujifilm", notes: "Medium format value. Best for: premium portrait, editorial, product.", tuning: T({ sharpening: 34, microContrast: 6, noiseReduction: 16, highlightRecovery: 28 }) },
  { name: "Fujifilm X-H2", brand: "Fujifilm", notes: "APS-C high-res. Best for: product, landscape, editorial, travel.", tuning: T({ sharpening: 40, microContrast: 7, noiseReduction: 18 }) },
  { name: "Fujifilm X-H2S", brand: "Fujifilm", notes: "APS-C speed. Best for: sports, wildlife, reportage, motion.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 20 }) },
  { name: "Fujifilm X-T5", brand: "Fujifilm", notes: "Classic Fuji look. Best for: street, travel, portrait, film emulation.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 18, saturation: 1 }) },
  { name: "Fujifilm X-Pro3", brand: "Fujifilm", notes: "Rangefinder-style street/editorial. Best for: documentary, street, reportage.", tuning: T({ sharpening: 34, microContrast: 7, noiseReduction: 18, saturation: 1 }) },

  // --- Panasonic ---
  { name: "Panasonic Lumix S1R", brand: "Panasonic", notes: "High-res full-frame. Best for: landscapes, product, studio, architecture.", tuning: T({ sharpening: 40, microContrast: 7, noiseReduction: 16, highlightRecovery: 24 }) },
  { name: "Panasonic Lumix S5 II", brand: "Panasonic", notes: "Hybrid workhorse. Best for: weddings, lifestyle, content, portraits.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 20, shadowLift: 14 }) },
  { name: "Panasonic Lumix S5 IIX", brand: "Panasonic", notes: "Hybrid with pro-video vibe. Best for: cinematic scenes, backstage, indoor low light.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 22, hdrCompression: 10 }) },
  { name: "Panasonic Lumix GH6", brand: "Panasonic", notes: "MFT hybrid/speed. Best for: run&gun, motion, indoor content.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 22, stabilizationAssist: 20 }) },
  { name: "Panasonic Lumix GH5 II", brand: "Panasonic", notes: "MFT classic hybrid. Best for: documentary, events, travel, video.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 22 }) },

  // --- Leica / Hasselblad / Phase One / Sigma / Pentax / OM ---
  { name: "Leica SL2", brand: "Leica", notes: "Leica color + pro body. Best for: editorial, premium portraits, lifestyle.", tuning: T({ sharpening: 34, microContrast: 9, noiseReduction: 16, highlightRecovery: 26, saturation: 1 }) },
  { name: "Leica SL2-S", brand: "Leica", notes: "Low-light Leica vibe. Best for: night editorial, street, low-light interiors.", tuning: T({ sharpening: 32, microContrast: 8, noiseReduction: 24, shadowLift: 16, hdrCompression: 10 }) },
  { name: "Hasselblad X2D 100C", brand: "Hasselblad", notes: "Medium format 'Hassy' look. Best for: beauty, fashion, premium product, fine-art portrait.", tuning: T({ sharpening: 34, microContrast: 5, noiseReduction: 14, highlightRecovery: 30, saturation: 1 }) },
  { name: "Hasselblad 907X 50C", brand: "Hasselblad", notes: "Medium format classic vibe. Best for: editorial, fine-art, calm compositions.", tuning: T({ sharpening: 32, microContrast: 5, noiseReduction: 14, highlightRecovery: 28, saturation: 1 }) },
  { name: "Phase One XF IQ4 150MP", brand: "Phase One", notes: "Ultra high-end medium format. Best for: luxury product, advertising, ultra-photoreal studio.", tuning: T({ sharpening: 32, microContrast: 4, noiseReduction: 12, highlightRecovery: 32, shadowLift: 10 }) },
  { name: "Sigma fp L", brand: "Sigma", notes: "Minimalist full-frame. Best for: experimental editorial, street, clean product.", tuning: T({ sharpening: 34, microContrast: 7, noiseReduction: 20, hdrCompression: 8 }) },
  { name: "Pentax 645Z", brand: "Pentax", notes: "Medium format DSLR. Best for: premium portraits, landscapes, studio.", tuning: T({ sharpening: 34, microContrast: 5, noiseReduction: 14, highlightRecovery: 28 }) },
  { name: "Pentax K-1 Mark II", brand: "Pentax", notes: "Full-frame DSLR character. Best for: landscapes, astro vibe, outdoor portraits.", tuning: T({ sharpening: 36, microContrast: 7, noiseReduction: 18, highlightRecovery: 24 }) },
  { name: "OM System OM-1", brand: "OM System", notes: "MFT speed + stabilization. Best for: wildlife, sports, outdoor, travel.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 22, stabilizationAssist: 25 }) },
  { name: "OM System OM-1 Mark II", brand: "OM System", notes: "MFT pro upgrade. Best for: wildlife, sports, dynamic outdoor scenes.", tuning: T({ sharpening: 38, microContrast: 6, noiseReduction: 22, stabilizationAssist: 30 }) },

  // --- Cinema bodies (AI loves these as a 'look' cue) ---
  { name: "Blackmagic Pocket Cinema Camera 6K Pro", brand: "Blackmagic Design", notes: "Cinema texture + highlight roll-off. Best for: cinematic realism, backstage, low-key interiors.", tuning: T({ sharpening: 28, microContrast: 5, noiseReduction: 20, highlightRecovery: 28, hdrCompression: 10 }) },
  { name: "RED KOMODO 6K", brand: "RED", notes: "Cinema clarity + punch. Best for: dynamic scenes, commercials, film look with control.", tuning: T({ sharpening: 30, microContrast: 6, noiseReduction: 18, highlightRecovery: 26, hdrCompression: 10 }) }
];

// =========================
// PRO PHOTO PHONES (Top 15)
// =========================
export const TELEFONY_FOTO_PRO_TOP15: OverlayDeviceProfile[] = [
  { name: "iPhone 15 Pro Max", brand: "Apple", notes: "Computational photography. Best for: lifestyle, street, clean social portraits, fast shoots.", tuning: T({ deFisheye: 10, distortionCorrection: 55, sharpening: 50, microContrast: 5, noiseReduction: 32, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 4, skinToneProtect: 12, stabilizationAssist: 25 }) },
  { name: "iPhone 15 Pro", brand: "Apple", notes: "Computational photography (compact). Best for: street, travel, portraits, interiors.", tuning: T({ deFisheye: 10, distortionCorrection: 55, sharpening: 50, microContrast: 5, noiseReduction: 30, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 12, stabilizationAssist: 22 }) },
  { name: "iPhone 14 Pro Max", brand: "Apple", notes: "Stable 'Apple look'. Best for: social portraits, night city, content creation.", tuning: T({ deFisheye: 12, distortionCorrection: 55, sharpening: 48, microContrast: 5, noiseReduction: 32, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 12 }) },
  { name: "iPhone 14 Pro", brand: "Apple", notes: "Apple look in a smaller body. Best for: street, travel, portraits on the move.", tuning: T({ deFisheye: 12, distortionCorrection: 55, sharpening: 48, microContrast: 5, noiseReduction: 30, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 12 }) },
  { name: "iPhone 13 Pro Max", brand: "Apple", notes: "Social classic. Best for: lifestyle, interiors, available-light portraits.", tuning: T({ deFisheye: 12, distortionCorrection: 52, sharpening: 46, microContrast: 4, noiseReduction: 32, hdrCompression: 15, highlightRecovery: 26, shadowLift: 18, saturation: 3, skinToneProtect: 10 }) },
  { name: "iPhone 13 Pro", brand: "Apple", notes: "Versatile. Best for: street, travel, quick reportage.", tuning: T({ deFisheye: 12, distortionCorrection: 52, sharpening: 46, microContrast: 4, noiseReduction: 30, hdrCompression: 15, highlightRecovery: 26, shadowLift: 18, saturation: 3, skinToneProtect: 10 }) },

  { name: "Samsung S24 Ultra", brand: "Samsung", notes: "Versatile zoom. Best for: outdoors, tele-portraits, travel, distance details.", tuning: T({ deFisheye: 12, distortionCorrection: 58, sharpening: 52, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 4, skinToneProtect: 10 }) },
  { name: "Samsung S23 Ultra", brand: "Samsung", notes: "Zoom + detail. Best for: tele-portraits, architecture, distance street.", tuning: T({ deFisheye: 12, distortionCorrection: 58, sharpening: 50, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 4, skinToneProtect: 10 }) },
  { name: "Samsung S22 Ultra", brand: "Samsung", notes: "Zoom legacy. Best for: detail, travel, sunny portraits (HDR).", tuning: T({ deFisheye: 12, distortionCorrection: 56, sharpening: 48, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 4, skinToneProtect: 10 }) },
  { name: "Samsung Galaxy Z Fold 5", brand: "Samsung", notes: "Mobile editorial vibe. Best for: content, backstage, street, quick story frames.", tuning: T({ deFisheye: 14, distortionCorrection: 55, sharpening: 48, microContrast: 5, noiseReduction: 32, hdrCompression: 15, highlightRecovery: 26, shadowLift: 18, saturation: 3, skinToneProtect: 10 }) },

  { name: "Google Pixel 8 Pro", brand: "Google", notes: "AI-driven processing. Best for: natural portraits, night street, honest skin tones.", tuning: T({ deFisheye: 10, distortionCorrection: 54, sharpening: 46, microContrast: 5, noiseReduction: 36, hdrCompression: 18, highlightRecovery: 30, shadowLift: 20, saturation: 2, skinToneProtect: 14 }) },
  { name: "Google Pixel 7 Pro", brand: "Google", notes: "Classic Pixel look. Best for: lifestyle, street, portraits with natural skin.", tuning: T({ deFisheye: 10, distortionCorrection: 52, sharpening: 44, microContrast: 5, noiseReduction: 36, hdrCompression: 18, highlightRecovery: 30, shadowLift: 20, saturation: 2, skinToneProtect: 14 }) },

  { name: "Xiaomi 14 Ultra", brand: "Xiaomi", notes: "Pro phone (Leica vibes). Best for: portraits, travel, night city with detail.", tuning: T({ deFisheye: 12, distortionCorrection: 56, sharpening: 50, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 10 }) },
  { name: "OPPO Find X7 Ultra", brand: "OPPO", notes: "Tele + portrait oriented. Best for: compressed portraits, details, night street.", tuning: T({ deFisheye: 12, distortionCorrection: 56, sharpening: 50, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 10 }) },
  { name: "vivo X100 Pro", brand: "vivo", notes: "Portrait-centric rendering. Best for: natural portraits, skin tones, night lifestyle.", tuning: T({ deFisheye: 12, distortionCorrection: 55, sharpening: 48, microContrast: 6, noiseReduction: 34, hdrCompression: 16, highlightRecovery: 28, shadowLift: 18, saturation: 3, skinToneProtect: 12 }) }
];

// =========================
// ACTION / SPORTS CAMERAS (Top 20)
// =========================
export const KAMERY_SPORTOWE_TOP20: OverlayDeviceProfile[] = [
  { name: "GoPro Hero 12", brand: "GoPro", notes: "Action stabilization. Best for: sports, POV, outdoors, fast motion.", tuning: T({ deFisheye: 80, distortionCorrection: 92, sharpening: 34, microContrast: 4, noiseReduction: 24, highlightRecovery: 18, shadowLift: 10, hdrCompression: 10, saturation: 4, stabilizationAssist: 75, horizonLock: true }) },
  { name: "DJI Osmo Action 4", brand: "DJI", notes: "Low-light action. Best for: night action, street POV, indoor action.", tuning: T({ deFisheye: 78, distortionCorrection: 90, sharpening: 32, microContrast: 4, noiseReduction: 28, highlightRecovery: 18, shadowLift: 12, hdrCompression: 10, saturation: 3, stabilizationAssist: 70, horizonLock: true }) },

  { name: "GoPro Hero 11", brand: "GoPro", notes: "Great all-round action. Best for: sports, travel, POV.", tuning: T({ deFisheye: 80, distortionCorrection: 92, sharpening: 34, noiseReduction: 24, stabilizationAssist: 70, horizonLock: true }) },
  { name: "GoPro Hero 10", brand: "GoPro", notes: "Action classic. Best for: outdoors, sports, vlog b-roll.", tuning: T({ deFisheye: 78, distortionCorrection: 90, sharpening: 34, noiseReduction: 24, stabilizationAssist: 65, horizonLock: true }) },
  { name: "GoPro Hero 9", brand: "GoPro", notes: "Still strong. Best for: sports, travel, POV.", tuning: T({ deFisheye: 78, distortionCorrection: 90, sharpening: 34, noiseReduction: 24, stabilizationAssist: 60, horizonLock: true }) },
  { name: "GoPro Hero 8", brand: "GoPro", notes: "Legacy action look. Best for: classic action vibe.", tuning: T({ deFisheye: 75, distortionCorrection: 88, sharpening: 34, noiseReduction: 24, stabilizationAssist: 55, horizonLock: true }) },

  { name: "DJI Osmo Action 3", brand: "DJI", notes: "Solid action. Best for: sports, travel, POV.", tuning: T({ deFisheye: 75, distortionCorrection: 88, sharpening: 32, noiseReduction: 26, stabilizationAssist: 60, horizonLock: true }) },
  { name: "DJI Pocket 3", brand: "DJI", notes: "Gimbal compact (super stable). Best for: walking shots, vlogs, indoor lifestyle.", tuning: T({ deFisheye: 15, distortionCorrection: 55, sharpening: 36, microContrast: 5, noiseReduction: 26, hdrCompression: 12, stabilizationAssist: 60 }) },
  { name: "DJI Pocket 2", brand: "DJI", notes: "Gimbal legacy. Best for: vlogs, travel, stable b-roll.", tuning: T({ deFisheye: 15, distortionCorrection: 55, sharpening: 36, noiseReduction: 26, stabilizationAssist: 55 }) },

  { name: "Insta360 Ace Pro", brand: "Insta360", notes: "Action + low light. Best for: night street, sports, POV.", tuning: T({ deFisheye: 75, distortionCorrection: 90, sharpening: 32, noiseReduction: 30, hdrCompression: 12, stabilizationAssist: 70, horizonLock: true }) },
  { name: "Insta360 Ace", brand: "Insta360", notes: "Action all-round. Best for: travel, sports, vlog b-roll.", tuning: T({ deFisheye: 75, distortionCorrection: 90, sharpening: 32, noiseReduction: 28, stabilizationAssist: 65, horizonLock: true }) },
  { name: "Insta360 X4", brand: "Insta360", notes: "360 camera. Best for: reframing, POV, action when you can't nail framing live.", tuning: T({ deFisheye: 90, distortionCorrection: 95, sharpening: 30, noiseReduction: 26, stabilizationAssist: 80, horizonLock: true }) },
  { name: "Insta360 X3", brand: "Insta360", notes: "360 legacy. Best for: travel, sports, reframing.", tuning: T({ deFisheye: 90, distortionCorrection: 95, sharpening: 30, noiseReduction: 26, stabilizationAssist: 75, horizonLock: true }) },
  { name: "Insta360 ONE RS", brand: "Insta360", notes: "Modular action. Best for: sports, travel, POV.", tuning: T({ deFisheye: 80, distortionCorrection: 92, sharpening: 32, noiseReduction: 26, stabilizationAssist: 65, horizonLock: true }) },

  { name: "Sony RX0 II", brand: "Sony", notes: "Pro micro-camera. Best for: backstage, action with 'Sony' quality, tiny setups.", tuning: T({ deFisheye: 35, distortionCorrection: 70, sharpening: 36, microContrast: 6, noiseReduction: 22, stabilizationAssist: 35 }) },
  { name: "Garmin VIRB Ultra 30", brand: "Garmin", notes: "Action legacy. Best for: outdoor sports look.", tuning: T({ deFisheye: 80, distortionCorrection: 90, sharpening: 34, noiseReduction: 24, stabilizationAssist: 55, horizonLock: true }) },
  { name: "AKASO Brave 8", brand: "AKASO", notes: "Budget action. Best for: POV sports where you don't want to risk expensive gear.", tuning: T({ deFisheye: 80, distortionCorrection: 90, sharpening: 36, noiseReduction: 28, stabilizationAssist: 55, horizonLock: true }) },
  { name: "GoPro MAX", brand: "GoPro", notes: "GoPro 360. Best for: reframing, sports POV, dynamic action.", tuning: T({ deFisheye: 90, distortionCorrection: 95, sharpening: 30, noiseReduction: 26, stabilizationAssist: 75, horizonLock: true }) },
  { name: "Insta360 ONE R", brand: "Insta360", notes: "360/modular legacy. Best for: travel, sports, reframing.", tuning: T({ deFisheye: 88, distortionCorrection: 95, sharpening: 30, noiseReduction: 26, stabilizationAssist: 70, horizonLock: true }) }
];

// =========================
// PRO DRONES (Top 15)
// =========================
export const DRONY_FOTO_PRO_TOP15: OverlayDeviceProfile[] = [
  { name: "DJI Mavic 3 Pro", brand: "DJI", notes: "Pro aerial (multi-cam). Best for: landscapes, architecture, travel, establishing shots.", tuning: T({ distortionCorrection: 45, sharpening: 38, microContrast: 7, noiseReduction: 18, highlightRecovery: 26, shadowLift: 12, hdrCompression: 10, stabilizationAssist: 25 }) },
  { name: "DJI Mavic 3 Classic", brand: "DJI", notes: "Pro aerial value. Best for: travel, landscapes, cityscapes.", tuning: T({ distortionCorrection: 45, sharpening: 38, microContrast: 7, noiseReduction: 18, highlightRecovery: 26, hdrCompression: 10 }) },
  { name: "DJI Air 3", brand: "DJI", notes: "Aerial all-round. Best for: city travel, dynamic shots, b-roll.", tuning: T({ distortionCorrection: 50, sharpening: 40, microContrast: 6, noiseReduction: 20, highlightRecovery: 24, hdrCompression: 10 }) },
  { name: "DJI Mini 4 Pro", brand: "DJI", notes: "Ultra portable. Best for: travel, quick aerials, social content.", tuning: T({ distortionCorrection: 55, sharpening: 40, microContrast: 6, noiseReduction: 22, highlightRecovery: 22, hdrCompression: 12 }) },
  { name: "DJI Mini 3 Pro", brand: "DJI", notes: "Portable aerial. Best for: travel, social content, light b-roll.", tuning: T({ distortionCorrection: 55, sharpening: 40, microContrast: 6, noiseReduction: 22, hdrCompression: 12 }) },
  { name: "DJI Inspire 3", brand: "DJI", notes: "Cinema drone. Best for: film-style aerials, big productions, IMAX-ish establishing shots.", tuning: T({ distortionCorrection: 40, sharpening: 32, microContrast: 6, noiseReduction: 18, highlightRecovery: 28, hdrCompression: 12 }) },
  { name: "DJI Avata 2", brand: "DJI", notes: "FPV cinematic. Best for: fast fly-throughs, sports POV from the air.", tuning: T({ deFisheye: 65, distortionCorrection: 85, sharpening: 32, noiseReduction: 24, hdrCompression: 10, stabilizationAssist: 60, horizonLock: true }) },
  { name: "DJI FPV", brand: "DJI", notes: "FPV classic. Best for: fast fly-throughs, adrenaline motion.", tuning: T({ deFisheye: 70, distortionCorrection: 85, sharpening: 32, noiseReduction: 24, stabilizationAssist: 55, horizonLock: true }) },

  { name: "Autel EVO II Pro", brand: "Autel", notes: "Pro aerial alternative. Best for: landscapes, architecture, travel.", tuning: T({ distortionCorrection: 45, sharpening: 38, microContrast: 7, noiseReduction: 18, highlightRecovery: 26, hdrCompression: 10 }) },
  { name: "Autel EVO Lite+", brand: "Autel", notes: "Compact aerial. Best for: travel, cityscapes, b-roll.", tuning: T({ distortionCorrection: 50, sharpening: 40, microContrast: 6, noiseReduction: 20, hdrCompression: 10 }) },

  { name: "Skydio 2+", brand: "Skydio", notes: "Autonomous tracking. Best for: outdoor sports, subject tracking, dynamic scenes.", tuning: T({ distortionCorrection: 50, sharpening: 38, microContrast: 6, noiseReduction: 20, stabilizationAssist: 25 }) },
  { name: "Parrot Anafi AI", brand: "Parrot", notes: "Industrial/editorial aerial. Best for: architecture, inspections, cityscapes.", tuning: T({ distortionCorrection: 50, sharpening: 38, microContrast: 6, noiseReduction: 20, highlightRecovery: 24 }) },

  { name: "DJI Phantom 4 Pro V2.0", brand: "DJI", notes: "Classic aerial workhorse. Best for: landscapes, architecture, mapping vibe.", tuning: T({ distortionCorrection: 50, sharpening: 40, microContrast: 7, noiseReduction: 18, highlightRecovery: 24 }) },
  { name: "DJI Matrice 300 RTK", brand: "DJI", notes: "Industrial platform. Best for: technical documentation, inspection-style visuals.", tuning: T({ distortionCorrection: 45, sharpening: 36, microContrast: 6, noiseReduction: 18, hdrCompression: 8 }) },
  { name: "DJI Matrice 30T", brand: "DJI", notes: "Industrial + sensors. Best for: mission/technical documentary style.", tuning: T({ distortionCorrection: 45, sharpening: 36, microContrast: 6, noiseReduction: 18, hdrCompression: 8 }) }
];

// =========================
// PREMIUM COMPACTS (Top 10)
// =========================
export const KOMPAKTY_PREMIUM_TOP10: OverlayDeviceProfile[] = [
  { name: "Sony RX100 VII", brand: "Sony", notes: "Pocket zoom pro. Best for: travel, street, lightweight events.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 22, highlightRecovery: 22, shadowLift: 14 }) },
  { name: "Sony RX1R II", brand: "Sony", notes: "Full-frame compact. Best for: portraits, street, editorial with minimal setup.", tuning: T({ sharpening: 38, microContrast: 7, noiseReduction: 18, highlightRecovery: 24 }) },
  { name: "Ricoh GR III", brand: "Ricoh", notes: "Street legend (28mm eq). Best for: street photography, documentary, travel.", tuning: T({ sharpening: 34, microContrast: 7, noiseReduction: 20, saturation: 1 }) },
  { name: "Ricoh GR IIIx", brand: "Ricoh", notes: "Street legend (40mm eq). Best for: street portraits, documentary, travel.", tuning: T({ sharpening: 34, microContrast: 7, noiseReduction: 20, saturation: 1 }) },
  { name: "Fujifilm X100V", brand: "Fujifilm", notes: "Film-emulation compact. Best for: editorial, street, lifestyle with a 'Fuji look'.", tuning: T({ sharpening: 32, microContrast: 6, noiseReduction: 18, saturation: 1, hdrCompression: 8 }) },
  { name: "Fujifilm X100VI", brand: "Fujifilm", notes: "Modern X100 vibe. Best for: street, travel, editorial, film emulation.", tuning: T({ sharpening: 34, microContrast: 6, noiseReduction: 18, saturation: 1, stabilizationAssist: 15 }) },
  { name: "Canon PowerShot G7 X Mark III", brand: "Canon", notes: "Creator compact. Best for: lifestyle, vlog b-roll, travel.", tuning: T({ sharpening: 40, microContrast: 6, noiseReduction: 24, hdrCompression: 12, shadowLift: 14 }) },
  { name: "Panasonic Lumix LX100 II", brand: "Panasonic", notes: "MFT compact character. Best for: street, travel, editorial in warm interiors.", tuning: T({ sharpening: 36, microContrast: 6, noiseReduction: 22, highlightRecovery: 22 }) },
  { name: "Leica Q3", brand: "Leica", notes: "Premium compact (Leica look). Best for: fine-art portraits, editorial, premium street.", tuning: T({ sharpening: 34, microContrast: 9, noiseReduction: 16, highlightRecovery: 28, saturation: 1 }) },
  { name: "OM System Tough TG-7", brand: "OM System", notes: "Rugged compact. Best for: outdoors, water, sports, 'no-worries' shots.", tuning: T({ deFisheye: 20, distortionCorrection: 65, sharpening: 38, microContrast: 5, noiseReduction: 24, stabilizationAssist: 25 }) }
];
