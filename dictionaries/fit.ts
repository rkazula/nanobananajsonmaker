
import { ClothingPlacement } from "./wardrobe_common";

export const FIT: {
  high_reliability: string[];
  good_reliability: string[];
} = {
  high_reliability: [
    // core silhouette fits
    "oversized fit",
    "extra oversized fit",
    "relaxed fit",
    "baggy fit",
    "wide fit",
    "loose fit",
    "skinny fit",
    "super skinny fit",

    // length / proportions
    "cropped length",
    "ultra cropped length",
    "waist length",
    "hip length",
    "longline",
    "extended length",
    "tunic length",
    "mini length",
    "midi length",
    "maxi length",
    "ankle length",
    "floor length",

    // outerwear / obvious garment structures
    "puffer style",
    "oversized puffer style",
    "quilted puffer style",
    "trench coat",
    "long trench coat",
    "double-breasted trench coat",
    "hooded",
    "detachable hood",
    "cape style",
    "poncho style",

    // neck / collar (very “renderable”)
    "turtleneck",
    "chunky turtleneck",
    "mock neck",
    "high neck",
    "stand collar",
    "shawl collar",
    "collared",

    // sleeves / shoulders (clear geometry)
    "puff sleeves",
    "balloon sleeves",
    "bishop sleeves",
    "raglan sleeves",
    "dolman sleeves",
    "drop shoulder",
    "structured shoulders",
    "shoulder pads",
    "off-shoulder",
    "one-shoulder",
    "sleeveless",
    "cap sleeves",

    // waist shaping (models usually get these right)
    "cinched waist",
    "belted waist",
    "wrap style",
    "peplum waist",
    "high waist",
    "low rise",
    "mid rise",

    // bottoms shaping
    "high-waisted fit",
    "low-rise fit",
    "tapered leg",
    "straight leg",
    "wide leg",
    "flared leg",
    "bootcut leg",

    // closures/details that lock the silhouette
    "zip-up style",
    "button-up style",
    "double-breasted style"
  ],

  good_reliability: [
    // common fits
    "slim fit",
    "regular fit",
    "classic fit",
    "tailored fit",
    "boxy fit",
    "fitted silhouette",

    // neckline variants
    "v-neck",
    "deep v-neck",
    "crew neck",
    "scoop neck",
    "square neck",
    "sweetheart neckline",
    "boat neck",
    "henley neckline",
    "polo collar",
    "collarless",
    "high collar",

    // sleeve / armhole variants
    "short sleeves",
    "long sleeves",
    "three-quarter sleeves",
    "roll-up sleeves",
    "raglan sleeves",
    "batwing sleeves",
    "sleeveless",
    "tank style",
    "racerback",

    // hems / cut
    "asymmetrical hem",
    "high-low hem",
    "curved hem",
    "split hem",
    "side slits",
    "high slit",
    "front slit",

    // structure / styling cues
    "layered look",
    "overshirt style",
    "shacket style",
    "utility style",
    "cargo style",
    "workwear style",
    "athleisure fit",

    // dress-specific shapes (often good, but not always perfect)
    "a-line silhouette",
    "fit-and-flare silhouette",
    "bodycon fit",
    "sheath silhouette",
    "empire waist",
    "mermaid silhouette",

    // outerwear extras
    "padded shoulders",
    "storm flap",
    "epaulettes",
    "drawstring waist",

    // knit/comfort cues
    "ribbed knit fit",
    "chunky knit fit"
  ]
};

// --- Logic Layer: Mapping fits to placements for better UX ---

const UNIVERSAL_FITS = [
    "oversized fit", "extra oversized fit", "relaxed fit", "baggy fit", "wide fit", 
    "loose fit", "skinny fit", "super skinny fit", "slim fit", "regular fit", 
    "classic fit", "tailored fit", "fitted silhouette", "utility style", "workwear style", "athleisure fit"
];

const UPPER_BODY_FITS = [
    ...UNIVERSAL_FITS,
    "cropped length", "ultra cropped length", "waist length", "hip length", "longline", "tunic length",
    "puffer style", "oversized puffer style", "quilted puffer style", "trench coat", "long trench coat", "double-breasted trench coat",
    "hooded", "detachable hood", "cape style", "poncho style", "shacket style", "overshirt style", "layered look",
    "turtleneck", "chunky turtleneck", "mock neck", "high neck", "stand collar", "shawl collar", "collared",
    "v-neck", "deep v-neck", "crew neck", "scoop neck", "square neck", "sweetheart neckline", "boat neck", "henley neckline", "polo collar", "collarless",
    "puff sleeves", "balloon sleeves", "bishop sleeves", "raglan sleeves", "dolman sleeves", "drop shoulder", "structured shoulders", 
    "shoulder pads", "off-shoulder", "one-shoulder", "sleeveless", "cap sleeves", "short sleeves", "long sleeves", "three-quarter sleeves", "roll-up sleeves", "batwing sleeves", "tank style", "racerback",
    "cinched waist", "belted waist", "wrap style", "peplum waist", "zip-up style", "button-up style", "double-breasted style", "padded shoulders", "epaulettes",
    "ribbed knit fit", "chunky knit fit"
];

const LOWER_BODY_FITS = [
    ...UNIVERSAL_FITS,
    "high-waisted fit", "low-rise fit", "high waist", "low rise", "mid rise",
    "tapered leg", "straight leg", "wide leg", "flared leg", "bootcut leg",
    "ankle length", "floor length", "cropped length",
    "cargo style", "utility style", "drawstring waist", "belted waist",
    "split hem", "side slits"
];

const FULL_BODY_FITS = [
    ...UNIVERSAL_FITS,
    "longline", "extended length", "tunic length", "mini length", "midi length", "maxi length", "ankle length", "floor length",
    "a-line silhouette", "fit-and-flare silhouette", "bodycon fit", "sheath silhouette", "empire waist", "mermaid silhouette",
    "wrap style", "cinched waist", "belted waist", "high slit", "front slit", "side slits", "asymmetrical hem", "high-low hem",
    "off-shoulder", "one-shoulder", "sleeveless", "backless", "plunge neck"
];

export const FITS_BY_PLACEMENT: Partial<Record<ClothingPlacement, string[]>> = {
    "Upper Body": Array.from(new Set(UPPER_BODY_FITS)).sort(),
    "Lower Body": Array.from(new Set(LOWER_BODY_FITS)).sort(),
    "Full Body": Array.from(new Set(FULL_BODY_FITS)).sort(),
    // Fallback lists for others
    "Head": ["oversized fit", "snug fit", "slouchy fit"],
    "Feet": ["chunky silhouette", "slim silhouette", "platform style", "ankle height", "knee height", "thigh height"],
    "Hands": ["fingerless", "elbow length", "wrist length"],
    "Intimate": ["high-waisted fit", "low-rise fit", "thong cut", "cheeky cut", "full coverage", "seamless"]
};

export const ALL_FITS = [...FIT.high_reliability, ...FIT.good_reliability].sort();
