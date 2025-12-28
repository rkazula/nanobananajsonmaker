
export const CAMERA_POV_DATA = [
  {
    value: "eye_level",
    desc: "Neutral, human-perspective framing (classic portrait/reportage). Best when you want realism, trust, and a natural connection with the subject—great default for most photoreal work."
  },
  {
    value: "low_angle",
    desc: "Camera below the subject looking up. Adds power, dominance, hero energy, and stronger jawline/torso presence. Best for fashion/editorial, athletes, dramatic architecture, and bold character portraits (watch for distorted legs/feet if too close)."
  },
  {
    value: "high_angle",
    desc: "Camera above the subject looking down. Makes the subject feel smaller, more vulnerable, or intimate; also slims the body and emphasizes eyes/face. Best for soft portraits, candid bedroom/boudoir mood, and storytelling where the viewer 'oversees' the moment."
  },
  {
    value: "bird_eye",
    desc: "Top-down (near 90° overhead). Turns scenes into graphic compositions—shapes, patterns, symmetry. Best for flat-lay product shots, food, bedsheets/props styling, choreography, or any scene where geometry is the star (less ideal for flattering faces)."
  },
  {
    value: "worm_eye",
    desc: "Extreme low-angle, near ground level looking up. Big drama, towering lines, surreal scale. Best for architecture, street at night with neon, rain reflections, and cinematic intimidation. Use carefully in portrait—can warp facial proportions unless you step back and use longer focal length."
  },
  {
    value: "dutch_angle",
    desc: "Tilted horizon (intentional). Creates tension, unease, energy, or 'editorial weirdness'. Best for noir, thriller mood, chaotic reportage, club scenes, or stylized fashion. Overuse reads as gimmicky—keep tilt subtle for realism."
  },
  {
    value: "over_the_shoulder",
    desc: "Framed from behind one subject’s shoulder toward another subject/scene. Instantly adds narrative context and 'you are there' intimacy. Best for dialogue moments, voyeuristic storytelling, investigative/reportage vibes, and guiding viewer attention."
  },
  {
    value: "first_person",
    desc: "POV as if the viewer is the subject (hands/arms sometimes visible). Strong immersion and immediacy—feels like lived experience. Best for action, documentary moments, intimate scenes, and experiential shots (be explicit about hands/anatomy to avoid AI hand artifacts)."
  },

  // --- Expanded POVs commonly used in photo/cinema language (AI-friendly) ---

  {
    value: "three_quarter_view",
    desc: "Subject viewed at ~45° (not straight-on). Adds depth and sculpting—cheekbones, jawline, shoulder line. Best for flattering portraits, fashion, and editorial where you want dimensionality without feeling staged."
  },
  {
    value: "profile_view",
    desc: "Side profile (90°). Strong graphic silhouette and elegance; emphasizes nose/forehead/chin line. Best for high-fashion, minimalism, rim-light looks, and dramatic chiaroscuro portraits."
  },
  {
    value: "front_on",
    desc: "Straight-on, symmetrical viewpoint. Feels confrontational, iconic, and very 'studio'. Best for identity-driven portraits, passport-like headshots (but elevated), and bold editorial symmetry."
  },
  {
    value: "back_view",
    desc: "Shot from behind the subject (back/shoulders as the lead). Creates mystery and narrative—viewer follows the subject into the scene. Best for cinematic storytelling, implied sensuality, and travel/editorial moments."
  },
  {
    value: "rear_three_quarter",
    desc: "Behind the subject at ~45°. Keeps mystery but shows face contour and body line. Best for fashion runway vibe, street candids, and sensual/editorial where you want suggestion over reveal."
  },
  {
    value: "side_angle",
    desc: "A general side-biased viewpoint (less strict than profile). Adds realism and 'caught in the moment' energy. Best for reportage and lifestyle when perfectly centered angles feel too posed."
  },

  {
    value: "shoulder_level",
    desc: "Camera height around the subject’s shoulder line (slightly below eye level). Gives presence without heavy distortion. Best for portraits with strong posture, jackets/coats, and natural conversational energy."
  },
  {
    value: "chest_level",
    desc: "Camera placed at chest height. Feels intimate and grounded; often more flattering than true low-angle. Best for documentary portraiture and natural-light interiors."
  },
  {
    value: "hip_level",
    desc: "Camera around hip height (a classic street/film trick). Adds subtle drama and makes legs/lines feel longer if distance is managed. Best for fashion walks, street candids, and dynamic movement."
  },
  {
    value: "ground_level",
    desc: "Camera very close to the ground, but not necessarily extreme worm’s-eye. Great for rain reflections, foreground texture, and leading lines. Best for street at night, architecture, and cinematic atmosphere."
  },

  {
    value: "overhead_45",
    desc: "Overhead but not fully top-down (roughly 45° downward). Keeps faces more flattering than bird’s-eye while still emphasizing scene layout. Best for bed/sofa boudoir setups, tabletop scenes, and lifestyle in interiors."
  },
  {
    value: "through_foreground",
    desc: "Shot 'through' an object (curtains, plants, glass, doorway) to create depth and voyeuristic intimacy. Best for cinematic realism, candid vibes, and premium editorial layering."
  },
  {
    value: "reflection_shot",
    desc: "Viewpoint captured via mirror/window reflection. Adds narrative and stylization while staying photographic. Best for bathrooms, dressing rooms, street windows, and moody noir setups (be explicit: 'single clean reflection' to avoid double faces)."
  },
  {
    value: "peeking_pov",
    desc: "Partial, hidden viewpoint (from behind a doorframe, curtain, or wall). Creates tension and 'caught' realism. Best for thriller/noir, documentary moments, and implied intimacy."
  },

  {
    value: "pov_from_below_chin",
    desc: "A slightly-lower-than-eye POV that emphasizes jawline and eyes without full low-angle distortion. Best for beauty portraits, confidence, and dramatic key light setups."
  },
  {
    value: "pov_from_above_eyes",
    desc: "A slightly-above-eye POV (subtle high-angle). Flattering for eyes and cheekbones; softens body dominance. Best for gentle portraits, intimate indoor scenes, and dreamy natural light."
  },

  {
    value: "subjective_pov",
    desc: "Narrative POV where the camera represents a character’s eyes (not necessarily showing hands). Best for cinematic storytelling and immersive reportage—keeps realism while avoiding hand-generation risks."
  },
  {
    value: "observer_pov",
    desc: "Detached, documentary observer angle (the viewer feels present but not participating). Best for reportage, street, and realistic lifestyle—use when first-person feels too game-like."
  }
] as const;

