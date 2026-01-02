
import { z } from 'zod';
import { 
    ASPECT_RATIOS, QUALITY_MODES, FILM_STOCKS, LIGHTING_TYPES, LIGHTING_DIRECTIONS, LIGHTING_EFFECTS,
    CLOTHING_PLACEMENTS, CLOTHING_COVERAGE, TIMES_OF_DAY, CLUTTER_LEVELS,
    CAMERA_LENS, GRAIN_AMOUNTS, ISO_VALUES, IMPERFECTION_PRESETS,
    SUBJECT_COUNTS, SUBJECT_GROUPING, SUBJECT_ROLES, IDENTITY_LOCKS, AGE_RANGE_IDS,
    ETHNICITIES, SKIN_QUALITIES, BODY_TYPES, SKIN_TONES, HAIR_STYLES, HAIR_COLORS, EYE_COLORS, EYE_SHAPES, TATTOO_SIZES, TATTOO_PLACEMENTS,
    IMAGE_SIZES, NAIL_SHAPES, NAIL_LENGTHS, NAIL_FINISHES, NAIL_DESIGNS, NAIL_COLORS
} from './dictionaries';

// --- Helper Schemas ---

const ToggleSchema = z.boolean().default(false);

// --- Sub-Schemas based on provided JSON ---

const ImageConfigSchema = z.object({
  aspect_ratio: z.enum(ASPECT_RATIOS).default("4:5"),
  image_size: z.enum(IMAGE_SIZES).default("4096"),
});

const ApiSchema = z.object({
  provider: z.string().default("Google Gemini API (Nano Banana)",),
  model: z.string().default("gemini-2.5-flash-image"),
  generation_config: z.object({
    response_modalities: z.array(z.string()).default(["Image"]),
    image_config: ImageConfigSchema,
  }),
});

// Explicit default objects to satisfy strict Zod .default() typing
const OVERLAY_TUNING_DEFAULTS = {
  deFisheye: 0,
  distortionCorrection: 35,
  sharpening: 40,
  microContrast: 6,
  noiseReduction: 18,
  highlightRecovery: 22,
  shadowLift: 14,
  hdrCompression: 8,
  saturation: 2,
  whiteBalanceBiasK: 0,
  tint: 0,
  skinToneProtect: 0,
  stabilizationAssist: 0,
  horizonLock: false,
};

// Overlay Tuning Schema mirroring the TS type
const OverlayTuningSchema = z.object({
  deFisheye: z.number().default(0),
  distortionCorrection: z.number().default(35),
  sharpening: z.number().default(40),
  microContrast: z.number().default(6),
  noiseReduction: z.number().default(18),
  highlightRecovery: z.number().default(22),
  shadowLift: z.number().default(14),
  hdrCompression: z.number().default(8),
  saturation: z.number().default(2),
  whiteBalanceBiasK: z.number().default(0),
  tint: z.number().default(0),
  skinToneProtect: z.number().default(0),
  stabilizationAssist: z.number().default(0),
  horizonLock: z.boolean().default(false),
});

const CAMERA_GEAR_DEFAULTS = {
    device_name: "Custom / Default",
    notes: "Standard profile",
    tuning: OVERLAY_TUNING_DEFAULTS
};

const CameraGearSchema = z.object({
    device_name: z.string().default("Custom / Default"),
    notes: z.string().default("Standard profile"),
    tuning: OverlayTuningSchema.default(OVERLAY_TUNING_DEFAULTS)
});

const MetaSchema = z.object({
  project_name: z.string().default("auto_gen_project"),
  version: z.string().default("2.0_UltraRealism"),
  aspect_ratio: z.enum(ASPECT_RATIOS).default("4:5"),
  quality_mode: z.string().default("ultra_photorealistic"),
  seed: z.number().int().default(-1),
  steps: z.number().min(1).max(100).default(40),
  guidance_scale: z.number().min(0).max(20).default(7.5),
  film_grain: z.object({
    enabled: ToggleSchema,
    amount: z.string().default("subtle"),
    iso_emulation: z.string().default("ISO 400"),
    imperfection_preset: z.string().default("film_clean"),
    imperfection_details: z.array(z.string()).default([]),
  }),
  camera: z.object({
    camera_model: z.string().default("Leica M6"),
    capture_medium: z.string().default("35mm analog"),
  }),
  film_stock_emulation: z.object({
    film_stock: z.string().default("Kodak Portra 400"),
    tone: z.array(z.string()).default(["warm"]), // Changed to array for MultiSelect
  }),
  camera_gear: CameraGearSchema.default(CAMERA_GEAR_DEFAULTS),
  postprocessing: z.object({
    contrast: z.string().default("soft"),
    color_grading: z.string().default("Teal shadows / Orange highlights split"),
    pipeline: z.array(z.string()).default([]),
  }),
});

