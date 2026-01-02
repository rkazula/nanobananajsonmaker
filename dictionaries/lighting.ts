
export const LIGHTING_TYPES_DATA = [
  // --- Daylight / natural ---
  {
    value: "natural_sunlight",
    desc: "Clean direct daylight (true sun). Produces crisp edges and defined shadows. Best for outdoor realism, travel/editorial, and documentary looks. AI tip: mention sun position (front/side/back) and add 'bounce fill' if shadows get too harsh."
  },
  {
    value: "golden_hour_sunlight",
    desc: "Low, warm sun near sunrise/sunset with long shadows and flattering skin tone. Best for cinematic romance, lifestyle, fashion exteriors, and ‘premium glow’. AI tip: call out 'backlit rim on hair' or 'side-lit golden hour' for control."
  },
  {
    value: "blue_hour_ambient",
    desc: "Soft, cool ambient light after sunset/before sunrise. Great dynamic range for city scenes and moody portraits. Best when you want neon/signage/practicals to pop without blowing highlights."
  },
  {
    value: "overcast_daylight",
    desc: "Cloud cover = giant soft source. Low harsh shadows, very forgiving on skin. Best for portraits, fashion outdoors, and consistent reportage. AI tip: add 'soft wraparound light' to avoid the image feeling flat."
  },
  {
    value: "diffused_daylight",
    desc: "Daylight softened by haze/scrim/thin clouds—still directional but gentle. Best for editorial outdoor portraits when you want softness without losing shape. AI tip: specify 'diffused sun from camera-left/right'."
  },
  {
    value: "soft_diffused",
    desc: "Extremely soft, scattered light that wraps around the subject, minimizing texture and imperfections. Ideal for flattering portraits and calm atmospheres."
  },
  {
    value: "window_light",
    desc: "Interior daylight motivated by a window. Painterly, believable, intimate. Best for lifestyle, editorial portraits, and implied-sensual boudoir aesthetics (non-explicit). AI tip: specify window side (camera-left/right), distance, and diffusion (sheer curtains)."
  },
  {
    value: "north_window_light",
    desc: "Soft, consistent window light without direct sun patches (studio favorite). Best for clean skin texture, calm editorial portraits, and repeatable results. AI tip: add 'soft catchlights' and 'gentle falloff'."
  },
  {
    value: "hard_sunlight",
    desc: "High-contrast sun with hard-edged shadows and strong texture. Best for gritty fashion, graphic street, and bold shapes. AI tip: define shadow direction and keep the subject away from frame edges to reduce distortion artifacts."
  },
  {
    value: "dappled_sunlight",
    desc: "Patterned light/shadow from leaves or blinds. Best for creative summer portraits and stylized editorial texture. AI tip: keep the pattern 'soft and sparse' to avoid chaotic, fake-looking shadow maps."
  },
  {
    value: "reflected_sunlight",
    desc: "Sun bounced from a bright surface (wall/sand/water) giving bright, flattering fill without the harshness. Best for beach/white-wall city scenes and high-end natural portraits."
  },

  // --- Night natural sources ---
  {
    value: "moonlight",
    desc: "Cool, directional night key with low ambient. Best for cinematic night portraits, silhouettes, and quiet mood. AI tip: pair with a subtle motivated fill (streetlight/practical) so faces stay readable."
  },
  {
    value: "starlight",
    desc: "Extremely dim ambient night light. Best for landscape/astronomy mood, silhouettes, and long-exposure aesthetics. AI tip: describe 'long exposure feel' and add minimal fill if a human face must be visible."
  },

  // --- Flame / warm practicals ---
  {
    value: "firelight",
    desc: "Warm, flickering, low-position source with lively shadow movement. Best for rustic intimacy, cinematic warmth, and dramatic chiaroscuro. AI tip: mention 'flicker' + 'soft smoke/haze' for realism."
  },
  {
    value: "candlelight",
    desc: "Tiny warm source with rapid falloff—very low-key and intimate. Best for romantic, period, and moody close portraits. AI tip: specify 'grain/noise' and 'soft highlight bloom' instead of over-smoothing."
  },
  {
    value: "lantern_light",
    desc: "Warm practical with broader, softer spread than candles. Best for night markets, camping scenes, and believable motivated interior/exterior lighting."
  },
  {
    value: "torchlight",
    desc: "Hot, contrasty flame with strong direction and dramatic shadows. Best for historical/fantasy realism and intense atmosphere. AI tip: specify 'strong falloff' and keep background detail minimal."
  },

  // --- Street / urban night ---
  {
    value: "streetlight_sodium",
    desc: "Classic orange sodium-vapor streetlight (nostalgic city-night look). Best for gritty noir streets and retro urban mood. AI tip: balance with cooler ambient (blue hour) if skin turns too orange."
  },
  {
    value: "streetlight_led",
    desc: "Modern LED street lighting (cool/neutral, cleaner color). Best for contemporary city realism and crisp night detail. Can feel sterile—pair with signage/neon for character."
  },
  {
    value: "neon_light",
    desc: "Strong saturated neon acting as key or accent. Best for nightlife portraits and cinematic color contrast. AI tip: state the dominant neon color and whether it’s key or rim."
  },
  {
    value: "signage_glow",
    desc: "Soft spill from storefront signs/billboards. Best for believable motivated street portraits with gentle color contamination and realistic ambience."
  },
  {
    value: "car_headlights",
    desc: "Hard, directional beams with fast falloff. Best for tension, rain/fog beams, silhouettes, and cinematic night drama. AI tip: specify angle (front/side), distance, and whether beams are visible in haze."
  },

  // --- Household practicals ---
  {
    value: "practical_lamp",
    desc: "General warm practical lamp light (motivated interior source). Best for cozy cinematic rooms and lived-in realism. AI tip: mention lampshade type/color to control spill softness."
  },
  {
    value: "table_lamp",
    desc: "Localized warm pool of light at low height. Best for bedside portraits, reading scenes, and classic noir motivation (warm key + cool window fill)."
  },
  {
    value: "floor_lamp",
    desc: "Taller practical with wider spill and higher source height. Best for living-room scenes and full/half-body interiors where you need believable ambient coverage."
  },
  {
    value: "desk_lamp",
    desc: "Directional close practical—strongly motivated shadows. Best for focused, moody desk portraits (writer/hacker/late-night work). AI tip: describe beam direction and cone shape."
  },
  {
    value: "fluorescent_office",
    desc: "Flat overhead office light (often slightly green). Best for corporate realism, sterile interiors, and intentionally unglamorous documentary mood. AI tip: add 'subtle green cast' and 'soft overhead shadows'."
  },

  // --- Bulb types / color temperature character ---
  {
    value: "tungsten_incandescent",
    desc: "Warm tungsten interior (classic film/home look). Best for cozy cinematic scenes and flattering warmth. Pairs beautifully with cool daylight window fill for warm/cool contrast."
  },
  {
    value: "halogen_light",
    desc: "Warmer-white, punchy practical light with crisp highlights. Best for retail/venues and interiors where you want clean specular shine without going fully cool."
  },

  // --- Continuous lights ---
  {
    value: "led_panel",
    desc: "Controllable continuous source (clean, modern). Best for fast setups and consistent exposure. AI tip: add 'diffused LED panel' for softness or 'gridded LED' for more shape."
  },
  {
    value: "rgb_led",
    desc: "Colored continuous lighting (stylized). Best for music visuals, creative editorial, and neon-like indoor scenes. AI tip: keep one dominant hue + subtle secondary fill to avoid clown-light chaos."
  },
  {
    value: "ring_light",
    desc: "Flat frontal light with circular catchlights. Best for beauty/social aesthetics and minimal shadows. Often reads ‘creator/influencer’—avoid if you want classic editorial depth and modeling."
  },

  // --- Modifiers (soft sources) ---
  {
    value: "softbox",
    desc: "Soft, rectangular key with controllable spill. Best default for studio portraits and commercial realism. AI tip: specify size + angle (e.g., '90cm softbox at 45° camera-left')."
  },
  {
    value: "octabox",
    desc: "Round soft source with pleasing catchlights and smooth falloff. Best for beauty and premium editorial portraits—clean, flattering, and very ‘photographic’."
  },
  {
    value: "stripbox",
    desc: "Tall narrow soft source. Best for rim/kicker along body lines, fashion, and separation from background—especially full-body work."
  },
  {
    value: "beauty_dish",
    desc: "Crisp-but-flattering beauty light (more punch than a softbox). Best for glamour/editorial and sculpted cheekbones. AI tip: mention 'diffusion sock' if you want gentler skin."
  },
  {
    value: "parabolic_softbox",
    desc: "Large, directional softness with ‘expensive’ specular control. Best for high-end fashion/editorial portraits where highlights look premium, not flat."
  },
  {
    value: "umbrella_reflector",
    desc: "Fast, broad soft light with less control than softboxes. Best for quick portrait setups, event-style studio looks, and clean coverage when perfection isn’t the goal."
  },

  // --- Bounce / reflectors ---
  {
    value: "bounce_light",
    desc: "Light bounced off a wall/ceiling to create a larger, softer source. Best for natural, window-like fill in interiors and studio. AI tip: mention bounce surface (white wall/ceiling) for realism."
  },
  {
    value: "reflector_silver",
    desc: "Bright, punchy fill with crisp specular highlights. Best outdoors in shade/overcast when you want sparkle and contrast. Can be harsh—use at a slight angle."
  },
  {
    value: "reflector_gold",
    desc: "Warm fill that mimics late-day sun. Best to add glow in shade without changing the whole scene’s time-of-day. AI tip: keep it subtle to avoid orange skin."
  },

  // --- Control / shaping tools ---
  {
    value: "snoot_spot",
    desc: "Very tight spotlight beam. Best for dramatic accents (eyes, lips, hands) and theatrical portraits. AI tip: specify beam edge hardness (hard/soft) to control realism."
  },
  {
    value: "grid_spot",
    desc: "Directional light with controlled spill. Best for low-key portraits, keeping backgrounds dark, and isolating the subject cleanly."
  },
  {
    value: "fresnel_light",
    desc: "Focusable cinematic light (from hard to softer edge). Best for film-set looks, motivated window beams, and dramatic key/rim setups. AI tip: mention 'barn doors' or 'focused beam' if needed."
  },
  {
    value: "hmi_daylight",
    desc: "Powerful daylight-balanced source (film/set staple). Best for ‘sun through window’ simulation, large interior scenes, and crisp daylight looks that still feel motivated."
  },

  // --- Flash / strobe ---
  {
    value: "studio_strobe",
    desc: "High-power flash with crisp detail and clean edges. Best for commercial/fashion studio looks and sharp texture control. AI tip: pair with a modifier (softbox/beauty dish) to define the character."
  },
  {
    value: "on_camera_flash",
    desc: "Direct camera-axis flash (raw, honest, harsh). Best for party reportage, paparazzi/90s vibe, and intentionally unpolished realism."
  },
  {
    value: "fill_flash",
    desc: "Subtle flash used only to lift shadows (not to look ‘flashed’). Best for harsh sun, backlit portraits, and keeping eyes readable outdoors."
  },

  // --- Studio styles / setups ---
  {
    value: "high_key_studio",
    desc: "Bright, low-shadow look with clean backgrounds. Best for beauty, e-commerce, and cheerful commercial/editorial. AI tip: specify 'even background exposure' and 'soft wrap'."
  },
  {
    value: "low_key_studio",
    desc: "Dark, shadow-driven studio mood with controlled highlights. Best for noir, dramatic fashion, and fine-art portraiture. AI tip: add a rim/kicker to avoid subject blending into the background."
  },

  // --- Mixed / motivated cinema lighting ---
  {
    value: "mixed_light_sources",
    desc: "Intentional mix of color temperatures (e.g., window daylight + tungsten lamp). Best for cinematic realism and lived-in interiors. AI tip: name the dominant key source to prevent muddy, contradictory lighting."
  },
  {
    value: "practical_plus_daylight",
    desc: "Window daylight plus warm practical lamps (classic film look). Best for hotel/room portraits and cozy interiors with cool ambient + warm pools of light. AI tip: specify which side the window is on."
  },
  {
    value: "warm_indoor_practical_light",
    desc: "Warm, soft indoor lighting (ceiling lamp + ambient). Natural shadows, cozy home/evening atmosphere."
  },
  {
    value: "natural_daylight_open_shade",
    desc: "Bright daylight in open shade (e.g., terrace). Soft fill, no harsh highlights, clean colors."
  },
  {
    value: "studio_softbox_beauty",
    desc: "Studio beauty lighting (Softbox Key + Fill). Soft, diffused, smooth highlight roll-off, ideal for portraits."
  },
  {
    value: "bright_natural_daylight",
    desc: "Intense, clean daylight (noon/early afternoon). High contrast, saturated colors."
  },
  {
    value: "golden_hour_to_twilight_natural",
    desc: "Transition from golden hour to blue hour (twilight). Soft, pastel light, low contrast."
  },
  {
    value: "warm_indoor_practical + soft_fill",
    desc: "Warm indoor practical light from lamps/ceiling + soft fill. Typical for lobbies/hallways."
  },
  {
    value: "warm_fairylights + soft_fill",
    desc: "Main light motivated by fairy lights/Christmas lights + gentle fill. Glow and bokeh effect."
  },
  {
    value: "night_selfie_key + ambient_snow_bounce",
    desc: "Phone screen light (warm on face) + cool reflection from snow in the background."
  },
  {
    value: "bright_indoor_daylight_through_glass",
    desc: "Bright daylight coming through a glass roof (atrium), diffused, with turquoise reflection from the water."
  },
  {
    value: "soft_natural_daylight",
    desc: "Soft daylight (slightly overcast sky), ideal for lifestyle portraits."
  },
  {
    value: "warm_indoor_practicals + soft_key",
    desc: "Warm decorative lamps in the background + soft key light on the character (glamour vibe)."
  }
] as const;

