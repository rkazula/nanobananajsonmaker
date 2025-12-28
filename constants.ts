

// This file now acts as an aggregator and logic layer for the atomic dictionaries.
import {
    SKIN_TONE_MAP,
    HAIR_COLORS_MAP,
    EYE_COLOR_MAP,
    FILM_STOCKS_DATA,
    ASPECT_RATIOS_DATA,
    IMAGE_SIZES_DATA,
    CAMERA_POV_DATA,
    CAMERA_FRAMING_DATA,
    CAMERA_LENS_DATA,
    CAMERA_FOCUS_DATA,
    CAMERA_DOF_DATA,
    SHOTS_DATA,
    ANGLES_DATA,
    IDEAL_PARAMETERS_DATA,
    LIGHTING_TYPES_DATA,
    LIGHTING_DIRECTIONS_DATA,
    LIGHTING_EFFECTS_DATA,
    TIMES_OF_DAY_DATA,
    QUALITY_MODES_DATA,
    GRAIN_AMOUNTS_DATA,
    ISO_VALUES_DATA,
    PRO_APARATY_TOP50,
    TELEFONY_FOTO_PRO_TOP15,
    KAMERY_SPORTOWE_TOP20,
    DRONY_FOTO_PRO_TOP15,
    KOMPAKTY_PREMIUM_TOP10,
    NAKLADKA_STYLISTYCZNA_FILMY_TOP300_DATA
} from './dictionaries';

export * from './dictionaries';

// --- Derived Constants (Logic) ---

export const SKIN_TONES = Object.keys(SKIN_TONE_MAP);
export const HAIR_COLORS = Object.keys(HAIR_COLORS_MAP);
export const EYE_COLORS = Object.keys(EYE_COLOR_MAP);
export const FILM_STOCKS = FILM_STOCKS_DATA.map(f => f.value);
// Map the objects back to a simple string array for Schema/Select compatibility
export const ASPECT_RATIOS = ASPECT_RATIOS_DATA.map(r => r.value) as [string, ...string[]];
export const IMAGE_SIZES = IMAGE_SIZES_DATA.map(s => s.value) as [string, ...string[]];
export const CAMERA_POV = CAMERA_POV_DATA.map(s => s.value) as [string, ...string[]];
export const CAMERA_FRAMING = CAMERA_FRAMING_DATA.map(s => s.value) as [string, ...string[]];
export const CAMERA_LENS = CAMERA_LENS_DATA.map(s => s.value) as [string, ...string[]];
export const CAMERA_FOCUS = CAMERA_FOCUS_DATA.map(s => s.value) as [string, ...string[]];
export const CAMERA_DOF = CAMERA_DOF_DATA.map(s => s.value) as [string, ...string[]];
export const SHOTS = SHOTS_DATA.map(s => s.value) as [string, ...string[]];
export const ANGLES = ANGLES_DATA.map(s => s.value) as [string, ...string[]];
export const IDEAL_PARAMETERS = IDEAL_PARAMETERS_DATA;

// Lighting Derived Arrays
export const LIGHTING_TYPES = LIGHTING_TYPES_DATA.map(x => x.value) as [string, ...string[]];
export const LIGHTING_DIRECTIONS = LIGHTING_DIRECTIONS_DATA.map(x => x.value) as [string, ...string[]];
export const LIGHTING_EFFECTS = LIGHTING_EFFECTS_DATA.map(x => x.value) as [string, ...string[]];

// Scene Derived Arrays
export const TIMES_OF_DAY = TIMES_OF_DAY_DATA.map(x => x.value) as [string, ...string[]];

// Meta Derived Arrays
export const QUALITY_MODES = QUALITY_MODES_DATA.map(x => x.value) as [string, ...string[]];
export const GRAIN_AMOUNTS = GRAIN_AMOUNTS_DATA.map(x => x.value) as [string, ...string[]];
export const ISO_VALUES = ISO_VALUES_DATA.map(x => x.value) as [string, ...string[]];