const SetDressingSchema = z.object({
    scene_type: z.enum(["Interior", "Outdoor"]).default("Interior"),
    
    // Interior Fields
    interior_style: z.string().default("minimalist"),
    materials: z.array(z.string()).default([]),
    props: z.array(z.string()).default([]),
    clutter_level: z.enum(CLUTTER_LEVELS).default("very_low"),
    layout: z.array(z.string()).default([]),
    micro_details: z.array(z.string()).default([]),
    
    // Outdoor Fields
    weather: z.string().default("Clear Sunny"),
    terrain: z.string().default("Urban Street"),
    outdoor_elements: z.array(z.string()).default([]),

    assembled_prompt: z.string().default(""), // Holds the glued string
});

const SceneSchema = z.object({
  location: z.string().default("Indoors, modern high-rise apartment"),
  time: z.enum(TIMES_OF_DAY).default("✨ Golden Hour"),
  atmosphere: z.array(z.string()).default(["serene", "warm"]),
  environment: z.array(z.string()).default([]),
  set_dressing: SetDressingSchema,
});

const LightingSchema = z.object({
  type: z.enum(LIGHTING_TYPES).default("natural_sunlight"),
  direction: z.enum(LIGHTING_DIRECTIONS).default("back_lit"),
  effect: z.enum(LIGHTING_EFFECTS).default("rim_lighting"),
  quality_notes: z.array(z.string()).default([]),
});

const AppearanceSchema = z.object({
    gender: z.enum(["Male", "Female", "Non-binary"]).default("Female"),
    ethnicity: z.string().default("Caucasian"),
    skin_quality: z.string().default("hyper-realistic"),
    body_type: z.string().default("average"),
    skin_tone: z.string().default("Fair Ivory"),
    hair: z.string().default("Layered Cut -> Medium -> Brown"),
    eyes: z.object({
        color: z.string().default("Blue"),
        shape: z.string().default("Almond")
    }),
    distinct_features: z.array(z.string()).default([]),
    nails: z.object({
        shape: z.string().default("Natural"),
        length: z.string().default("Natural"),
        finish: z.string().default("Glossy"),
        design: z.string().default("Solid Color"),
        color: z.string().default("Nude Beige")
    }).optional(),
    tattoos: z.object({
        description: z.string().optional(),
        placement: z.string().optional(),
        size: z.string().optional()
    }).optional()
});

const SubjectSchema = z.object({
  id: z.string().default("main_subject"),
  type: z.string().default("person"),
  
  // New Fields
  count: z.string().default("1"),
  grouping: z.string().default("solo"),
  role: z.string().default("primary"),
  importance: z.number().min(1).max(10).default(10),
  identity_lock: z.string().default("none"),
  consistency_tags: z.array(z.string()).default([]),
  
  // Demographics
  age_range: z.enum(AGE_RANGE_IDS).default("YOUNG_ADULT"),
  exact_age: z.number().optional(),

  // Appearance
  appearance: AppearanceSchema,

  // Combined logic: Biometrics and skin texture are now part of the description generation
  description: z.string().describe("Detailed notes about the subject (optional)"),
  pose: z.string().default("Standing naturally"),
  
  clothing: z.array(z.object({
    category: z.enum(["Menswear", "Womenswear", "Unisex"]).default("Unisex"),
    item: z.string(),
    fit: z.string().optional().default(""), // Silhouette/Fit
    pattern: z.string().optional().default(""), // NEW FIELD: Pattern
    color: z.string(),
    fabric: z.string(),
    layer: z.string().optional(),
    placement: z.enum(CLOTHING_PLACEMENTS).optional().default("Upper Body"),
    coverage: z.enum(CLOTHING_COVERAGE).optional().default("Full Coverage"),
  })).default([]),
  accessories: z.array(z.object({
      item: z.string(),
      material: z.string().optional(),
      color: z.string().optional(),
  })).default([])
});

const CameraPerspectiveSchema = z.object({
  pov: z.string().default("eye_level"),
  framing: z.string().default("medium_shot"), // Using string to allow flexibility but defaulting to existing
  focus_point: z.string().default("eyes"),
  depth_of_field: z.string().default("shallow"),
  lens: z.enum(CAMERA_LENS).default("50mm"),
});