export const LIGHTING_TYPES = LIGHTING_TYPES_DATA.map(d => d.value);

export const LIGHTING_DIRECTIONS_DATA = [
  // --- Standard / foundational directions ---
  {
    value: "front_lit",
    desc: "Key light close to the camera axis (flat, shadow-minimizing). Smooths texture and reduces wrinkles/pores, but also reduces 3D shape. Best for clean beauty, simple commercial looks, ID/passport-style framing, and ‘safe’ photoreal results when you don’t want dramatic shadows."
  },
  {
    value: "three_quarter_front_lit",
    desc: "Classic portrait key at ~30–45° off camera axis and slightly above eye level (Loop/Rembrandt territory depending on height). Builds cheekbone/jaw modeling while keeping both eyes bright. Best default for almost any portrait style: editorial, corporate, lifestyle, glamour."
  },
  {
    value: "side_lit_left",
    desc: "Key light from 90° camera-left (strong split potential). Maximizes texture and contrast: pores, fabric weave, facial structure. Best for character portraits, gritty fashion, noir mood, and dramatic chiaroscuro. Add subtle fill if you need detail on the shadow side."
  },
  {
    value: "side_lit_right",
    desc: "Key light from 90° camera-right. Same high-contrast, texture-revealing look as side_lit_left. Choose based on scene motivation (window/practical position) or the subject’s preferred ‘good side’ for facial symmetry."
  },
  {
    value: "back_lit",
    desc: "Key light behind the subject (silhouette/rim potential). Separates subject from background and adds glow/halation on hair/edges. Face goes dark unless you add fill (bounce, reflector, or soft key). Best for silhouettes, dreamy backlit portraits, haze beams, and cinematic atmosphere."
  },
  {
    value: "back_rim_left",
    desc: "Rim/kicker from behind-left. Paints a bright edge on left hair/shoulder/jawline for strong separation, especially in low-key scenes. Best for cinematic portraits, fashion separation, and making dark backgrounds feel ‘expensive’."
  },
  {
    value: "back_rim_right",
    desc: "Rim/kicker from behind-right. Clean edge light on the right side gives depth and subject pop. Best for low-key portraits, stage-like looks, and any setup where you need crisp separation from a darker background."
  },

  // --- Vertical angles / height control ---
  {
    value: "top_lit",
    desc: "Hard top-down key (directly above). Creates deep eye-socket and under-nose shadows (‘raccoon eyes’) and can feel harsh. Best for horror/unease, interrogation-room realism, or graphic editorial. For flattering use, specify heavy diffusion and a touch of fill."
  },
  {
    value: "overhead_lit",
    desc: "General overhead ambient (ceiling practicals). Very common in real interiors (kitchens, offices) and reads authentic, but is rarely flattering. Best for documentary realism, ‘found light’ scenes, or intentionally unglamorous vibes. Add a soft fill or bounce to lift eye shadows."
  },
  {
    value: "butterfly_angle",
    desc: "High, centered key in front (Paramount/Butterfly). Produces a small shadow under the nose and sculpts cheekbones symmetrically. Best for glamour/beauty, classic studio portraits, and editorial looks where symmetry and clean catchlights matter."
  },
  {
    value: "under_lit",
    desc: "Light from below (campfire/horror). Produces unnatural upward shadows and exaggerates facial features in an eerie way. Best for spooky, experimental, or theatrical portraits. Avoid for standard beauty unless motivated (phone flashlight, campfire, stage effect)."
  },

  // --- Cinematic / specialized portrait patterns ---
  {
    value: "split_lighting_left",
    desc: "True split lighting from camera-left: one half of the face illuminated, the other half in shadow. Highly graphic and dramatic. Best for intense character portraits, ‘dual nature’ themes, and strong mood statements. Often needs catchlight control so the lit eye stays alive."
  },
  {
    value: "split_lighting_right",
    desc: "True split lighting from camera-right. Same bold, graphic look as left split, but motivated from the right side of frame. Best when the scene’s practical/window is on camera-right or when it flatters the subject’s structure."
  },
  {
    value: "rembrandt_angle_left",
    desc: "Classic painterly key from high camera-left (~45° + slightly above). Can create the signature Rembrandt triangle on the shadow cheek: timeless, emotional, human. Best for editorial portraits, cinematic drama, and ‘old master’ mood."
  },
  {
    value: "rembrandt_angle_right",
    desc: "Rembrandt key from high camera-right. Same painterly triangle potential, but flipped for scene motivation or subject preference. Best for portraits where you want depth without going full split-light."
  },
  {
    value: "short_lighting_left",
    desc: "Light hits the far (shadow) side of the face; the near side stays darker. Slims the face and increases drama. Best for sculpted editorial portraits and moody glamour—especially flattering for rounder faces."
  },
  {
    value: "short_lighting_right",
    desc: "Short lighting from camera-right. Same slimming, sculpting effect; choose based on the subject’s angles or environmental motivation."
  },
  {
    value: "broad_lighting_left",
    desc: "Light hits the near side of the face (the side closest to camera). Opens up visibility, feels friendlier and less dramatic. Best for corporate portraits, approachable lifestyle, and when you want less contrast."
  },
  {
    value: "broad_lighting_right",
    desc: "Broad lighting from camera-right. Same open, approachable look, but motivated from the right side of the scene."
  },

  // --- Edge / contour / separation tools ---
  {
    value: "edge_lit_left",
    desc: "Grazing light from left side/back that skims the edge of the subject. Reveals texture and contour without fully lighting the face. Best for implied form, fashion outlines, low-key separation, and fine-art minimalism."
  },
  {
    value: "edge_lit_right",
    desc: "Edge light from right side/back. Same contour-revealing effect, great for sculpting shoulders/hairline and separating from dark backgrounds."
  },
  {
    value: "rim_light_dual",
    desc: "Rim light from both sides (two kickers) with a darker front. Creates a glossy, high-end outline and strong separation. Best for stage, fashion, and dramatic low-key portraits—add minimal front fill if you need facial detail."
  },

  // --- Bounce / fill strategies (AI-stabilizers) ---
  {
    value: "bounce_from_left",
    desc: "Key or fill bounced from camera-left (wall/foamcore/reflector). Creates a large, soft, natural source—very ‘window-like’. Best for realistic portraits, gentle shadows, and clean skin rendering."
  },
  {
    value: "bounce_from_right",
    desc: "Bounced light from camera-right. Same soft, natural feel; choose based on where your motivated source (window/practical) sits in the scene."
  },
  {
    value: "clamshell_lighting",
    desc: "Beauty classic: key above + fill from below (reflector or second soft source). Minimizes under-eye shadows, gives smooth skin and strong catchlights. Best for beauty/glamour, clean editorial portraits, and very ‘polished’ looks."
  },
  {
    value: "ambient_wraparound",
    desc: "Soft omnidirectional light with low contrast (open shade / heavy overcast / very large diffusion). Extremely forgiving and readable. Best for groups, documentary coverage, and clean commercial scenes. Add subtle negative fill if you want more shape."
  },
  {
    value: "negative_fill_left",
    desc: "Not a light—intentional shadow shaping by blocking fill on camera-left (flags/black fabric). Deepens shadows and increases cheekbone definition. Best for cinematic low-key portraits and ‘expensive’ contrast control."
  },
  {
    value: "negative_fill_right",
    desc: "Negative fill on camera-right. Same shadow-sculpting effect; use to control contrast and keep the face dimensional without harsher keys."
  },

  // --- Motivated / practical-driven directions ---
  {
    value: "motivated_window_left",
    desc: "Directional key motivated by a window on camera-left. Reads highly believable in interiors. Best for lifestyle/editorial portraits—specify curtain diffusion and window height for realism."
  },
  {
    value: "motivated_window_right",
    desc: "Window-motivated key on camera-right. Same realism; choose to match room layout and shadow direction."
  },
  {
    value: "motivated_practical_left",
    desc: "Key motivated by a lamp/practical on camera-left. Creates warm pools of light with cinematic falloff. Best for night interiors and noir-adjacent scenes."
  },
  {
    value: "motivated_practical_right",
    desc: "Lamp/practical key on camera-right. Same warm motivated realism; great for bedside, desk, and hotel-room setups."
  },
  {
    value: "overhead_soft + ambient_fill",
    desc: "Softened overhead light with ambient fill (typical for apartments)."
  },
  {
    value: "key_from_open_sky_front_right",
    desc: "Key light from open sky (front-right), natural contrast."
  },
  {
    value: "key_front_left + fill_front_right",
    desc: "Classic studio setup: Key from the left, fill from the right."
  },
  {
    value: "sun_high + soft_fill_from_water",
    desc: "High sun + turquoise/cool fill reflected from water (blue bounce)."
  },
  {
    value: "sun_high + soft_fill_from_sand_and_sky",
    desc: "High sun + warm fill from sand and soft fill from sky."
  },
  {
    value: "soft_sky_light + low_sun_fill",
    desc: "Soft sky light (key) + gentle low sun backlight near the horizon."
  },
  {
    value: "key_front_high + ambient_hallway_glow",
    desc: "Primary light from above/front + general hallway glow."
  },
  {
    value: "motivated_from_garland_left + gentle_front_fill",
    desc: "Light motivated by decorations on the left + gentle front fill (no harsh flash)."
  },
  {
    value: "tree_lights_sparkle",
    desc: "Light originating from the Christmas tree, creating reflections and glint."
  },
  {
    value: "sun_high + soft_sky_fill",
    desc: "Sun high (beach) + soft sky fill."
  },
  {
    value: "soft_key_front + ambient_glow_from_garlands",
    desc: "Soft key from the front + glow from Christmas garlands."
  },
  {
    value: "soft_front_light_from_phone + cool_ambient",
    desc: "Frontal light from the phone + cool ambient light (night)."
  }
] as const;