export const CAMERA_FRAMING_DATA = [
  {
    value: "macro_shot",
    desc: "True macro / extreme detail (e.g., eyelashes, pores, jewelry facets, fabric weave). Best for product/beauty texture moments and hyper-real detail. Needs strong lighting description to avoid 'CG' look."
  },
  {
    value: "insert_shot",
    desc: "Story detail insert (hands turning a key, lipstick cap, cigarette ember, a ring, a note). Best for cinematic storytelling sequences and reportage narratives—adds meaning without showing the whole subject."
  },
  {
    value: "extreme_close_up",
    desc: "Ultra-tight detail (eyes, lips, hands, jewelry, fabric). Best for intensity, intimacy, and texture—beauty/editorial and sensual implied shots. Requires good skin-texture cues to avoid plastic skin."
  },
  {
    value: "close_up",
    desc: "Face-dominant portrait (roughly forehead to chin/neck). Best for emotion, beauty, character studies, and clean commercial portraits. Works best with longer lenses (85–135mm equivalent)."
  },
  {
    value: "headshot",
    desc: "Clean head-and-shoulders portrait optimized for identity and expression. Best for casting-style portraits, professional profiles, and editorial headshots—neutral, readable, and very 'camera-real'."
  },
  {
    value: "tight_portrait",
    desc: "Slightly wider than a close-up, but still face-led (head + shoulders with minimal space). Best when you want intensity without the distortion risk of extreme tight crops."
  },
  {
    value: "bust_shot",
    desc: "Chest-up framing (classic portrait print look). Best for editorial portraits where wardrobe neckline, jewelry, and posture matter but the face remains dominant."
  },
  {
    value: "medium_close_up",
    desc: "Head-and-shoulders to upper chest. Best all-rounder for portraits: expression + a hint of styling. Great for corporate/editorial, actor headshots, and intimate lifestyle."
  },
  {
    value: "shoulders_up",
    desc: "A slightly tighter head-and-shoulders variant emphasizing eyes and cheekbone structure. Best for beauty lighting demos (Rembrandt/Loop) and clean background portraits."
  },
  {
    value: "medium_shot",
    desc: "Waist-up (classic conversational framing). Best for lifestyle, interviews, reportage, and portraits where hands/pose contribute to the story. Be explicit about hand placement to reduce AI artifacts."
  },
  {
    value: "three_quarter_shot",
    desc: "From head to roughly mid-thigh or knees (depending on interpretation). Best for portraits where pose and outfit matter, while keeping the subject large and readable in-frame."
  },
  {
    value: "knee_shot",
    desc: "Head to knees. Best for fashion, editorial stance, and body-language storytelling without committing to full-body (often safer for feet/anatomy in AI)."
  },
  {
    value: "cowboy_shot",
    desc: "Mid-thigh framing (spaghetti western classic). Best for fashion/editorial when you want stance + outfit read while keeping the subject dominant."
  },
  {
    value: "full_body",
    desc: "Head-to-toe. Best for fashion, dance, athletic portraits, and any pose-driven image. Needs clear anatomy instructions and enough space around feet/hands to avoid cropping or distortion."
  },
  {
    value: "two_shot",
    desc: "Two subjects framed together (typically medium to wide). Best for chemistry, dialogue energy, couples, and narrative context. Specify who is in focus and their spacing to prevent weird body merges."
  },
  {
    value: "group_shot",
    desc: "Three or more subjects framed together. Best for events, editorial ensembles, and team portraits. Add constraints like 'distinct faces' and 'clear separation' to avoid AI blending."
  },
  {
    value: "wide_shot",
    desc: "Subject in environment (establishing portrait). Best for travel, documentary, street, architecture-with-subject, and storytelling where location matters. Works beautifully with 35–50mm equivalents."
  },
  {
    value: "long_shot",
    desc: "A wider framing where the full subject is visible with significant environment. Best for cinematic storytelling, action beats, and strong leading lines—subject is readable but not dominant."
  },
  {
    value: "establishing_shot",
    desc: "Environment-first framing that sets location, mood, and scale. Best as the opener in a sequence (or when place is the main character). Pair with wide lenses and strong composition."
  },
  {
    value: "extreme_wide_shot",
    desc: "Big scene, small subject (scale and context). Best for cinematic establishing shots, landscapes with a human element, and 'lonely figure' storytelling. Subject detail will be limited unless you crop."
  },
  {
    value: "negative_space_shot",
    desc: "Subject placed small with intentional empty space (sky/wall/fog). Best for high-end editorial, minimalism, and typography-safe layouts. Great for mood and premium composition."
  }
] as const;