const AdvancedSchema = z.object({
  negative_prompt: z.array(z.string()).default(["nudity", "bad anatomy", "text", "watermark"]),
  magic_prompt_enhancer: ToggleSchema.default(true),
  safety_constraints: z.object({
      no_minors: ToggleSchema.default(true),
      no_nudity: ToggleSchema.default(true),
      no_explicit_sexual_content: ToggleSchema.default(true),
      no_text_logos: ToggleSchema.default(true)
  })
});

// --- Main Schema ---

export const NanoBananaSchema = z.object({
  user_intent: z.string().min(10, "Intent must be descriptive").describe("The main creative prompt"),
  api: ApiSchema,
  meta: MetaSchema,
  scene: SceneSchema,
  lighting: LightingSchema,
  camera_perspective: CameraPerspectiveSchema,
  subject: z.array(SubjectSchema).default([]),
  advanced: AdvancedSchema,
});

export type NanoBananaType = z.infer<typeof NanoBananaSchema>;

export const DEFAULT_VALUES: NanoBananaType = {
  user_intent: "",
  api: {
    provider: "Google Gemini API (Nano Banana)",
    model: "gemini-2.5-flash-image",
    generation_config: {
      response_modalities: ["Image"],
      image_config: { aspect_ratio: "4:5", image_size: "4096" }
    }
  },
  meta: {
    project_name: "auto_gen_project",
    version: "2.0_UltraRealism",
    aspect_ratio: "4:5",
    quality_mode: "ultra_photorealistic",
    seed: 2005246620,
    steps: 40,
    guidance_scale: 7.5,
    film_grain: { 
        enabled: true, 
        amount: "subtle", 
        iso_emulation: "ISO 400",
        imperfection_preset: "film_clean",
        imperfection_details: []
    },
    camera: { camera_model: "Leica M6", capture_medium: "35mm analog" },
    film_stock_emulation: { film_stock: "Kodak Portra 400", tone: ["warm"] },
    camera_gear: CAMERA_GEAR_DEFAULTS,
    postprocessing: {
      contrast: "soft",
      color_grading: "Teal/Orange",
      pipeline: ["Film grain", "Bloom"]
    }
  },
  scene: {
    location: "Indoors, modern high-rise",
    time: "✨ Golden Hour",
    atmosphere: ["serene", "warm"],
    environment: ["Large window", "Cityscape"],
    set_dressing: { 
        scene_type: "Interior",
        interior_style: "minimalist", 
        materials: [],
        props: [],
        clutter_level: "very_low",
        layout: [],
        micro_details: [],
        weather: "Clear Sunny",
        terrain: "Urban Street",
        outdoor_elements: [],
        assembled_prompt: "minimalist, very_low clutter" 
    }
  },
  lighting: {
    type: "natural_sunlight",
    direction: "back_lit",
    effect: "rim_lighting",
    quality_notes: ["Protect skin highlights"]
  },
  camera_perspective: {
    pov: "eye_level",
    framing: "medium_shot",
    focus_point: "eyes",
    depth_of_field: "shallow",
    lens: "50mm"
  },
  subject: [{
    id: "main_subject",
    type: "person",
    count: "1",
    grouping: "solo",
    role: "primary",
    importance: 10,
    identity_lock: "none",
    consistency_tags: [],
    age_range: "YOUNG_ADULT",
    appearance: {
        gender: "Female",
        ethnicity: "Caucasian",
        skin_quality: "hyper-realistic",
        body_type: "average",
        skin_tone: "Fair Ivory",
        hair: "Layered Cut -> Medium -> Brown",
        eyes: { color: "Blue", shape: "Almond" },
        distinct_features: [],
        nails: { shape: "Natural", length: "Natural", finish: "Glossy", design: "Solid Color", color: "Nude Beige" },
        tattoos: { description: "", placement: "", size: "" }
    },
    description: "",
    pose: "",
    clothing: [{ category: "Unisex", item: "", fit: "", pattern: "", color: "Cream", fabric: "", layer: "Top", placement: "Upper Body", coverage: "Full Coverage" }],
    accessories: []
  }],
  advanced: {
      negative_prompt: ["nudity", "cartoon", "text"],
      magic_prompt_enhancer: true,
      safety_constraints: {
          no_minors: true,
          no_nudity: true,
          no_explicit_sexual_content: true,
          no_text_logos: true
      }
  }
};