export const LIGHTING_DIRECTIONS = LIGHTING_DIRECTIONS_DATA.map(d => d.value);

export const LIGHTING_EFFECTS_DATA = [
  // --- Highlights, Edges & Separation ---
  {
    value: "rim_lighting",
    desc: "A bright edge outline created by a light placed behind/side of the subject. Instantly separates dark hair/clothing from dark backgrounds and adds strong depth. Best for low-key portraits, fashion, stage looks, and cinematic backlight setups."
  },
  {
    value: "hair_light",
    desc: "A dedicated light aimed at hair from above/behind to add sheen, texture, and separation. Best for premium portraits and beauty/editorial work—especially with dark hair or dark backgrounds."
  },
  {
    value: "kicker_light",
    desc: "A small side/back accent that ‘kicks’ brightness onto the shadow side of the face (jaw/cheek/temple). A classic cinema trick to keep contrast while preserving detail. Best for low-key portraits and film-style lighting."
  },
  {
    value: "edge_light",
    desc: "Grazing light that skims along the subject’s contour (shoulder, cheek, collarbone). Reveals form and texture without lighting the entire face. Best for implied form, fashion silhouettes, and sculpted fine-art looks."
  },
  {
    value: "specular_highlights",
    desc: "Bright, crisp highlight reflections on shiny surfaces (skin sheen, leather, metal, wet streets). Adds realism and ‘expensive’ texture. Best for beauty, product, wet-look portraits, and night streets—control intensity to avoid blown highlights."
  },
  {
    value: "catchlights",
    desc: "Visible reflections in the eyes from the key light (or window). Makes the subject feel alive and connected. Best for nearly all portraits—specify shape/size (softbox catchlight, window catchlight) for consistent results."
  },
  {
    value: "double_catchlights",
    desc: "Two catchlights (key + fill). Reads very ‘studio’ and polished. Best for beauty/glamour and commercial portraits—avoid if you want gritty documentary realism."
  },

  // --- Atmosphere, Volume & Depth ---
  {
    value: "volumetric_light",
    desc: "Visible light beams (‘god rays’) through haze, fog, dust, or smoke. Adds massive depth and cinematic atmosphere. Best for backlit scenes, stage/concert looks, alleyways, forests, and dramatic interiors."
  },
  {
    value: "light_shafts",
    desc: "Distinct shafts of light, often from a window or spotlight, cutting through haze. Best for film-noir interiors, cathedral-like spaces, and dramatic storytelling moments."
  },
  {
    value: "haze_glow",
    desc: "Soft overall glow created by atmospheric haze (less beam-y than volumetrics). Adds depth layering and softens contrast in a realistic way. Best for night streets, backlit portraits, and ‘cinematic air’ without obvious rays."
  },
  {
    value: "bloom",
    desc: "Bright areas gently bleed into darker areas (sensor/lens-like glow). Creates a dreamy, soft-lens feel. Best for night lights, backlit portraits, and romantic scenes—keep subtle for realism."
  },
  {
    value: "halation",
    desc: "Warm red/orange fringe around strong highlights (film/diffusion artifact). Adds organic imperfection and vintage warmth. Best for tungsten interiors, neon nights, and film-inspired editorial."
  },
  {
    value: "lens_flare",
    desc: "Stray light hitting lens elements, creating streaks/ghosts/haze. Adds candid, imperfect ‘real camera’ energy. Best for backlit sun, headlights, neon, and handheld documentary vibes—use sparingly or it looks fake."
  },
  {
    value: "anamorphic_flare",
    desc: "Horizontal flare streak typical of anamorphic lenses. Strong cinematic signature. Best with widescreen ratios (2.39:1), neon, headlights, and high-contrast night scenes."
  },

  // --- Shadow Play & Patterns ---
  {
    value: "dappled_light_pattern",
    desc: "Organic broken light (trees/leaves) creating soft spots and moving texture. Best for outdoor portraits with a natural, summery feel. AI tip: keep the pattern ‘soft and sparse’ so it doesn’t look like a sticker overlay."
  },
  {
    value: "window_shadow_pattern",
    desc: "Window frame shadows (mullions) cast onto the subject/scene. Instantly communicates ‘interior + daylight’ and adds structure. Best for editorial portraits and cinematic room scenes."
  },
  {
    value: "venetian_blinds_shadows",
    desc: "Horizontal slat shadows across face/walls—classic noir/detective language. High tension and graphic style. Best for thriller mood, interrogation scenes, and stylized editorial."
  },
  {
    value: "gobo_pattern",
    desc: "Projected pattern from a gobo/cucoloris (branches, shapes, abstract cutouts). Great for controlled ‘dappled’ effects in studio. Best for fashion/editorial when you want texture without relying on real foliage."
  },
  {
    value: "hard_shadow_edges",
    desc: "Crisp, sharp-edged shadows (small/hard source). Adds graphic punch and realism in harsh sun or bare bulbs. Best for gritty street, bold fashion, and high-contrast minimal compositions."
  },
  {
    value: "soft_shadow_edges",
    desc: "Feathered, gentle shadows (large soft source). Most flattering for skin. Best for beauty, portraits, and commercial work where you want natural softness."
  },
  {
    value: "soft_shadows",
    desc: "Diffuse shadows with almost imperceptible edges. Creates a very gentle transition between light and dark areas."
  },
  {
    value: "long_shadows",
    desc: "Stretched shadows from low sun angles (early morning/late afternoon). Strong time-of-day cue and great texture on ground/walls. Best for golden hour storytelling and environmental portraits."
  },
  {
    value: "shadow_wrap",
    desc: "Shadows that roll smoothly across the face/body (large source close to subject). Creates sculpted but flattering depth. Best for premium portrait lighting (window/large softbox)."
  },

  // --- Exposure / Dynamic Range effects ---
  {
    value: "blown_highlights",
    desc: "Intentional highlight clipping (overexposed windows, sun flares). Can feel candid, filmic, and emotional. Best for dreamy memory-like scenes—use lightly or it looks like a mistake."
  },
  {
    value: "crushed_blacks",
    desc: "Intentional loss of shadow detail (deep blacks). Adds punch, mystery, and graphic strength. Best for noir and low-key fashion—ensure subject separation via rim/kicker."
  },

  // --- Stylized / Mood Lighting Languages ---
  {
    value: "silhouette",
    desc: "Subject rendered mostly dark against a bright background, emphasizing shape and pose over surface detail. Best for backlit sunsets, window backlight, fog beams, and implied form."
  },
  {
    value: "chiaroscuro",
    desc: "Strong, painterly contrast between light and shadow with visible volume (Caravaggio/Rembrandt energy). Best for dramatic portraits, fine-art, and moody editorial—pair with controlled falloff and negative fill."
  },
  {
    value: "high_key_lighting",
    desc: "Bright, airy, low-shadow look with clean highlights and minimal contrast. Best for beauty, e-commerce, fresh commercial style, and cheerful lifestyle imagery."
  },
  {
    value: "low_key_lighting",
    desc: "Dark overall exposure with selective highlights shaping the subject. Best for cinematic drama, mystery, and intensity. Needs separation (rim/hair light) to avoid subject blending into the background."
  },
  {
    value: "color_contrast_teal_orange",
    desc: "Classic cinematic warm/cool split (warm skin highlights vs cooler shadows/background). Best for movie-like portraits, night streets, and dramatic editorial—works especially well with mixed sources (tungsten + daylight)."
  },
  {
    value: "neon_rim",
    desc: "Colored rim light (cyan/magenta/blue) outlining the subject. Best for nightlife, cyberpunk, and stylized modern portraits. Keep skin tones believable by using neon as rim/accent, not the only key."
  },

  // --- Realism cues (biological / physical) ---
  {
    value: "subsurface_scattering",
    desc: "Translucent glow where light passes through thin skin (ears, fingertips), creating a subtle red warmth. A strong realism cue for portraits and hands—great for backlit window scenes and rim-lit setups."
  },
  {
    value: "skin_sheen",
    desc: "Controlled specular sheen on skin (not plastic). Adds realism and ‘life’—especially on forehead, nose bridge, cheekbones. Best for beauty/editorial; specify 'natural skin texture' to avoid over-smoothing."
  },

  // --- Creative, rule-breaking effects (still photographic) ---
  {
    value: "prism_refraction",
    desc: "Rainbow or split-light refraction through a prism/glass. Adds creative color streaks while staying camera-real. Best for experimental portraits and editorial covers—use as a subtle accent."
  },
  {
    value: "colored_gel_wash",
    desc: "A gelled light bathing part of the scene in a controlled color. Best for music/editorial looks and stylized portraits. Keep one dominant gel + neutral fill to preserve skin realism."
  },
  {
    value: "projection_mapping",
    desc: "Projected text/graphics/patterns onto the subject (like a projector). Best for avant-garde editorial and concept portraits. AI tip: keep projections simple to avoid unreadable pseudo-text artifacts."
  }
] as const;

export const LIGHTING_EFFECTS = LIGHTING_EFFECTS_DATA.map(d => d.value);
