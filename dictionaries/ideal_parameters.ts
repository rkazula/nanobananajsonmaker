import { NanoBananaType } from '../schema';

// This implies a partial structure of the full Schema.
// Only the defined fields will be updated when selected.

export interface IdealParameterProfile {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name mapping
    data: DeepPartial<NanoBananaType>;
}

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T[P] extends object
      ? DeepPartial<T[P]>
      : T[P];
};

export const IDEAL_PARAMETERS_DATA: IdealParameterProfile[] = [
  {
    id: "portrait_headshot_studio",
    title: "Photoreal Headshot (Studio / Casting)",
    description: "Most natural, credible portraits (LinkedIn, casting, editorial headshot). Minimal risk of odd proportions.",
    icon: "User",
    data: {
      user_intent: "Add to prompt: 'softbox/octabox 45° + subtle fill', 'natural skin texture, pores'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "headshot",
        focus_point: "eyes",
        depth_of_field: "portrait_shallow",
        lens: "85mm"
      },
      lighting: {
        type: "octabox",
        direction: "three_quarter_front_lit",
        effect: "catchlights"
      }
    }
  },
  {
    id: "portrait_editorial_close",
    title: "Editorial Portrait (Magazine Close)",
    description: "Premium portrait with a slight 'magazine' feel, stronger facial plasticity, less 'passport-like' than a headshot.",
    icon: "Star",
    data: {
      user_intent: "Add: 'short lighting / Rembrandt lighting', 'clean background', 'subtle film grain'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "4:5",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "three_quarter_view",
        framing: "bust_shot",
        focus_point: "face",
        depth_of_field: "shallow",
        lens: "105mm"
      },
      lighting: {
        type: "parabolic_softbox",
        direction: "rembrandt_angle_left",
        effect: "chiaroscuro"
      }
    }
  },
  {
    id: "fashion_full_body",
    title: "Fashion Full Body (Clean, Flattering)",
    description: "Fashion, silhouette, stance. Safer full-body (fewer anatomy issues) with controlled perspective.",
    icon: "Shirt",
    data: {
      user_intent: "Add: 'even studio light' or 'soft daylight'. Leave margin around feet (AI likes to crop).",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "4:5",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "full_body",
        focus_point: "subject",
        depth_of_field: "medium",
        lens: "70mm"
      },
      lighting: {
        type: "softbox",
        direction: "three_quarter_front_lit",
        effect: "rim_lighting"
      }
    }
  },
  {
    id: "street_reportage_candid",
    title: "Street / Reportage Candid",
    description: "Reportage and street — looks like a real camera shot: fast, authentic, unposed.",
    icon: "Camera",
    data: {
      user_intent: "Add: 'available light', 'high ISO grain (subtle)', 'candid moment'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2",
            image_size: "1024"
          }
        }
      },
      camera_perspective: {
        pov: "observer_pov",
        framing: "medium_shot",
        focus_point: "zone_focus",
        depth_of_field: "medium",
        lens: "35mm"
      },
      lighting: {
        type: "overcast_daylight",
        direction: "ambient_wraparound",
        effect: "soft_shadow_edges"
      }
    }
  },
  {
    id: "cinematic_scope_establishing",
    title: "Cinematic Establishing (Scope / Story First)",
    description: "Filmic shots, location as character, atmosphere. Ideal for scene intros, travel, architecture with human element.",
    icon: "Film",
    data: {
      user_intent: "Add: 'cinematic lighting', 'atmospheric depth'. If native 2.39:1 not supported — generate wide and crop.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "2.39:1",
            image_size: "1792"
          }
        }
      },
      camera_perspective: {
        pov: "observer_pov",
        framing: "establishing_shot",
        focus_point: "hyperfocal_focus",
        depth_of_field: "deep",
        lens: "24mm"
      },
      lighting: {
        type: "blue_hour_ambient",
        direction: "ambient_wraparound",
        effect: "haze_glow"
      }
    }
  },
  {
    id: "imax_style_large_format",
    title: "IMAX-Style Large Format (Clarity + Scale)",
    description: "Large format impression: clarity, scale, vertical composition. Great for architecture, landscape, epic scenes.",
    icon: "Monitor",
    data: {
      user_intent: "Add: 'large format feel', 'crisp micro-contrast', 'deep focus'. If 1.90:1 missing — generate 16:9 and slight crop.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "1.90:1",
            image_size: "1792"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "wide_shot",
        focus_point: "infinity",
        depth_of_field: "hyperfocal",
        lens: "24mm"
      },
      lighting: {
        type: "diffused_daylight",
        direction: "ambient_wraparound",
        effect: "soft_shadow_edges"
      }
    }
  },
  {
    id: "boudoir_window_implied",
    title: "Intimate Boudoir (Implied, Window Light)",
    description: "Sensuality without explicitness: mood, shadow, gesture. Best for bedroom/hotel shots, with sheer curtains and soft light.",
    icon: "Heart",
    data: {
      user_intent: "Add: 'soft diffused window light through sheer curtains', 'tasteful implied sensuality, no explicit nudity'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "2:3",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "pov_from_above_eyes",
        framing: "medium_close_up",
        focus_point: "eyes",
        depth_of_field: "shallow",
        lens: "85mm"
      },
      lighting: {
        type: "north_window_light",
        direction: "motivated_window_left",
        effect: "catchlights"
      }
    }
  },
  {
    id: "noir_low_key_portrait",
    title: "Noir / Low-Key Portrait (Drama)",
    description: "Strong mood: shadow defines form. Ideal for black, smoke, rain, neon, dramatic portrait.",
    icon: "Moon",
    data: {
      user_intent: "Add: 'single hard key + rim light', 'low key', 'subtle halation', 'film grain'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "three_quarter_view",
        framing: "tight_portrait",
        focus_point: "eyes",
        depth_of_field: "shallow",
        lens: "135mm"
      },
      lighting: {
        type: "fresnel_light",
        direction: "side_lit_left",
        effect: "low_key_lighting"
      }
    }
  },
  {
    id: "product_macro_jewelry",
    title: "Product Macro (Jewelry / Details)",
    description: "Details of jewelry, cosmetics, material textures. Maximum micro-detail readability.",
    icon: "Gem",
    data: {
      user_intent: "Add: 'controlled studio reflections', 'soft gradient background', 'sharp facets, no CGI look'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "1:1",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "macro_shot",
        focus_point: "focus_stacking",
        depth_of_field: "focus_stacking",
        lens: "100mm"
      },
      lighting: {
        type: "studio_strobe",
        direction: "front_lit",
        effect: "specular_highlights"
      }
    }
  },
  {
    id: "reflection_editorial_mirror",
    title: "Reflection / Mirror Editorial",
    description: "Mirror/reflection shots — instant 'real world' feeling and narrative. Great for fashion, backstage, hotel bathroom.",
    icon: "Layers",
    data: {
      user_intent: "Add: 'single clean reflection', 'no double faces', 'natural imperfections on mirror/glass'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:4",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "reflection_shot",
        framing: "medium_shot",
        focus_point: "reflection_focus",
        depth_of_field: "medium",
        lens: "50mm"
      },
      lighting: {
        type: "practical_plus_daylight",
        direction: "mixed_light_sources",
        effect: "bloom"
      }
    }
  },
  {
    id: "action_panning_dynamic",
    title: "Dynamic Motion (Panning Realism)",
    description: "Movement and energy (street, sports, dance, cars). Looks like real camera panning — huge credibility boost.",
    icon: "Zap",
    data: {
      user_intent: "Add: 'motion streaked background', 'subject sharp', 'shutter 1/30–1/60 vibe' (descriptive).",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "16:9",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "observer_pov",
        framing: "medium_shot",
        focus_point: "panning_focus",
        depth_of_field: "panning_dof",
        lens: "35mm"
      },
      lighting: {
        type: "natural_sunlight",
        direction: "side_lit_left",
        effect: "hard_shadow_edges"
      }
    }
  },
  {
    id: "group_clean_event",
    title: "Group / Event Portrait (Clean & Safe)",
    description: "Groups and events: faces must be readable, no character blending. Least 'AI merge' risk.",
    icon: "Users",
    data: {
      user_intent: "Add: 'distinct faces, clear separation, realistic spacing', 'even soft light'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "group_shot",
        focus_point: "subject",
        depth_of_field: "deep",
        lens: "50mm"
      },
      lighting: {
        type: "umbrella_reflector",
        direction: "ambient_wraparound",
        effect: "catchlights"
      }
    }
  },
  {
    id: "minimal_negative_space_premium",
    title: "Premium Minimal (Negative Space)",
    description: "High-end editorial minimalism, space for layout/text, luxurious compositional calm.",
    icon: "Crop",
    data: {
      user_intent: "Add: 'clean wall / fog / sky negative space', 'editorial composition', 'subtle film grain'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "4:5",
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "negative_space_shot",
        focus_point: "off_center_focus",
        depth_of_field: "medium",
        lens: "85mm"
      },
      lighting: {
        type: "high_key_studio",
        direction: "three_quarter_front_lit",
        effect: "high_key_lighting"
      }
    }
  },
  {
    id: "final_delivery_4k_upscale",
    title: "Final Delivery (4K Workflow Preset)",
    description: "When you need 4K as final output: wallpaper, poster, heavy crop. (This is a pipeline preset — usually via upscale).",
    icon: "CheckSquare",
    data: {
      user_intent: "Best practice: generate master at native max (e.g. 1536/1792), then upscale to 4K and optional light detail refine.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "16:9",
            image_size: "4096"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "wide_shot",
        focus_point: "infinity",
        depth_of_field: "deep",
        lens: "24mm"
      },
      lighting: {
        type: "diffused_daylight",
        direction: "ambient_wraparound",
        effect: "soft_shadow_edges"
      }
    }
  }
];