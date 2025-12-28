export const IMAGE_SIZES_DATA = [
  {
    value: "512",
    desc: "Draft / composition check. Fast and cheap for testing pose, lighting direction, and framing. Use for rapid iterations before committing to high detail."
  },
  {
    value: "768",
    desc: "Iteration sweet spot. Better anatomy and facial structure than 512, still fast. Great for exploring styling and lighting setups without spending maximum compute."
  },
  {
    value: "1024",
    desc: "Standard native generation (common max for many models). Strong balance of detail vs stability—good skin texture, fabric, and clean edges when the prompt is tight."
  },
  {
    value: "1280",
    desc: "High-detail preview (if supported). Useful when you want sharper micro-contrast (hair strands, eyelashes) without jumping to the heaviest settings."
  },
  {
    value: "1536",
    desc: "HD native (if supported). Excellent for portraits: more believable pores/texture, jewelry, and fine fabrics. Can expose prompt weaknesses—be explicit about lighting and lens."
  },
  {
    value: "1792",
    desc: "DALL·E-style HD tier (often used in portrait/landscape presets). Great for cleaner typography-free edges and more stable subject separation, especially with cinematic framing."
  },
  {
    value: "2048",
    desc: "2K final (usually via upscale). Best practice: generate at the model’s native max (e.g., 1024–1792) then upscale 2× to reach ~2K while preserving realism."
  },
  {
    value: "3072",
    desc: "3K final (upscaled). Great for premium web use, large crops, and extra retouch headroom. Prefer 2× upscale from a strong native base rather than forcing huge native renders."
  },
  {
    value: "4096",
    desc: "4K final (upscaled). Ideal for wallpapers, posters, and heavy cropping. Recommended pipeline: native max → upscale 4× (or 2× twice) → light detail refinement if available."
  },
  {
    value: "3840x2160",
    desc: "4K UHD video frame (16:9). Use when you specifically want a screen-perfect 4K wallpaper/thumbnail. Best achieved by native max + upscale + gentle sharpening, not brute-force generation."
  },
  {
    value: "4096x2160",
    desc: "DCI 4K (cinema standard, 17:9-ish). Useful for cinematic deliveries and scope workflows; pairs nicely with 2.39:1 crops and film-grade color."
  },
    {
    value: "8K",
    desc: "Not typically supported as a native generation size. Best practice: generate at the model’s max native size, then upscale (2×/4×) for 8K delivery. Alternative: tile/stitch for posters, with seam control."
  },
  {
    value: "IMAX_1.90:1",
    desc: "IMAX-style framing ratio commonly used for 'Filmed for IMAX' presentations. Achieve via native 1.90:1 if available, otherwise crop from a close landscape ratio and design compositions that open vertically."
  },
  {
    value: "IMAX_1.43:1",
    desc: "Classic tall IMAX ratio (premium large-format feel). If the model doesn’t support it directly, generate in 4:3 or 1:1 and crop/extend to 1.43:1. Compose with strong central geometry and vertical space."
  }
] as const;