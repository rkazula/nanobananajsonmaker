
export const NAIL_SHAPES = [
  "Almond",
  "Square",
  "Round",
  "Oval",
  "Squoval",
  "Stiletto",
  "Coffin",
  "Ballerina",
  "Pointed",
  "Lipstick",
  "Flare"
].sort();

export const NAIL_LENGTHS = [
  "Natural",
  "Short",
  "Medium",
  "Long",
  "Extra Long",
  "Extreme"
].sort();

export const NAIL_FINISHES = [
  "Glossy",
  "Matte",
  "Satin",
  "Chrome / Metallic",
  "Glitter",
  "Holographic",
  "Iridescent",
  "Velvet",
  "Jelly",
  "Pearl"
].sort();

export const NAIL_DESIGNS = [
  "Solid Color",
  "French Tip",
  "Reverse French",
  "Ombre / Gradient",
  "Marble",
  "Floral",
  "Geometric",
  "Animal Print",
  "Abstract Art",
  "3D Embellishments",
  "Rhinestones",
  "Foil",
  "Cat Eye",
  "Negative Space"
].sort();

export const NAIL_COLORS_MAP: Record<string, string> = {
  "Classic Red": "#B22222",
  "Nude Beige": "#D2B48C",
  "Soft Pink": "#FFB6C1",
  "Deep Burgundy": "#800020",
  "Midnight Blue": "#191970",
  "Emerald Green": "#50C878",
  "Jet Black": "#0A0A0A",
  "Pure White": "#FFFFFF",
  "French Pink": "#F8C3CD",
  "Lavender": "#E6E6FA",
  "Peach": "#FFDAB9",
  "Gold": "#D4AF37",
  "Silver": "#C0C0C0"
};

export const NAIL_COLORS = Object.keys(NAIL_COLORS_MAP);