export const CAMERA_FOCUS_DATA = [
  // --- Core / most common ---
  {
    value: "eyes",
    desc: "Pin-sharp focus on the eyes (portrait gold standard). Best for photoreal portraits, beauty, editorial, and intimate storytelling. Use with shallow DOF for premium separation."
  },
  {
    value: "face",
    desc: "Focus across the whole face (eyes + nose + lips). Best when you want clean realism without ultra-thin DOF mistakes; great for headshots and commercial portraits."
  },
  {
    value: "subject",
    desc: "Primary subject is sharp (face/body/outfit readable). Best default for lifestyle, reportage, fashion, and full/half-body portraits where gesture matters."
  },
  {
    value: "subject_face",
    desc: "Focus specifically on the facial features, ensuring the expression is the sharpest element."
  },
  {
    value: "foreground",
    desc: "Foreground element is sharp, subject is softer behind it. Best for layered, voyeuristic, cinematic framing (plants/curtains/glass) and breaking the ‘perfect portrait’ look."
  },
  {
    value: "background",
    desc: "Background is sharp, subject is softer. Best for environment-first storytelling (architecture, location portrait, documentary) or when the place is the main character."
  },
  {
    value: "infinity",
    desc: "Everything feels in focus to the horizon. Best for landscapes, architecture, cityscapes, and 'IMAX/large format' clarity. Works well with wide lenses and strong geometry."
  },
  {
    value: "soft_focus",
    desc: "Deliberately softened focus (dreamy, romantic). Best for vintage glamour, nostalgic looks, diffusion-filter vibes. Be explicit: 'natural skin texture' to avoid plastic smoothing."
  },

  // --- Depth of field control (AI-friendly) ---
  {
    value: "shallow_depth_of_field",
    desc: "Very shallow DOF with strong background blur. Best for premium portrait separation and cinematic subject isolation. Specify lens + aperture to avoid unnatural blur artifacts."
  },
  {
    value: "deep_depth_of_field",
    desc: "High depth of field; scene stays readable. Best for documentary, interiors, street, and architecture where context matters more than bokeh."
  },
  {
    value: "selective_focus",
    desc: "One specific element is sharp, everything else falls off quickly. Best for directing attention (ring, lips, fingertips, a tear drop, a cigarette ember) in cinematic storytelling."
  },

  // --- Compositional focus strategies ---
  {
    value: "center_focus",
    desc: "Focus locked to the center subject/feature. Best for symmetrical portraits, clean studio looks, and iconic front-on framing."
  },
  {
    value: "off_center_focus",
    desc: "Focus placed off-center (rule of thirds). Best for editorial composition with negative space, premium minimalism, and avoiding the ‘AI centered’ feel."
  },
  {
    value: "edge_focus",
    desc: "Focus is intentionally placed near the edge of the frame. Best for experimental/editorial shots that feel candid or slightly ‘wrong’ in an interesting way."
  },

  // --- Cinematic / narrative tricks ---
  {
    value: "rack_focus",
    desc: "Cinematic focus pull from one plane to another (foreground → subject or subject → background). Best for story beats, dialogue moments, reveals, and film language. Mention start/end focus targets."
  },
  {
    value: "two_plane_focus",
    desc: "Both the subject and a key secondary element are readable (like a person + an object). Best when you want narrative clarity without fully flattening the image."
  },
  {
    value: "split_diopter",
    desc: "Foreground AND background sharp simultaneously (classic cinema trick). Best for surreal storytelling, tension, and ‘impossible’ depth. Works especially well in interiors."
  },

  // --- Lens / plane-of-focus bending (rule-breaking) ---
  {
    value: "tilt_shift_focus",
    desc: "Tilted focus plane (Scheimpflug feel): a diagonal slice is sharp while everything else drops off. Best for stylized editorial, miniature-like vibes, and creative isolation without standard bokeh."
  },
  {
    value: "focus_plane_diagonal",
    desc: "A diagonal focus plane across the frame (eyes sharp, shoulder soft; or hand sharp, face soft). Best for fashion/editorial and modern, imperfect realism."
  },

  // --- Street / documentary methods ---
  {
    value: "zone_focus",
    desc: "Street photography technique: focus set to a distance, shoot fast. Best for candid reportage vibes and motion-rich scenes; feels authentic and less posed."
  },
  {
    value: "hyperfocal_focus",
    desc: "Everything from near-to-far appears acceptably sharp (classic landscape/street technique). Best for wide-lens realism, travel, and architectural storytelling."
  },

  // --- Macro / high-detail workflows ---
  {
    value: "macro_focus",
    desc: "Macro-like focus on tiny details (eyelashes, jewelry facets, fabric weave). Best for beauty/product/editorial inserts. Pair with controlled light to avoid CGI texture."
  },
  {
    value: "focus_stacking",
    desc: "Stacked focus look (macro realism): more of the tiny subject is sharp than normally possible. Best for product macro and extreme detail shots."
  },

  // --- Atmosphere / diffusion / vintage ---
  {
    value: "diffusion_filter",
    desc: "Lens diffusion (Black Pro-Mist / Glimmerglass vibe): halation around highlights, softer micro-contrast. Best for nightlife, neon, romantic portraits, cinematic glow."
  },
  {
    value: "halation_glow",
    desc: "Pronounced highlight bloom/halation (film stock / diffusion feel). Best for backlit scenes, street at night, and ‘dreamy’ editorial—keep it subtle for realism."
  },
  {
    value: "intentional_defocus",
    desc: "Whole image slightly out of focus on purpose. Best for abstract mood, memory/nostalgia, and art-photo vibes. Use when you want emotion > detail."
  },

  // --- Foreground/bokeh styling (depth layering) ---
  {
    value: "foreground_bokeh",
    desc: "Out-of-focus foreground shapes (plants, lights, fabric) framing a sharp subject. Best for premium depth, intimacy, and cinematic layering."
  },
  {
    value: "bokeh_emphasis",
    desc: "Bokeh as a design element (big soft light orbs). Best for nightlife, portraits with practical lights, holiday city scenes. Specify 'natural bokeh' to avoid weird patterns."
  },
  {
    value: "anamorphic_bokeh",
    desc: "Oval/vertical stretched bokeh (anamorphic lens vibe). Best for cinematic widescreen looks, neon streets, and film-inspired portraits—pairs great with 2.39:1."
  },
  {
    value: "swirly_bokeh",
    desc: "Swirly background blur (vintage lens character). Best for dreamy, imperfect, artsy portraits. Use carefully—too strong can look artificial."
  },

  // --- Reflections / shooting through stuff (authenticity hacks) ---
  {
    value: "reflection_focus",
    desc: "Focus on the reflection (mirror/window), not the subject directly. Best for narrative ambiguity, fashion/editorial, and 'real world' authenticity."
  },
  {
    value: "through_glass_focus",
    desc: "Focus through glass with subtle distortions (window, shower glass, car windshield). Best for moody realism and cinematic texture—adds believable imperfections."
  },
  {
    value: "raindrops_on_glass_focus",
    desc: "Raindrops sharp on glass, scene behind soft. Best for melancholy mood, city nights, and cinematic storytelling. Great rule-breaker that still reads photographic."
  },

  // --- Motion + focus interplay (dynamic realism) ---
  {
    value: "panning_focus",
    desc: "Subject sharp with motion-streaked background (panning shot). Best for speed, street, dance, cars, action—adds strong real-camera credibility."
  },
  {
    value: "motion_blur_subject",
    desc: "Background sharp-ish, subject intentionally blurred. Best for conveying chaos, nightlife energy, or 'passing time'. Use as an artistic choice, not a mistake."
  },

  // --- Light-driven focus illusions ---
  {
    value: "spotlight_focus",
    desc: "Focus reinforced by light: a tight key light isolates the sharp area while the rest falls into shadow. Best for noir, low-key portraits, and dramatic fine art."
  },
  {
    value: "silhouette_edge_focus",
    desc: "Focus on the edge outline of a silhouette (rim-lit contour). Best for backlit drama, minimalism, and implied form without explicit detail."
  }
] as const;

