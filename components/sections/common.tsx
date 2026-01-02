import {
    MALE_CLOTHING, FEMALE_CLOTHING, UNISEX_CLOTHING, ClothingPlacement,
    FITS_BY_PLACEMENT, ALL_FITS
} from '../../dictionaries';

// --- Components ---

export const FieldInfo = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="mt-2 text-xs bg-slate-50 border border-slate-200 text-slate-600 p-2 rounded-md flex items-start gap-2 animate-in fade-in">
        <Icon size={14} className="mt-0.5 flex-shrink-0 text-slate-400" />
        <span>{text}</span>
    </div>
);

// --- Logic Helpers ---

export const getFilteredClothingOptions = (category: string, placement: string) => {
    const plac = placement as ClothingPlacement;
    let options: string[] = [];

    // Always include Unisex options
    if (UNISEX_CLOTHING[plac]) {
        options = [...options, ...UNISEX_CLOTHING[plac]!];
    }

    if (category === "Menswear") {
        if (MALE_CLOTHING[plac]) {
            options = [...options, ...MALE_CLOTHING[plac]!];
        }
    } else if (category === "Womenswear") {
        if (FEMALE_CLOTHING[plac]) {
            options = [...options, ...FEMALE_CLOTHING[plac]!];
        }
    } else if (category === "Unisex") {
        if (MALE_CLOTHING[plac]) options = [...options, ...MALE_CLOTHING[plac]!];
        if (FEMALE_CLOTHING[plac]) options = [...options, ...FEMALE_CLOTHING[plac]!];
    }

    // Deduplicate and sort
    return Array.from(new Set(options)).sort();
};

export const getFilteredFitOptions = (placement: string) => {
    const plac = placement as ClothingPlacement;
    return FITS_BY_PLACEMENT[plac] || ALL_FITS;
};

export const flattenObject = (obj: any, prefix = ''): Record<string, any> => {
  return Object.keys(obj).reduce((acc: any, k: string) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};
