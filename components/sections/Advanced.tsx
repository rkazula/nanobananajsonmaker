
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { Toggle } from '../ui/FormComponents';
import { NEGATIVE_PROMPT_GROUPS } from '../../constants';
import { ShieldAlert, CheckSquare2, Square, X, Plus } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const NegativePromptManager = ({ form }: { form: UseFormReturn<NanoBananaType> }) => {
    const { control, setValue } = form;
    const currentNegatives: string[] = useWatch({ control, name: 'advanced.negative_prompt' }) || [];

    const toggleItem = (item: string) => {
        if (currentNegatives.includes(item)) {
            setValue('advanced.negative_prompt', currentNegatives.filter(i => i !== item), { shouldDirty: true });
        } else {
            setValue('advanced.negative_prompt', [...currentNegatives, item], { shouldDirty: true });
        }
    };

    const toggleGroup = (groupItems: string[]) => {
        const allSelected = groupItems.every(item => currentNegatives.includes(item));
        if (allSelected) {
            // Deselect all in group
            setValue('advanced.negative_prompt', currentNegatives.filter(i => !groupItems.includes(i)), { shouldDirty: true });
        } else {
            // Select all in group (merge unique)
            const set = new Set([...currentNegatives, ...groupItems]);
            setValue('advanced.negative_prompt', Array.from(set), { shouldDirty: true });
        }
    };

    const toggleAll = () => {
        const allPossible = Object.values(NEGATIVE_PROMPT_GROUPS).flat();
        const allSelected = allPossible.every(item => currentNegatives.includes(item));
        
        if (allSelected) {
            setValue('advanced.negative_prompt', [], { shouldDirty: true });
        } else {
            setValue('advanced.negative_prompt', allPossible, { shouldDirty: true });
        }
    };

    const allPossibleCount = Object.values(NEGATIVE_PROMPT_GROUPS).reduce((acc, val) => acc + val.length, 0);
    const isAllSelected = currentNegatives.length >= allPossibleCount && allPossibleCount > 0;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-700">Elements to Avoid</label>
                <button 
                    type="button"
                    onClick={toggleAll}
                    className={`text-xs px-3 py-1 rounded font-bold transition-colors ${isAllSelected ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                    {isAllSelected ? "Deselect All" : "Select All Available"}
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                {Object.entries(NEGATIVE_PROMPT_GROUPS).map(([category, items]) => {
                    const groupSelectedCount = items.filter(i => currentNegatives.includes(i)).length;
                    const isGroupAll = groupSelectedCount === items.length;
                    const isGroupPartial = groupSelectedCount > 0 && !isGroupAll;

                    return (
                        <div key={category} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50">
                            <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b border-slate-200">
                                <span className="font-bold text-xs uppercase text-slate-600 tracking-wide">{category}</span>
                                <button
                                    type="button"
                                    onClick={() => toggleGroup(items)}
                                    className="flex items-center gap-1.5 text-[10px] font-bold text-banana-600 hover:text-banana-700 hover:bg-banana-50 px-2 py-1 rounded transition-colors"
                                >
                                    {isGroupAll ? <CheckSquare2 size={12} /> : isGroupPartial ? <Square size={12} className="fill-banana-400 text-banana-600" /> : <Square size={12} />}
                                    {isGroupAll ? "Uncheck Group" : "Check Group"}
                                </button>
                            </div>
                            <div className="p-3 flex flex-wrap gap-2">
                                {items.map(item => {
                                    const isSelected = currentNegatives.includes(item);
                                    return (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => toggleItem(item)}
                                            className={`text-xs px-2.5 py-1.5 rounded-md border transition-all flex items-center gap-1.5 ${
                                                isSelected 
                                                ? 'bg-red-50 border-red-200 text-red-700 font-medium shadow-sm' 
                                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                            }`}
                                        >
                                            {isSelected ? <X size={10} /> : <Plus size={10} />}
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-xs text-slate-400 text-right">
                {currentNegatives.length} negative prompts active
            </div>
        </div>
    );
};

export const AdvancedSection: React.FC<Props> = ({ form }) => {
    const { register } = form;
    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Advanced Constraints & Safety</h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold"><ShieldAlert size={20} className="text-red-500" /> Negative Prompts</div>
                 
                 <NegativePromptManager form={form} />

                 <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Toggle label="Magic Prompt Enhancer (Auto-Detail)" registration={register('advanced.magic_prompt_enhancer')} description="Allow the model to hallucinate extra details for better aesthetics." />
                    <div className="space-y-2">
                        <Toggle label="Safety: No Minors" registration={register('advanced.safety_constraints.no_minors')} />
                        <Toggle label="Safety: No Nudity" registration={register('advanced.safety_constraints.no_nudity')} />
                        <Toggle label="Safety: No Explicit Sexual Content" registration={register('advanced.safety_constraints.no_explicit_sexual_content')} />
                        <Toggle label="Safety: No Text/Logos" registration={register('advanced.safety_constraints.no_text_logos')} />
                    </div>
                 </div>
            </div>
        </div>
    );
};