export const CAMERA_DOF_DATA = [
  // --- Core buckets (kept for backwards compatibility) ---
  {
    value: "shallow",
    desc: "Strong subject isolation with heavy background blur (classic portrait/editorial/boudoir look). Best for eyes-led portraits and cinematic separation. Pair with 50–135mm and f/1.8–f/2.8 equivalents for believable blur."
  },
  {
    value: "shallow_dof",
    desc: "Alias for shallow depth of field. Strong background blur, subject isolation."
  },
  {
    value: "medium",
    desc: "Balanced depth: subject sharp, background readable but softened. Best for lifestyle, reportage portraits, fashion, and scenes where context matters without dominating. Think f/3.2–f/5.6 equivalents."
  },
  {
    value: "deep",
    desc: "Most of the scene in focus (environment-first clarity). Best for landscapes, architecture, documentary interiors, and group shots. Think wide lenses and f/8–f/16 equivalents or 'hyperfocal/infinity focus'."
  },

  // --- Expanded DOF control (AI-friendly + creative) ---
  {
    value: "ultra_shallow",
    desc: "Extremely thin focus plane (dreamy, high-end fashion/beauty). Best for intimate close-ups and luxury bokeh. Use carefully—AI can blur in unnatural ways; specify lens + distance and keep the subject’s eyes as the sharp anchor."
  },
  {
    value: "selective",
    desc: "Only one detail is sharp (ring, lips, fingertips, a tear, cigarette ember), everything else falls off. Best for cinematic inserts and directing attention with precision."
  },
  {
    value: "portrait_shallow",
    desc: "Shallow DOF tuned for flattering portraits: eyes/face sharp, ears and background softly fading. Best default for photoreal headshots. Think 85mm at f/2–f/2.8 vibe."
  },
  {
    value: "environmental",
    desc: "Medium-to-deep DOF that keeps the subject sharp while preserving the story in the environment. Best for location portraits, travel/editorial, and documentary scenes where place matters."
  },
  {
    value: "hyperfocal",
    desc: "Street/landscape technique: everything from near-mid distance to far looks sharp. Best for wide-lens realism, architecture, travel, and 'IMAX clarity' scenes."
  },
  {
    value: "infinity",
    desc: "Far focus locked: distant background is crisp; near elements may soften. Best for cityscapes, mountains, skylines, and cinematic establishing shots."
  },

  // --- Rule-breaking / stylized optics ---
  {
    value: "tilt_shift_plane",
    desc: "Tilted focus plane (Scheimpflug feel): a diagonal slice is sharp while the rest drops off. Best for editorial experimentation, miniature vibes, and non-standard composition that still reads 'real lens'."
  },
  {
    value: "split_diopter",
    desc: "Foreground and background both sharp simultaneously (classic cinema trick). Best for tension, surreal storytelling, and scenes that feel intentionally 'impossible' in a cool way."
  },
  {
    value: "focus_stacking",
    desc: "Macro-style stacked focus: unusually deep sharpness on tiny subjects. Best for product macro, jewelry, insects/flowers, and hyper-detailed inserts."
  },

  // --- Atmosphere-driven depth (perceptual DOF) ---
  {
    value: "atmospheric_depth",
    desc: "Perceived depth from haze/fog/steam rather than lens blur. Best for cinematic streets, backlit interiors, stage lighting, and moody reportage—keeps realism while adding depth layers."
  },
  {
    value: "soft_focus_depth",
    desc: "Overall gentle softness (diffusion filter vibe) with readable forms. Best for vintage glamour, romantic scenes, and neon nights. Specify 'natural skin texture' to avoid plastic smoothing."
  },

  // --- Motion + depth interplay ---
  {
    value: "panning_dof",
    desc: "Subject remains relatively sharp while background streaks with motion (panning shot). Best for speed, street energy, dance, sports, and cars—adds strong real-camera credibility."
  },
  {
    value: "motion_blur_priority",
    desc: "Depth is secondary to motion: intentional blur conveys movement/time. Best for club/nightlife, chaotic reportage, and artsy narrative frames."
  }
] as const;

