
import React from 'react';
import { UseFormReturn, useFieldArray, Controller } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { Select, Combobox, ColorSelect } from '../ui/FormComponents';
import { 
    WARDROBE_PRESETS, CLOTHING_PLACEMENTS, FABRICS, COLORS, CLOTHING_COVERAGE,
    ACCESSORIES, MATERIALS, CLOTHING_PATTERNS
} from '../../constants';
import { Shirt, UserSquare2, UserCircle2, Users2, Trash2, Plus } from 'lucide-react';
import { getFilteredClothingOptions, getFilteredFitOptions } from './common';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const ClothingManager = ({ form, subjectIndex }: { form: UseFormReturn<NanoBananaType>, subjectIndex: number }) => {
    const { control, register, watch } = form;
    const { fields, append, remove, replace } = useFieldArray({ control, name: `subject.${subjectIndex}.clothing` });

    const applyPreset = (presetName: string) => {
        const preset = WARDROBE_PRESETS[presetName as keyof typeof WARDROBE_PRESETS];
        if (preset) {
            replace(preset as any);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-semibold text-slate-700">Clothing Layers</label>
                <select 
                    className="text-xs border border-slate-300 rounded p-1.5 bg-slate-50 text-slate-600 focus:ring-2 focus:ring-banana-500 outline-none"
                    onChange={(e) => applyPreset(e.target.value)}
                    defaultValue=""
                >
                    <option value="" disabled>-- Apply Outfit Preset --</option>
                    {Object.keys(WARDROBE_PRESETS).map(k => <option key={k} value={k}>{k}</option>)}
                </select>
            </div>
            
            <div className="space-y-4">
                {fields.map((item, k) => {
                    // Watch fields for dynamic filtering
                    const currentCategory = watch(`subject.${subjectIndex}.clothing.${k}.category`) || "Unisex";
                    const currentPlacement = watch(`subject.${subjectIndex}.clothing.${k}.placement`) || "Upper Body";
                    
                    const availableItems = getFilteredClothingOptions(currentCategory, currentPlacement);
                    const availableFits = getFilteredFitOptions(currentPlacement);

                    return (
                        <div key={item.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                             {/* Header Row: Category Selector */}
                             <div className="flex items-center gap-4 mb-3 pb-3 border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Layer {k + 1}</span>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <div className="flex bg-white rounded-md border border-slate-300 p-0.5">
                                        {(["Menswear", "Womenswear", "Unisex"] as const).map(cat => (
                                            <label key={cat} className={`cursor-pointer px-3 py-1 text-xs font-bold rounded flex items-center gap-1 transition-colors ${currentCategory === cat ? 'bg-banana-100 text-banana-800 ring-1 ring-banana-300' : 'text-slate-500 hover:bg-slate-100'}`}>
                                                <input 
                                                    type="radio" 
                                                    value={cat} 
                                                    {...register(`subject.${subjectIndex}.clothing.${k}.category`)} 
                                                    className="sr-only" 
                                                />
                                                {cat === "Menswear" ? <UserSquare2 size={12}/> : cat === "Womenswear" ? <UserCircle2 size={12}/> : <Users2 size={12}/>}
                                                {cat}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                             </div>

                             {/* Details Grid */}
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                                {/* ROW 1: Placement(2) | Item(4) | Fit(3) | Pattern(3) */}
                                <div className="md:col-span-2">
                                    <Select 
                                        label="Placement" 
                                        options={CLOTHING_PLACEMENTS} 
                                        registration={register(`subject.${subjectIndex}.clothing.${k}.placement`)}
                                        className="h-[38px]" 
                                    />
                                </div>
                                <div className="md:col-span-4">
                                    <Controller
                                        control={control}
                                        name={`subject.${subjectIndex}.clothing.${k}.item`}
                                        render={({ field }) => (
                                            <Combobox
                                                label={`Item (${availableItems.length})`}
                                                options={availableItems}
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder={availableItems.length > 0 ? "Select or type..." : "No items found"}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <Controller
                                        control={control}
                                        name={`subject.${subjectIndex}.clothing.${k}.fit`}
                                        render={({ field }) => (
                                            <Combobox
                                                label="Silhouette / Fit"
                                                options={availableFits}
                                                value={field.value || ""}
                                                onChange={field.onChange}
                                                placeholder="e.g. Oversized..."
                                            />
                                        )}
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <Controller
                                        control={control}
                                        name={`subject.${subjectIndex}.clothing.${k}.pattern`}
                                        render={({ field }) => (
                                            <Combobox
                                                label="Pattern"
                                                options={CLOTHING_PATTERNS}
                                                value={field.value || ""}
                                                onChange={field.onChange}
                                                placeholder="e.g. Striped"
                                            />
                                        )}
                                    />
                                </div>

                                {/* ROW 2: Material(3) | Color(3) | Coverage(3) | Remove(3) */}
                                <div className="md:col-span-3">
                                    <Controller
                                        control={control}
                                        name={`subject.${subjectIndex}.clothing.${k}.fabric`}
                                        render={({ field }) => (
                                            <Combobox
                                                label="Material"
                                                options={FABRICS}
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder="e.g. Cotton"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <Controller
                                        control={control}
                                        name={`subject.${subjectIndex}.clothing.${k}.color`}
                                        render={({ field }) => (
                                            <ColorSelect 
                                                label="Color" 
                                                options={COLORS} 
                                                value={field.value} 
                                                onChange={field.onChange} 
                                            />
                                        )}
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <Select label="Coverage" options={CLOTHING_COVERAGE} registration={register(`subject.${subjectIndex}.clothing.${k}.coverage`)} className="h-[38px]" />
                                </div>
                                <div className="md:col-span-3 flex justify-end items-end h-[62px] pb-1">
                                     <button type="button" onClick={() => remove(k)} className="w-full flex items-center justify-center gap-1 px-3 py-2 text-red-500 hover:text-white hover:bg-red-500 bg-red-50 rounded transition-colors text-xs font-bold" title="Remove Layer">
                                        <Trash2 size={14} /> Remove Layer
                                     </button>
                                </div>
                             </div>
                        </div>
                    );
                })}
            </div>

            <button type="button" onClick={() => append({ category: "Unisex", item: "", fit: "", pattern: "", color: "White", fabric: "", placement: "Upper Body", coverage: "Full Coverage" })} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-sm font-bold text-slate-500 hover:border-banana-400 hover:text-banana-600 hover:bg-banana-50 transition-all flex items-center justify-center gap-2 mt-4">
                <Plus size={16} /> Add Clothing Layer
            </button>
        </div>
    );
};

const AccessoriesManager = ({ form, subjectIndex }: { form: UseFormReturn<NanoBananaType>, subjectIndex: number }) => {
    const { control, register } = form;
    const { fields, append, remove } = useFieldArray({ control, name: `subject.${subjectIndex}.accessories` });
     return (
        <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700">Accessories & Details</label>
            <div className="space-y-2">
                {fields.map((item, k) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-10 gap-2 items-start bg-slate-50 p-3 rounded-lg border border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                        <div className="md:col-span-4">
                            <Controller
                                control={control}
                                name={`subject.${subjectIndex}.accessories.${k}.item`}
                                render={({ field }) => (
                                    <Combobox 
                                        label="Item" 
                                        options={ACCESSORIES}
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Type or select..."
                                    /> 
                                )}
                            />
                        </div>
                        <div className="md:col-span-3">
                            <Controller
                                control={control}
                                name={`subject.${subjectIndex}.accessories.${k}.material`}
                                render={({ field }) => (
                                    <Combobox 
                                        label="Material" 
                                        options={[...FABRICS, ...MATERIALS].sort()}
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        placeholder="e.g. Gold, Leather..."
                                    /> 
                                )}
                            />
                        </div>
                        <div className="md:col-span-2">
                             <Controller
                                control={control}
                                name={`subject.${subjectIndex}.accessories.${k}.color`}
                                render={({ field }) => (
                                    <ColorSelect 
                                        label="Color" 
                                        options={COLORS} 
                                        value={field.value || ""} 
                                        onChange={field.onChange} 
                                    />
                                )}
                            />
                        </div>
                        <div className="md:col-span-1 flex items-end justify-center h-full pb-1">
                            <button type="button" onClick={() => remove(k)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Remove Accessory"><Trash2 size={18} /></button>
                        </div>
                    </div>
                ))}
            </div>
            <button type="button" onClick={() => append({ item: "Necklace", material: "", color: "Gold" })} className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:border-banana-400 hover:text-banana-600 hover:bg-banana-50 transition-all flex items-center justify-center gap-2">
                <Plus size={14} /> Add Accessory
            </button>
        </div>
    );
}

export const WardrobeSection: React.FC<Props> = ({ form }) => {
    const { control } = form;
    const { fields } = useFieldArray({ control, name: "subject" });

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Wardrobe & Styling</h2>
            <div className="space-y-8">
                 {fields.map((field, subjectIndex) => (
                    <div key={field.id} className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
                        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                            <Shirt className="text-banana-600" /> Wardrobe for Subject #{subjectIndex + 1}
                        </h3>
                        <ClothingManager form={form} subjectIndex={subjectIndex} />
                        <div className="mt-6 pt-6 border-t border-slate-100">
                             <AccessoriesManager form={form} subjectIndex={subjectIndex} />
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    );
};
