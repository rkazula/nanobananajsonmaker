import { NanoBananaType } from '../schema';

// This implies a partial structure of the full Schema.
// Only the defined fields will be updated when selected.

export enum IdealParametersCategory {
    BUSINESS = "Portrety Biznesowe",
    INSTAGRAM = "Instagram & Lifestyle",
    REPORTAGE = "Reportaże & Fotografia Uliczna",
    EDITORIAL = "Magazyny & Edytorskie",
    INTIMATE = "Akty & Intymne",
    CINEMATIC = "Cinematic & Artystyczne",
    OTHER = "Pozostałe"
}

export interface IdealParameterProfile {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name mapping
    category: IdealParametersCategory;
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
    category: IdealParametersCategory.BUSINESS,
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
    category: IdealParametersCategory.EDITORIAL,
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
    category: IdealParametersCategory.EDITORIAL,
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
    category: IdealParametersCategory.REPORTAGE,
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
    category: IdealParametersCategory.CINEMATIC,
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
    category: IdealParametersCategory.CINEMATIC,
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
    category: IdealParametersCategory.INTIMATE,
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
    category: IdealParametersCategory.CINEMATIC,
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
    category: IdealParametersCategory.EDITORIAL,
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
    category: IdealParametersCategory.EDITORIAL,
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
    category: IdealParametersCategory.REPORTAGE,
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
    category: IdealParametersCategory.BUSINESS,
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
    category: IdealParametersCategory.EDITORIAL,
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
    category: IdealParametersCategory.OTHER,
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
  },
      {
        id: "golden_hour_lifestyle",
        title: "Golden Hour Lifestyle",
        description: "Warm, backlit, dreamy look typical of influencer travel photography. Flattering skin tones and magical atmosphere.",
        icon: "Sun",
        category: IdealParametersCategory.INSTAGRAM,
        data: {
          user_intent: "Add: 'sun flare', 'warm haze', 'backlit hair', 'dreamy atmosphere'. Avoid: 'harsh shadows'.",
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
            framing: "medium_shot",
            focus_point: "face",
            depth_of_field: "shallow",
            lens: "50mm"
          },
          lighting: {
            type: "golden_hour_sunlight",
            direction: "back_lit",
            effect: "lens_flare"
          }
        }
      },
      {
        id: "cyberpunk_neon_portrait",
        title: "Cyberpunk Neon Portrait",
        description: "High contrast, colorful night photography. Teal and orange cinematic look with strong urban energy.",
        icon: "Zap",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'wet streets', 'reflection on skin', 'futuristic vibe', 'chromatic aberration'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "2.39:1",
                image_size: "1792"
              }
            }
          },
          camera_perspective: {
            pov: "low_angle",
            framing: "close_up",
            focus_point: "eyes",
            depth_of_field: "shallow_depth_of_field",
            lens: "35mm"
          },
          lighting: {
            type: "neon_light",
            direction: "side_lit_left",
            effect: "color_contrast_teal_orange"
          }
        }
      },
      {
        id: "vintage_90s_flash",
        title: "90s Flash aesthetic",
        description: "Direct on-camera flash look. High contrast, hard shadows, nostalgic 'disposable camera' vibe.",
        icon: "Camera",
        category: IdealParametersCategory.OTHER,
        data: {
          user_intent: "Add: 'direct flash', 'point and shoot aesthetic', 'hard shadows on wall', 'vignette'.",
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
            framing: "medium_shot",
            focus_point: "center_focus",
            depth_of_field: "deep",
            lens: "35mm"
          },
          lighting: {
            type: "on_camera_flash",
            direction: "front_lit",
            effect: "hard_shadow_edges"
          }
        }
      },
      {
        id: "corporate_clean_headshot",
        title: "Corporate Headshot (LinkedIn)",
        description: "Professional, trustworthy, and clean. Even lighting, neutral background, sharp focus on eyes.",
        icon: "Briefcase",
        category: IdealParametersCategory.BUSINESS,
        data: {
          user_intent: "Add: 'business attire', 'confident smile', 'neutral grey background', 'high quality'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "1:1",
                image_size: "1024"
              }
            }
          },
          camera_perspective: {
            pov: "eye_level",
            framing: "headshot",
            focus_point: "eyes",
            depth_of_field: "medium",
            lens: "85mm"
          },
          lighting: {
            type: "softbox",
            direction: "broad_lighting_left",
            effect: "catchlights"
          }
        }
      },
      {
        id: "cinematic_anamorphic",
        title: "Cinematic Anamorphic",
        description: "The Hollywood movie look. Widescreen aspect ratio, oval bokeh, horizontal flares.",
        icon: "Film",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'anamorphic lens artifacts', 'cinematic color grading', 'film grain', 'letterbox'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "2.39:1",
                image_size: "1792"
              }
            }
          },
          camera_perspective: {
            pov: "shoulder_level",
            framing: "medium_close_up",
            focus_point: "rack_focus",
            depth_of_field: "shallow",
            lens: "anamorphic_50mm"
          },
          lighting: {
            type: "practical_plus_daylight",
            direction: "side_lit_right",
            effect: "anamorphic_flare"
          }
        }
      },
      {
        id: "beauty_macro_details",
        title: "Beauty Macro (Eyes/Lips)",
        description: "Extreme close-up for makeup or skincare. Hyper-detailed texture, sharp focus.",
        icon: "Eye",
        category: IdealParametersCategory.EDITORIAL,
        data: {
          user_intent: "Add: 'visible skin pores', 'iris detail', 'makeup texture', 'no airbrushing'.",
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
            framing: "extreme_close_up",
            focus_point: "eyes",
            depth_of_field: "macro_focus",
            lens: "100mm"
          },
          lighting: {
            type: "ring_light",
            direction: "front_lit",
            effect: "specular_highlights"
          }
        }
      },
      {
        id: "moody_rainy_window",
        title: "Moody Rainy Window",
        description: "Melancholic vibe shot through glass with raindrops. Soft focus, cool tones.",
        icon: "CloudRain",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'raindrops on glass', 'condensation', 'city lights in bokeh background', 'melancholy'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "4:5",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "through_foreground",
            framing: "close_up",
            focus_point: "raindrops_on_glass_focus",
            depth_of_field: "shallow",
            lens: "50mm"
          },
          lighting: {
            type: "overcast_daylight",
            direction: "diffused_daylight",
            effect: "bokeh_emphasis"
          }
        }
      },
      {
        id: "architectural_interior_wide",
        title: "Architectural Interior (Wide)",
        description: "Clean, spacious interior design photography. Straight lines, deep depth of field.",
        icon: "Home",
        category: IdealParametersCategory.OTHER,
        data: {
          user_intent: "Add: 'interior design magazine', 'symmetrical composition', 'leading lines', 'decluttered'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "16:9",
                image_size: "1792"
              }
            }
          },
          camera_perspective: {
            pov: "chest_level",
            framing: "wide_shot",
            focus_point: "hyperfocal_focus",
            depth_of_field: "deep",
            lens: "16mm"
          },
          lighting: {
            type: "north_window_light",
            direction: "ambient_wraparound",
            effect: "soft_shadows"
          }
        }
      },
      {
        id: "high_fashion_studio",
        title: "High Fashion Studio",
        description: "Dramatic, sculpted lighting typical of Vogue editorials. Strong shapes and confidence.",
        icon: "Star",
        category: IdealParametersCategory.EDITORIAL,
        data: {
          user_intent: "Add: 'avant-garde pose', 'designer clothing', 'confident expression', 'studio backdrop'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "2:3",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "low_angle",
            framing: "cowboy_shot",
            focus_point: "face",
            depth_of_field: "medium",
            lens: "70mm"
          },
          lighting: {
            type: "beauty_dish",
            direction: "butterfly_angle",
            effect: "chiaroscuro"
          }
        }
      },
      {
        id: "black_and_white_noir",
        title: "Film Noir (B&W)",
        description: "Classic detective style. High contrast black and white, shadows, mystery.",
        icon: "Moon",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'black and white', 'film grain', 'smoke', 'shadows', 'mystery', '1940s vibe'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "4:3",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "dutch_angle",
            framing: "medium_shot",
            focus_point: "spotlight_focus",
            depth_of_field: "medium",
            lens: "50mm"
          },
          lighting: {
            type: "fresnel_light",
            direction: "side_lit_left",
            effect: "venetian_blinds_shadows"
          }
        }
      },
      {
        id: "analog_70s_warmth",
        title: "70s Analog (Kodak)",
        description: "Vintage, warm, grainy look. Nostalgic colors and imperfect composition.",
        icon: "Image",
        category: IdealParametersCategory.OTHER,
        data: {
          user_intent: "Add: 'vintage film stock', 'Kodak Portra', 'warm hues', 'film grain', 'nostalgia'.",
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
            framing: "medium_shot",
            focus_point: "soft_focus",
            depth_of_field: "medium",
            lens: "35mm"
          },
          lighting: {
            type: "natural_sunlight",
            direction: "back_lit",
            effect: "halation"
          }
        }
      },
      {
        id: "product_clean_ecommerce",
        title: "E-Commerce Product (Clean)",
        description: "Pure white background, shadowless, perfectly lit product photography.",
        icon: "ShoppingBag",
        category: IdealParametersCategory.EDITORIAL,
        data: {
          user_intent: "Add: 'pure white background', 'studio lighting', 'sharp details', 'commercial photography'.",
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
            framing: "medium_shot",
            focus_point: "focus_stacking",
            depth_of_field: "deep",
            lens: "90mm"
          },
          lighting: {
            type: "studio_strobe",
            direction: "front_lit",
            effect: "high_key_lighting"
          }
        }
      },
      {
        id: "dramatic_silhouette",
        title: "Dramatic Silhouette",
        description: "Subject dark against a bright background. Graphic, mysterious, form-focused.",
        icon: "User",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'silhouette', 'contour only', 'bright background', 'mystery', 'no face detail'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "16:9",
                image_size: "1792"
              }
            }
          },
          camera_perspective: {
            pov: "low_angle",
            framing: "full_body",
            focus_point: "silhouette_edge_focus",
            depth_of_field: "deep",
            lens: "24mm"
          },
          lighting: {
            type: "natural_sunlight",
            direction: "back_lit",
            effect: "silhouette"
          }
        }
      },
      {
        id: "action_sports_freeze",
        title: "Sports / Action Freeze",
        description: "High shutter speed look. Freezing movement, sweat, intensity, telephoto compression.",
        icon: "Activity",
        category: IdealParametersCategory.REPORTAGE,
        data: {
          user_intent: "Add: 'frozen motion', 'flying particles', 'intense expression', 'high shutter speed'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "3:2",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "ground_level",
            framing: "full_body",
            focus_point: "subject",
            depth_of_field: "shallow",
            lens: "200mm"
          },
          lighting: {
            type: "hmi_daylight",
            direction: "three_quarter_front_lit",
            effect: "hard_shadow_edges"
          }
        }
      },
      {
        id: "ethereal_dreamy_soft",
        title: "Ethereal / Dreamy",
        description: "Soft focus, pastel colors, angelcore aesthetic. Very gentle and romantic.",
        icon: "Feather",
        category: IdealParametersCategory.INSTAGRAM,
        data: {
          user_intent: "Add: 'soft focus', 'diffusion filter', 'pastel colors', 'angelic', 'glow'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "4:5",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "pov_from_above_eyes",
            framing: "close_up",
            focus_point: "soft_focus",
            depth_of_field: "shallow",
            lens: "50mm"
          },
          lighting: {
            type: "soft_diffused",
            direction: "ambient_wraparound",
            effect: "bloom"
          }
        }
      },
      {
        id: "top_down_flatlay",
        title: "Top-Down Flat Lay",
        description: "Overhead shot for food, desk setups, or products. Graphic and organized.",
        icon: "Coffee",
        category: IdealParametersCategory.EDITORIAL,
        data: {
          user_intent: "Add: 'knolling', 'organized', 'symmetrical', 'tabletop photography'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "1:1",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "bird_eye",
            framing: "medium_shot",
            focus_point: "center_focus",
            depth_of_field: "deep",
            lens: "35mm"
          },
          lighting: {
            type: "window_light",
            direction: "side_lit_left",
            effect: "soft_shadows"
          }
        }
      },
      {
        id: "gothic_dark_fantasy",
        title: "Gothic Dark Fantasy",
        description: "Dark, moody, ancient atmosphere. Candlelight, deep shadows, rich textures.",
        icon: "Ghost",
        category: IdealParametersCategory.CINEMATIC,
        data: {
          user_intent: "Add: 'dark atmosphere', 'mystery', 'ancient vibe', 'rich textures', 'subtle horror'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "2:3",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "eye_level",
            framing: "medium_shot",
            focus_point: "eyes",
            depth_of_field: "shallow",
            lens: "85mm"
          },
          lighting: {
            type: "candlelight",
            direction: "under_lit",
            effect: "chiaroscuro"
          }
        }
      },
      {
        id: "street_paparazzi_chaos",
        title: "Paparazzi / Chaos",
        description: "Telephoto lens, chaotic framing, sense of urgency and movement.",
        icon: "Zap",
        category: IdealParametersCategory.REPORTAGE,
        data: {
          user_intent: "Add: 'unposed', 'caught off guard', 'motion blur', 'chaotic background', 'flash'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "2:3",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "observer_pov",
            framing: "medium_shot",
            focus_point: "subject",
            depth_of_field: "shallow",
            lens: "200mm"
          },
          lighting: {
            type: "on_camera_flash",
            direction: "front_lit",
            effect: "motion_blur_subject"
          }
        }
      },
      {
        id: "minimalist_pastel",
        title: "Minimalist Pastel",
        description: "Clean lines, soft colors, negative space. Wes Anderson aesthetic.",
        icon: "Layout",
        category: IdealParametersCategory.INSTAGRAM,
        data: {
          user_intent: "Add: 'pastel color palette', 'symmetry', 'minimalism', 'clean lines', 'soft light'.",
          api: {
            generation_config: {
              image_config: {
                aspect_ratio: "1:1",
                image_size: "1536"
              }
            }
          },
          camera_perspective: {
            pov: "front_on",
            framing: "wide_shot",
            focus_point: "deep",
            depth_of_field: "deep",
            lens: "35mm"
          },
          lighting: {
            type: "high_key_studio",
            direction: "front_lit",
            effect: "soft_shadows"
          }
        }
      },
      {
        id: "documentary_war_correspondent",
        title: "Documentary / Grit",
        description: "Raw, gritty, high contrast black and white or desaturated. Intense realism.",
        icon: "Globe",
        category: IdealParametersCategory.REPORTAGE,
        data: {
          user_intent: "Add: 'grainy', 'high contrast', 'gritty realism', 'reportage', 'emotional intensity'.",
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
            framing: "close_up",
            focus_point: "eyes",
            depth_of_field: "medium",
            lens: "35mm"
          },
          lighting: {
            type: "overcast_daylight",
            direction: "ambient_wraparound",
            effect: "crushed_blacks"
          }
        }
      },
      {
    id: "corporate_studio_black_bg",
    title: "Corporate Studio (Black Background)",
    description: "Modern professional headshot with a clean black background. Unlike 'Noir', the subject is brightly and softly lit, creating a sleek, high-contrast separation.",
    icon: "Briefcase",
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'professional headshot', 'clean black background', 'soft even lighting', 'business casual', 'light blue shirt', 'friendly expression', 'bright face'. Avoid: 'shadows covering face', 'dramatic noir', 'dark clothes blending in'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "4:3", // Klasyczna proporcja cyfrowa, dobra do prezentacji na ekranach
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "medium_close_up", // Ujęcie popiersia (ramiona i głowa), lekko pod kątem
        focus_point: "face",
        depth_of_field: "deep", // Przy jednolitym czarnym tle głębia jest mniej istotna wizualnie, ale twarz musi być w pełni ostra
        lens: "85mm"
      },
      lighting: {
        type: "softbox", // Duże, miękkie źródło światła
        direction: "three_quarter_front_lit", // Klasyczne oświetlenie pod kątem 45 stopni
        effect: "soft_shadow_edges" // Miękkie, nierzucające się w oczy cienie na twarzy
      }
    }
  },
  {
    id: "outdoor_business_natural",
    title: "Outdoor Business Portrait (Natural Light)",
    description: "Professional portrait taken outdoors with a blurred nature background. Soft, diffused daylight and authentic colors. Approachable and realistic.",
    icon: "Sun", // Lub 'Camera' / 'User'
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'outdoor portrait', 'blurred green foliage background', 'natural daylight', 'soft bokeh', 'business attire', 'beige suit', 'realistic colors'. Avoid: 'studio lighting', 'harsh shadows', 'black and white'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2", // Standardowa proporcja lustrzanki
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "bust_shot", // Kadr od klatki piersiowej w górę
        focus_point: "face",
        depth_of_field: "shallow", // Tło jest wyraźnie rozmyte (separacja)
        lens: "85mm" // Klasyczna portretówka dająca ładny bokeh i kompresję
      },
      lighting: {
        type: "overcast_daylight", // Miękkie światło dzienne (brak ostrego słońca)
        direction: "ambient_wraparound", // Światło otacza modela równomiernie
        effect: "soft_shadows" // Bardzo łagodne przejścia tonalne
      }
    }
  },
  {
    id: "classic_analog_actor_portrait",
    title: "Classic Analog Portrait (Soft B&W)",
    description: "Traditional editorial/actor headshot with soft lighting and visible background texture. mimic the look of 35mm film with grain and a draped background.",
    icon: "Film",
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'black and white', '35mm film grain', 'soft studio light', 'draped curtain background', 'distinguished look', 'mid-key lighting'. Avoid: 'pitch black background', 'harsh shadows'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:4", // Klasyczne proporcje portretowe
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "bust_shot", // Kadr obejmujący ramiona i krawat/ubiór
        focus_point: "face",
        depth_of_field: "medium", // Tło (kurtyna) jest lekko nieostre, ale czytelne
        lens: "85mm"
      },
      lighting: {
        type: "softbox", // Miękkie źródło światła
        direction: "broad_lighting_left", // Twarz oświetlona szeroko, łagodne cienie
        effect: "film_grain" // Kluczowy element estetyki analogowej
      }
    }
  },
  {
    id: "studio_bw_noir_headshot",
    title: "Studio Noir Headshot (B&W)",
    description: "Classic high-contrast black & white portrait with a pitch-black background. Intense, sharp, and focused on facial texture.",
    icon: "User",
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'black and white photography', 'monochrome', 'pitch black background', 'high contrast', 'sharp skin texture', 'serious expression'. Avoid: 'color', 'background details'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "1:1", // Zdjęcie jest kwadratowe/bliskie kwadratu
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level", // Poziom oczu, bardzo bezpośredni
        framing: "close_up", // Ciasny kadr na twarz
        focus_point: "eyes", // Ostrość na oczy
        depth_of_field: "medium", // Cała twarz jest ostra, nie tylko oczy
        lens: "85mm" // Klasyczna ogniskowa portretowa, minimalne zniekształcenia
      },
      lighting: {
        type: "studio_strobe", // Mocne, studyjne światło błyskowe
        direction: "butterfly_angle", // Światło z góry/na wprost (cień pod nosem)
        effect: "low_key_lighting" // Ciemne tło, światło tylko na twarzy
      }
    }
  },
  {
    id: "fashion_editorial_moody_grey",
    title: "Fashion Editorial (Moody Grey Studio)",
    description: "High-end fashion lookbook style. Moody, cool-toned lighting with a dark grey gradient background. Sculpted shadows and sharp styling details.",
    icon: "Coat", // Ikona płaszcza pasuje idealnie do mody
    category: IdealParametersCategory.EDITORIAL,
    data: {
      user_intent: "Add: 'fashion editorial', 'male model in grey coat', 'turtleneck', 'glasses', 'dark grey studio background', 'moody lighting', 'cool tones', 'looking away', 'pensive pose'. Avoid: 'smiling', 'bright sunlight', 'flat lighting', 'pitch black background'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "2:3", // Standardowa proporcja portretowa w modzie/Instagramie
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level", // Poziom wzroku lub delikatnie niżej dla powagi
        framing: "three_quarter_shot", // Kadr 3/4 (od ud w górę) by pokazać płaszcz
        focus_point: "subject", // Ostrość na całą sylwetkę/stylizację
        depth_of_field: "medium", // Tło jest gładkie (gradient), postać w pełni ostra
        lens: "85mm" // Klasyczna ogniskowa modowa, dobra kompresja
      },
      lighting: {
        type: "octabox", // Daje miękkie, ale plastyczne światło (charakterystyczne dla mody)
        direction: "rembrandt_angle_left", // Światło boczne/górne tworzące rzeźbę na twarzy
        effect: "low_key_lighting" // Utrzymanie nastroju, ale bez całkowitej czerni
      }
    }
  },
  {
    id: "corporate_lifestyle_rooftop",
    title: "Corporate Lifestyle (City Rooftop)",
    description: "Modern business portrait on a sunny rooftop with a blurred city skyline. Bright, airy, and optimistic 'success' vibe.",
    icon: "Building",
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'modern businessman', 'navy suit', 'white shirt no tie', 'glasses', 'rooftop terrace', 'blurred city skyline background', 'skyscrapers', 'bright natural daylight', 'sun flare', 'smiling', 'looking away'. Avoid: 'dark studio', 'night', 'flash', 'gloomy'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "3:2", // Poziomy kadr (landscape) typowy dla tego typu zdjęć stockowych/lifestyle
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "medium_shot", // Kadr od ud/pasa w górę (tzw. plan amerykański)
        focus_point: "subject", // Postać ostra, miasto w tle rozmyte
        depth_of_field: "shallow", // Wyraźne odcięcie od tła (bokeh na budynkach)
        lens: "85mm" // Idealna ogniskowa do portretów w plenerze (kompresja tła)
      },
      lighting: {
        type: "natural_sunlight", // Jasne słońce
        direction: "back_rim_right", // Światło konturowe z tyłu/boku dodające "blasku" + wypełnienie z przodu
        effect: "high_key_lighting" // Ogólna jasna tonacja zdjęcia
      }
    }
  },
  {
    id: "casual_business_cafe_window",
    title: "Casual Business (Cafe/Window Light)",
    description: "Relaxed professional portrait in a bright interior (cafe or modern office). Soft, directional window light with a blurred background containing greenery/lifestyle elements.",
    icon: "Coffee",
    category: IdealParametersCategory.INSTAGRAM,
    data: {
      user_intent: "Add: 'professional woman', 'black blazer', 'sitting at table', 'hands clasped', 'modern cafe interior', 'large window', 'green plants in background', 'soft natural window light', 'shallow depth of field'. Avoid: 'dark studio', 'formal backdrop', 'artificial light'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "2:3", // Pionowy kadr portretowy
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level", // Naturalna perspektywa siedzącej osoby
        framing: "medium_shot", // Ujęcie od pasa w górę, obejmujące ręce na stole
        focus_point: "face",
        depth_of_field: "shallow", // Tło (rośliny, wnętrze) jest rozmyte
        lens: "50mm" // Ogniskowa zbliżona do ludzkiego oka, naturalna
      },
      lighting: {
        type: "window_light", // Główne źródło światła z boku (z okna)
        direction: "side_lit_left", // Światło pada z lewej strony kadru
        effect: "soft_shadows" // Łagodne przejścia światłocienia na twarzy
      }
    }
  },
  {
    id: "dramatic_bw_studio_portrait",
    title: "Dramatic Studio Portrait (B&W Intensity)",
    description: "Intense, masculine black & white studio portrait. Strong directional lighting sculpts the face with deep shadows. Best for confident, serious 'power' looks.",
    icon: "User",
    category: IdealParametersCategory.BUSINESS,
    data: {
      user_intent: "Add: 'black and white', 'intense portrait', 'man in dark suit and dark shirt', 'hands holding jacket', 'serious expression', 'sculpted lighting', 'dark grey studio background', 'masculine', 'high contrast'. Avoid: 'flat lighting', 'smiling', 'bright colors'.",
      api: {
        generation_config: {
          image_config: {
            aspect_ratio: "2:3", // Klasyczny pionowy format portretowy
            image_size: "1536"
          }
        }
      },
      camera_perspective: {
        pov: "eye_level",
        framing: "medium_shot", // Ujęcie od pasa w górę, pokazujące dłonie
        focus_point: "face",
        depth_of_field: "medium", // Postać ostra, tło gładkie
        lens: "85mm" // Klasyczna ogniskowa portretowa
      },
      lighting: {
        type: "fresnel_light", // Światło o charakterystyce "filmowej", bardziej skupione i kontrastowe
        direction: "side_lit_left", // Wyraźne światło boczne tworzące cień na drugiej połowie twarzy
        effect: "chiaroscuro" // Malarskie operowanie światłocieniem
      }
    }
  }
    ];