export const CAMERA_LENS_DATA = [
  // --- Ultra-wide (environment, drama, architecture) ---
  {
    value: "10mm",
    desc: "Extreme ultra-wide. Huge perspective stretch and dramatic leading lines. Best for interiors, architecture, tight spaces, and bold street scenes. Use carefully for portraits—faces/limbs can warp unless the subject is centered and you keep distance."
  },
  {
    value: "12mm",
    desc: "Ultra-wide with slightly more control than 10mm. Best for cinematic establishing shots, modern architecture, and immersive travel frames. Still risky for close portraits."
  },
  {
    value: "14mm",
    desc: "Ultra-wide classic. Great for big sky, strong geometry, and immersive ‘you are there’ scenes. Works for environmental portraits if you keep the subject away from frame edges."
  },
  {
    value: "16mm",
    desc: "Ultra-wide standard. Strong sense of space and depth; great for travel, interiors, architecture, and energetic reportage. For portraits: step back and keep the face near center to avoid distortion."
  },
  {
    value: "18mm",
    desc: "Wide but less aggressive. Best for environmental portraits, interiors, and documentary scenes where you want context without fisheye vibes."
  },
  {
    value: "20mm",
    desc: "Wide cinematic perspective with manageable distortion. Best for street, travel, and dramatic landscapes. Good when you want a modern ‘wide’ look that still feels believable."
  },

  // --- Wide (documentary, street, environmental portrait) ---
  {
    value: "24mm",
    desc: "Wide documentary staple. Strong context, strong leading lines, classic reportage energy. Great for subject-in-environment storytelling; watch edge distortion on bodies if too close."
  },
  {
    value: "28mm",
    desc: "Street photography legend. Feels natural and immediate; less ‘stretch’ than 24mm. Best for candid portraits, reportage, and everyday realism."
  },
  {
    value: "30mm",
    desc: "Modern ‘wide-normal’ compromise. Good for lifestyle and interiors—keeps context without screaming ‘wide lens’."
  },
  {
    value: "35mm",
    desc: "The classic story lens. Natural perspective with enough environment for narrative portraits and reportage. Often the best default for ‘real camera’ documentary vibes."
  },
  {
    value: "40mm",
    desc: "Subtle, very natural ‘human-ish’ perspective. Best when 35mm feels a bit wide and 50mm feels a bit tight—excellent for lifestyle and intimate documentary."
  },

  // --- Normal (neutral, editorial, versatile) ---
  {
    value: "50mm",
    desc: "The neutral classic. Balanced perspective; great for portraits, lifestyle, and general realism. A safe choice when you want the image to feel unforced and camera-authentic."
  },
  {
    value: "55mm",
    desc: "Slightly tighter than 50mm—nice for portraits with a touch more compression. Great for editorial looks without jumping to 85mm."
  },
  {
    value: "58mm",
    desc: "Characterful ‘normal-plus’. Often used to imply premium portrait rendering and gentle compression. Good for moody, cinematic portraits."
  },

  // --- Portrait (flattering compression, separation) ---
  {
    value: "70mm",
    desc: "Short telephoto. Great for portraits that still include some environment. Flattering compression without being too ‘tight’."
  },
  {
    value: "75mm",
    desc: "A sweet spot for portraits—slightly more flattering than 50mm, less isolating than 85mm. Great for lifestyle/editorial portraiture."
  },
  {
    value: "85mm",
    desc: "The portrait king. Flattering facial geometry, strong subject separation, premium bokeh. Best for headshots, beauty, boudoir implied, and editorial portraits."
  },
  {
    value: "90mm",
    desc: "Portrait + macro-friendly vibe. Slightly tighter than 85mm; excellent for beauty detail and product/portrait hybrids."
  },
  {
    value: "100mm",
    desc: "Classic short tele + macro territory. Great for clean portraits, detail shots (hands/jewelry), and minimizing background clutter."
  },
  {
    value: "105mm",
    desc: "A refined portrait telephoto. Strong compression and very flattering features—excellent for studio portraits and high-end editorial."
  },

  // --- Telephoto (compression, candid distance, cinematic isolation) ---
  {
    value: "135mm",
    desc: "The ‘creamy’ portrait telephoto. Strong compression and dreamy separation; makes backgrounds melt. Best for high-end fashion, cinematic portraits, and candid distance. Needs space."
  },
  {
    value: "150mm",
    desc: "Medium tele with elegant compression. Great for runway/editorial and portraits where you want background shapes simplified."
  },
  {
    value: "200mm",
    desc: "Long tele. Heavy compression, very isolated subject, strong bokeh. Best for candid reportage at a distance, sports, wildlife-style framing, and cinematic voyeur vibes."
  },
  {
    value: "300mm",
    desc: "Super-tele. Extreme isolation and compression; very ‘observer’ feel. Best for distant candids, wildlife aesthetics, and graphic layering of planes (rare but powerful)."
  },

  // --- Stylized optics (creative rule-breakers) ---
  {
    value: "fisheye_8mm",
    desc: "Fisheye distortion with a curved horizon. Best for skate/street, music visuals, and intentionally surreal perspectives. Not for realism—use when you want attitude."
  },
  {
    value: "anamorphic_50mm",
    desc: "Cinematic anamorphic ‘feel’ (oval bokeh, horizontal flares, widescreen energy). Best for 2.39:1 frames, neon nights, and film-inspired portraits. Mention 'anamorphic lens' in prompts for best effect."
  }
] as const;

