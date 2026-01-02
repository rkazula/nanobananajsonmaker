
import { BODY_TYPES } from './skin';

export { BODY_TYPES };

export const ALL_FITS = [
    "regular fit", "slim fit", "oversized fit", "tailored fit", "classic fit", 
    "relaxed fit", "tight fit", "bodycon fit", "loose fit", "skinny fit", 
    "boxy fit", "cropped length", "longline", "tapered leg", "straight leg",
    "wide leg", "mini length", "midi length", "maxi length"
].sort();

export const FITS_BY_PLACEMENT: Record<string, string[]> = {
    "Upper Body": ["regular fit", "slim fit", "oversized fit", "tailored fit", "classic fit", "relaxed fit", "tight fit", "bodycon fit", "boxy fit", "cropped length", "longline"],
    "Lower Body": ["regular fit", "slim fit", "relaxed fit", "loose fit", "skinny fit", "tapered leg", "straight leg", "wide leg", "mini length", "midi length", "maxi length"],
    "Full Body": ["regular fit", "slim fit", "oversized fit", "tailored fit", "relaxed fit", "bodycon fit"],
    "Feet": [],
    "Hands": [],
    "Head": [],
    "Intimate": ["regular fit", "slim fit", "tight fit", "bodycon fit"]
};
