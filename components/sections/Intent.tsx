
import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { TextArea, MultiSelect } from '../ui/FormComponents';
import { 
    SCENES, SCENE_STYLES, CONTEXT_ERAS, CONTEXT_CULTURES,
    NAKLADKA_STYLISTYCZNA_OPTIONS, NAKLADKA_STYLISTYCZNA_FILMY_TOP300,
    NAKLADKA_STYLISTYCZNA_FILMY_TOP300_DATA
} from '../../dictionaries';
import { MapPin, Plus, Film } from 'lucide-react';
import { FieldInfo } from './common';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const BackgroundBuilder = ({ form }: { form: UseFormReturn<NanoBananaType> }) => {
    const [scene, setScene] = useState<string[]>([]);
    const [style, setStyle] = useState<string[]>([]);
    const [era, setEra] = useState("");
    const [culture, setCulture] = useState<string[]>([]);
    const [overlay, setOverlay] = useState(""); 
    const [filmOverlay, setFilmOverlay] = useState(""); 
    const { setValue, getValues } = form;

    // Handler to sync Section 1 Scenery selection directly to Section 4 (Scene -> Environment)
    const handleSceneryChange = (selectedScenes: string[]) => {
        setScene(selectedScenes);
        // Auto-fill Section 4: Scene -> Environment Details
        setValue('scene.environment', selectedScenes, { shouldDirty: true });
    };

    const generateBackground = () => {
        if (scene.length === 0 && style.length === 0 && !era && culture.length === 0 && !overlay && !filmOverlay) return;
        const parts = []; parts.push("Set in a");
        if (era) parts.push(era); if (culture.length > 0) parts.push(culture.join(" / ")); if (scene.length > 0) parts.push(scene.join(", "));
        const suffixParts = []; if (style.length > 0) suffixParts.push(`with a ${style.join(" and ")} aesthetic`);
        let finalString = parts.join(" "); if (suffixParts.length > 0) { finalString += `, ${suffixParts.join(" ")}.`; } else { finalString += "."; }
        if (overlay) { finalString += ` Game Style Overlay: ${overlay}.`; } if (filmOverlay) { finalString += ` Cinematic Style Overlay: ${filmOverlay}.`; }
        const current = getValues("user_intent"); const separator = current.trim().length > 0 ? " " : ""; setValue("user_intent", current + separator + finalString, { shouldDirty: true });
        const locationParts = [era, ...culture, ...scene].filter(Boolean); if (locationParts.length > 0) { const locationString = locationParts.join(", "); setValue("scene.location", locationString, { shouldDirty: true }); }
    };

    // Find the description for the currently selected Film Overlay
    const selectedFilmOverlayData = NAKLADKA_STYLISTYCZNA_FILMY_TOP300_DATA.find(f => f.value === filmOverlay);

    return (
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 shadow-sm mb-6 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold text-sm uppercase tracking-wide border-b border-slate-200 pb-2"><MapPin size={16} className="text-banana-600" /> Background & Context Builder</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                 <div className="col-span-1 lg:col-span-2"><MultiSelect label="Scenery (Max 3)" options={SCENES} value={scene} onChange={handleSceneryChange} maxSelections={3} placeholder="Select up to 3 scenes..." /></div>
                <div className="col-span-1 lg:col-span-2"><MultiSelect label="Style / Mood (Max 5)" options={SCENE_STYLES} value={style} onChange={setStyle} maxSelections={5} placeholder="Select up to 5 styles..." /></div>
                <div><label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Era / Time</label><select className="w-full p-2 rounded border border-slate-300 text-sm text-slate-700 bg-white focus:ring-2 focus:ring-banana-500 focus:outline-none min-h-[38px]" onChange={e => setEra(e.target.value)} value={era}><option value="">-- Select Era --</option>{CONTEXT_ERAS.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><MultiSelect label="Culture / Context (Max 3)" options={CONTEXT_CULTURES} value={culture} onChange={setCulture} maxSelections={3} placeholder="Select context..." /></div>
                 <div className="col-span-1 md:col-span-2"><label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Game Style Overlay</label><select className="w-full p-2 rounded border border-slate-300 text-sm text-slate-700 bg-white focus:ring-2 focus:ring-banana-500 focus:outline-none min-h-[38px]" onChange={e => setOverlay(e.target.value)} value={overlay}><option value="">-- Select Game Style --</option>{NAKLADKA_STYLISTYCZNA_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                <div className="col-span-1 md:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Cinematic Style Overlay</label>
                    <select className="w-full p-2 rounded border border-slate-300 text-sm text-slate-700 bg-white focus:ring-2 focus:ring-banana-500 focus:outline-none min-h-[38px]" onChange={e => setFilmOverlay(e.target.value)} value={filmOverlay}><option value="">-- Select Film Style --</option>{NAKLADKA_STYLISTYCZNA_FILMY_TOP300.map(s => <option key={s} value={s}>{s}</option>)}</select>
                    {selectedFilmOverlayData && (
                        <FieldInfo icon={Film} text={selectedFilmOverlayData.desc} />
                    )}
                </div>
            </div>
            <button type="button" onClick={generateBackground} className="w-full py-2.5 bg-slate-800 text-white text-xs font-bold rounded hover:bg-slate-700 transition-colors shadow-md active:scale-[0.99] flex items-center justify-center gap-2"><Plus size={14} /> Append to Intent & Update Location</button>
        </div>
    );
};

export const IntentSection: React.FC<Props> = ({ form }) => {
    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">User Intent & Prompt</h2>
            <BackgroundBuilder form={form} />
            <TextArea label="User Intent (Prompt)" registration={form.register('user_intent')} placeholder="Describe your image..." rows={6} className="text-base" />
        </div>
    );
};