export const SHOTS_DATA = [
  // --- Portrait staples ---
  {
    value: "extreme_close_up",
    desc: "Ultra-tight detail (eyes/lips/texture). Best for intensity, beauty/editorial, and sensual implied mood. Needs careful skin-texture wording to avoid plastic smoothing."
  },
  {
    value: "close_up",
    desc: "Face-led framing (emotion + expression). Best for portraits, headshots, and storytelling where the eyes carry the scene."
  },
  {
    value: "medium_close_up",
    desc: "Head-and-shoulders to upper chest. Best all-round portrait crop: expression + styling + posture without getting too ‘wide’."
  },
  {
    value: "medium_shot",
    desc: "Waist-up. Best for lifestyle, interviews, reportage portraits, and scenes where hands/gesture matter (be explicit about hands to reduce AI artifacts)."
  },
  {
    value: "three_quarter_shot",
    desc: "Head to roughly knees/mid-thigh (varies by convention). Best for fashion/editorial when you need body language + outfit readability without relying on perfect feet rendering."
  },
  {
    value: "cowboy_shot",
    desc: "Mid-thigh framing (classic western). Best for stance, outfit, and attitude—very strong for fashion/editorial portraits."
  },
  {
    value: "full_body",
    desc: "Head-to-toe. Best for fashion, dance, athletic portraits, and pose-driven images. Needs extra space around feet and clear anatomy instructions."
  },

  // --- Scene / cinematic language ---
  {
    value: "wide_shot",
    desc: "Subject in environment. Best for travel, documentary, architecture-with-subject, and narrative context. Pairs well with 24–35mm lenses."
  },
  {
    value: "extreme_wide_shot",
    desc: "Big scene, small subject (scale + place). Best for cinematic establishing frames, landscapes with a human element, and dramatic isolation."
  },
  {
    value: "establishing_shot",
    desc: "Location-first shot that sets mood and geography. Best as the opener in a sequence or when environment is the main character."
  },
  {
    value: "long_shot",
    desc: "Full subject visible with significant environment. Best for cinematic storytelling, action beats, and strong leading lines."
  },

  // --- Storytelling inserts / details ---
  {
    value: "insert_shot",
    desc: "A detail that advances the story (ring, key, lipstick, note, phone screen). Best for cinematic sequences and editorial narratives."
  },
  {
    value: "cutaway_shot",
    desc: "A secondary detail/scene used to add context or mood. Best for reportage, documentaries, and cinematic pacing."
  },

  // --- Multi-subject / event coverage ---
  {
    value: "two_shot",
    desc: "Two subjects framed together. Best for couples, dialogue, chemistry, and relationship storytelling. Specify who is in focus and spacing to avoid AI blending."
  },
  {
    value: "group_shot",
    desc: "Three or more subjects. Best for events, teams, editorial ensembles. Use 'distinct faces' and 'clear separation' to prevent merges."
  },
  {
    value: "over_the_shoulder_shot",
    desc: "Framed behind one subject’s shoulder toward another/scene. Best for dialogue, narrative context, and immersive reportage."
  },

  // --- Creative / rule-breaking shots ---
  {
    value: "negative_space_shot",
    desc: "Subject placed small with intentional empty space (wall/sky/fog). Best for premium editorial minimalism and typography-safe layouts."
  },
  {
    value: "silhouette_shot",
    desc: "Subject as a silhouette against strong backlight. Best for implied form, dramatic mood, and clean graphic storytelling."
  },
  {
    value: "reflection_shot",
    desc: "Shot via mirror/window reflection. Best for fashion/editorial and narrative ambiguity—adds real-world texture and imperfection."
  },
  {
    value: "through_foreground_shot",
    desc: "Shot through foreground elements (plants/curtains/glass) for layered depth. Best for cinematic realism, intimacy, and voyeur energy."
  },
  {
    value: "top_down_shot",
    desc: "Overhead viewpoint. Best for flat-lays, styling, bedsheets/props scenes, and graphic composition driven by shapes."
  },
  {
    value: "low_key_shot",
    desc: "Dark, shadow-driven image where light defines form. Best for noir, dramatic portraits, and fine-art mood (requires clear lighting direction in prompt)."
  },
  {
    value: "high_key_shot",
    desc: "Bright, airy, low-shadow look. Best for beauty, clean commercial, and minimal editorial. Specify soft light to keep it natural."
  }
] as const;

