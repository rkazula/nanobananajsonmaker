
import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { useIdealParametersPagination } from '../../hooks/useIdealParametersPagination';
import { RandomizerService } from '../../utils/RandomizerService';
import { Star, Check, Dice5, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

export const IdealParametersSection: React.FC<Props> = ({ form }) => {
    const { setValue } = form;
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [randomSummary, setRandomSummary] = useState<string | null>(null);
    const {
        currentPresets,
        currentPage,
        currentCategory,
        totalPages,
        categoryStats,
        goToNextPage,
        goToPreviousPage,
        selectCategory,
        goToNextCategory,
        goToPreviousCategory,
        currentCategoryIndex
    } = useIdealParametersPagination();

    // Helper to traverse and apply the partial preset object
    const applyPresetValues = (presetData: any) => {
        const traverseAndSet = (obj: any, path: string = "") => {
             Object.keys(obj).forEach(key => {
                 const currentPath = path ? `${path}.${key}` : key;
                 if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                     traverseAndSet(obj[key], currentPath);
                 } else {
                     setValue(currentPath as any, obj[key], { shouldDirty: true, shouldValidate: true });
                 }
             });
        };
        traverseAndSet(presetData);
    };

    const handleSelectPreset = (id: string, presetData: any) => {
        setSelectedId(id);
        applyPresetValues(presetData);
        setRandomSummary(null); // Clear random summary on clean select
    };

    const handleRandomizeWithPreset = (e: React.MouseEvent, id: string, presetData: any) => {
        e.stopPropagation(); // Prevent card click
        setSelectedId(id);

        // 1. Generate Random Context via Service
        const randomCtx = RandomizerService.generateContext();

        // 2. Apply Randoms to Form
        Object.entries(randomCtx).forEach(([key, value]) => {
            setValue(key as any, value, { shouldDirty: true });
        });

        // 3. Re-apply Preset (Forces the "Style" like lens/framing to overwrite randoms where necessary)
        applyPresetValues(presetData);

        // 4. Update UI to show feedback
        setRandomSummary(RandomizerService.getSummary(randomCtx));
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
             <div className="bg-gradient-to-r from-banana-100 to-white p-6 rounded-xl border border-banana-200 mb-6">
                <h2 className="text-xl font-bold text-banana-800 mb-2">Ideal Parameters & Presets</h2>
                <p className="text-sm text-banana-700">Select a professionally curated preset to configure the camera style. Use the <strong>Dice</strong> icon to keep the style but randomize the location, time, and mood.</p>
             </div>

             {/* Kategorie Navigation */}
             <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200">
                <button
                    onClick={goToPreviousCategory}
                    disabled={currentCategoryIndex === 0}
                    className="p-2 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Poprzednia kategoria"
                >
                    <ChevronLeft size={20} className="text-slate-600" />
                </button>

                <div className="flex-1 text-center">
                    <h3 className="text-sm font-bold text-slate-800">
                        Kategoria: <span className="text-banana-600">{currentCategory}</span>
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                        Strona {currentPage + 1} z {totalPages} • {currentPresets.length} presetów
                    </p>
                </div>

                <button
                    onClick={goToNextCategory}
                    disabled={currentCategoryIndex === categoryStats.length - 1}
                    className="p-2 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Następna kategoria"
                >
                    <ChevronRight size={20} className="text-slate-600" />
                </button>
             </div>

             {/* Mini kategorie - szybka nawigacja */}
             <div className="flex flex-wrap gap-2">
                {categoryStats.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => selectCategory(cat.name)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                            currentCategory === cat.name
                                ? 'bg-banana-600 text-white shadow-md'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                    >
                        {cat.name.substring(0, 15)}... ({cat.count})
                    </button>
                ))}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                {currentPresets.map((preset) => {
                    const isSelected = selectedId === preset.id;
                    return (
                        <div
                            key={preset.id}
                            onClick={() => handleSelectPreset(preset.id, preset.data)}
                            className={`flex flex-col text-left p-4 border rounded-xl transition-all group relative cursor-pointer ${
                                isSelected 
                                ? 'bg-banana-50 border-banana-500 shadow-md ring-1 ring-banana-500' 
                                : 'bg-white border-slate-200 hover:border-banana-500 hover:shadow-md'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-2 pr-6">
                                 <span className={`p-2 rounded-lg transition-colors ${
                                     isSelected 
                                     ? 'bg-banana-200 text-banana-800' 
                                     : 'bg-slate-100 text-slate-600 group-hover:bg-banana-100 group-hover:text-banana-600'
                                 }`}>
                                    <Star size={18} className={isSelected ? "fill-banana-600" : ""} /> 
                                 </span>
                                 <span className={`font-bold text-sm ${isSelected ? 'text-banana-900' : 'text-slate-800'}`}>
                                    {preset.title}
                                 </span>
                            </div>
                            <p className={`text-xs line-clamp-2 mb-3 ${isSelected ? 'text-banana-800' : 'text-slate-500'}`}>
                                {preset.description}
                            </p>
                            
                            {/* Selected State Actions */}
                            {isSelected && (
                                <div className="mt-auto space-y-3">
                                    {/* Randomizer Feedback Box */}
                                    {randomSummary ? (
                                        <div className="text-[10px] bg-white/80 p-2 rounded border border-banana-200 text-banana-900 font-mono animate-in zoom-in duration-200 leading-tight">
                                            <span className="font-bold block mb-1">🎲 Generated Context:</span>
                                            {randomSummary}
                                        </div>
                                    ) : (
                                        <div className="h-[2px] bg-banana-200 w-full rounded-full opacity-50"></div>
                                    )}

                                    <div className="flex gap-2 relative">
                                        <div className="absolute -top-14 right-0 text-banana-600 bg-white rounded-full p-0.5 shadow-sm border border-banana-200 pointer-events-none">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={(e) => handleRandomizeWithPreset(e, preset.id, preset.data)}
                                            className="w-full py-2 bg-banana-600 hover:bg-banana-700 text-white text-xs font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
                                        >
                                            <Dice5 size={14} /> 
                                            {randomSummary ? "Re-Roll Context" : "Randomize Context"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
             </div>

             {/* Paginacja - Strony */}
             <div className="flex items-center justify-between gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-sm"
                >
                    <ChevronLeft size={18} /> Poprzednia
                </button>

                <div className="text-center">
                    <p className="text-sm font-semibold text-slate-800">
                        Strona <span className="text-banana-600">{currentPage + 1}</span> z <span className="text-banana-600">{totalPages}</span>
                    </p>
                </div>

                <button
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-banana-600 text-white rounded-lg hover:bg-banana-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-sm"
                >
                    Następna <ChevronRight size={18} />
                </button>
             </div>
        </div>
    );
};