export const ANGLES_DATA = [
  // --- Core / defaults ---
  {
    value: "eye_level",
    desc: "Neutral, human-perspective angle. Best for realism, trust, and clean portrait/reportage work. Safest default for photoreal results."
  },
  {
    value: "low_angle",
    desc: "Camera below subject looking up. Adds power, dominance, and heroic presence. Best for fashion, athletes, bold editorial, and architecture (watch distortion if too close)."
  },
  {
    value: "high_angle",
    desc: "Camera above subject looking down. Feels intimate, gentle, or vulnerable; emphasizes eyes and slims the body. Best for soft portraits, lifestyle, and candid indoor scenes."
  },
  {
    value: "bird_eye",
    desc: "Top-down near 90°. Graphic geometry, patterns, symmetry. Best for flat-lays, food, bedsheets/props styling, and architectural layouts (less flattering for faces)."
  },
  {
    value: "dutch_angle",
    desc: "Intentionally tilted horizon. Creates tension, energy, or unease. Best for noir, thriller mood, chaotic reportage, club scenes, and stylized fashion (keep it subtle for realism)."
  },

  // --- Expanded angles (common on real sets + AI-friendly) ---
  {
    value: "worm_eye",
    desc: "Extreme low-angle from near ground level. Towering scale and dramatic lines. Best for architecture, neon streets, rain reflections, intimidation energy (step back + longer lens for portraits)."
  },
  {
    value: "overhead_45",
    desc: "Overhead but not fully top-down (about 45° down). Keeps faces more flattering than true bird’s-eye while still showing scene layout. Best for bed/sofa lifestyle, tabletop scenes, and intimate interiors."
  },
  {
    value: "three_quarter_angle",
    desc: "Subject turned ~45° to camera (classic flattering angle). Adds depth and sculpting to face/body. Best for portraits, fashion, and editorial where front-on feels too stiff."
  },
  {
    value: "profile_angle",
    desc: "Strong side angle (90° profile). Graphic silhouette, elegant lines. Best for rim light, minimalist editorial, and dramatic portraits."
  },
  {
    value: "front_on",
    desc: "Straight-on, symmetrical angle. Iconic, direct, confrontational. Best for headshots, identity portraits, and clean studio looks."
  },

  // --- Horizon / roll variants (tilt control) ---
  {
    value: "subtle_tilt",
    desc: "A gentle roll of the horizon (less than Dutch). Adds ‘candid/editorial’ energy without screaming stylization. Best for fashion and modern street portraits."
  },
  {
    value: "hard_dutch_angle",
    desc: "Aggressive Dutch tilt. High tension and stylized chaos. Best for music visuals, thrillers, and deliberately ‘uncomfortable’ compositions."
  },

  // --- Camera height as an 'angle' proxy (very photographic) ---
  {
    value: "shoulder_height",
    desc: "Camera height around the subject’s shoulder line (slightly below eye level). Adds presence without distortion. Best for portraits with strong posture and coats/jackets."
  },
  {
    value: "chest_height",
    desc: "Camera placed around chest level. Feels grounded and intimate, often more flattering than true low-angle. Best for documentary portraiture and natural-light interiors."
  },
  {
    value: "waist_level",
    desc: "Camera at waist/hip height. Subtle drama and longer-looking legs (if distance is managed). Best for fashion walks, street candids, and dynamic movement."
  },
  {
    value: "ground_level",
    desc: "Camera very low (near the floor) but not necessarily extreme worm’s-eye. Strong leading lines and foreground texture. Best for street nights, rain reflections, architecture."
  },

  // --- Subject-relative / cinematic angles ---
  {
    value: "over_the_shoulder",
    desc: "Angle from behind one subject toward another. Instantly creates narrative and immersion. Best for dialogue, investigative/reportage vibes, and guiding attention."
  },
  {
    value: "behind_subject",
    desc: "Angle from behind the subject (following view). Adds mystery and story momentum. Best for cinematic walking shots, implied intimacy, and travel/editorial."
  },
  {
    value: "side_angle",
    desc: "Camera placed to the side (less strict than profile). Feels candid and unposed. Best for lifestyle and reportage when symmetry looks too staged."
  },

  // --- Creative / rule-breaking angles ---
  {
    value: "canted_overhead",
    desc: "Overhead + slight Dutch tilt. Graphic and unsettling at once. Best for thriller/noir, editorial experimentation, and stylized interiors."
  },
  {
    value: "diagonal_axis",
    desc: "Subject framed along a strong diagonal line (stairs, hallway, railing). Best for architecture-meets-portrait compositions and dynamic editorial geometry."
  },
  {
    value: "from_below_chin",
    desc: "Slightly below eye level, aimed upward just enough to sculpt the jawline without distortion. Best for confident beauty portraits and dramatic key light."
  },
  {
    value: "from_above_eyes",
    desc: "Slightly above eye level, aimed downward subtly. Flattering to eyes/cheekbones and softens the body. Best for gentle portraits and dreamy window light."
  }
] as const;
