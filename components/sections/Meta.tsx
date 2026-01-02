
import React, { useEffect } from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { TextInput, Select, MultiSelect, Toggle } from '../ui/FormComponents';
import { 
    QUALITY_MODES, QUALITY_MODES_DATA, FILM_STOCKS, FILM_STOCKS_DATA, FILM_STOCK_DEFAULTS, TONES,
    GRAIN_AMOUNTS, GRAIN_AMOUNTS_DATA, ISO_VALUES, ISO_VALUES_DATA,
    IMPERFECTION_PRESETS, IMPERFECTION_DETAILS,
    PRO_APARATY_TOP50, TELEFONY_FOTO_PRO_TOP15, KAMERY_SPORTOWE_TOP20, DRONY_FOTO_PRO_TOP15, KOMPAKTY_PREMIUM_TOP10, OverlayDeviceProfile
} from '../../dictionaries';
import { Wand2, Image, Film, Activity, Sparkles, Camera, Sliders, Info } from 'lucide-react';
import { FieldInfo } from './common';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const ProjectNameGenerator = ({ form }: { form: UseFormReturn<NanoBananaType> }) => {
    const { setValue, watch, register } = form;
    const subjectDesc = watch('subject.0.description');
    const location = watch('scene.location');
    const time = watch('scene.time');
    const lighting = watch('lighting.type');
    const camera = watch('meta.camera.camera_model');
    const film = watch('meta.film_stock_emulation.film_stock');

    useEffect(() => {
        const sanitize = (str: string | undefined, maxLen: number = 15) => {
            if (!str) return 'unknown';
            let clean = str.replace(/[\u{1F600}-\u{1F6FF}]/gu, '')
                           .replace(/[^a-zA-Z0-9 ]/g, '')
                           .trim()
                           .replace(/\s+/g, '_')
                           .toLowerCase();
            return clean.substring(0, maxLen) || 'unknown';
        };

        const subjectPart = subjectDesc ? sanitize(subjectDesc.split(',')[0].split(' ').slice(0, 2).join(' ')) : 'subject';
        const locationPart = sanitize(location);
        const timePart = sanitize(time);
        const lightingPart = sanitize(lighting);
        const cameraPart = sanitize(camera);
        const filmPart = sanitize(film);

        const autoName = `${subjectPart}__${locationPart}__${timePart}__${lightingPart}__${cameraPart}__${filmPart}__v01`;

        setValue('meta.project_name', autoName, { shouldDirty: true });

    }, [subjectDesc, location, time, lighting, camera, film, setValue]);

    return (
        <div className="bg-slate-100 p-3 rounded-md border border-slate-200 text-xs text-slate-500 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Wand2 size={14} className="text-banana-500 animate-pulse" />
                <span>Project Name is auto-generated based on scene context.</span>
            </div>
            
            {/* Integrated Film Grain Toggle in the Header */}
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                <span className="font-bold text-slate-700 whitespace-nowrap">Enable Film Grain</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" {...register('meta.film_grain.enabled')} className="sr-only peer" />
                    <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-banana-500"></div>
                </label>
            </div>
        </div>
    );
};

const CameraGearManager = ({ form }: { form: UseFormReturn<NanoBananaType> }) => {
    const { register, setValue, watch } = form;
    const selectedDeviceName = watch('meta.camera_gear.device_name');
    const selectedNotes = watch('meta.camera_gear.notes');
    const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        if (!val) return;
        let profile: OverlayDeviceProfile | undefined;
        // Search across all profile lists
        profile = PRO_APARATY_TOP50.find(p => p.name === val) || 
                  TELEFONY_FOTO_PRO_TOP15.find(p => p.name === val) || 
                  KAMERY_SPORTOWE_TOP20.find(p => p.name === val) ||
                  DRONY_FOTO_PRO_TOP15.find(p => p.name === val) ||
                  KOMPAKTY_PREMIUM_TOP10.find(p => p.name === val);

        if (profile) {
            setValue('meta.camera_gear.device_name', profile.name, { shouldDirty: true });
            setValue('meta.camera_gear.notes', profile.notes, { shouldDirty: true });
            Object.entries(profile.tuning).forEach(([key, value]) => { setValue(`meta.camera_gear.tuning.${key}` as any, value, { shouldDirty: true }); });
        }
    };
    return (
        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold text-lg border-b border-slate-200 pb-2"><Camera size={20} className="text-banana-600" /><h3>Camera Gear & Tuning</h3></div>
            <div className="mb-6"><label className="block text-sm font-semibold text-slate-700 mb-1">Select Preset Device</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-banana-500" onChange={handlePresetChange} value={selectedDeviceName}>
                <option value="" disabled>-- Choose a Camera Profile --</option>
                <optgroup label="Professional Cameras (Top 50)">{PRO_APARATY_TOP50.map(c => <option key={c.name} value={c.name}>{c.brand} - {c.name}</option>)}</optgroup>
                <optgroup label="Pro Smartphones (Top 15)">{TELEFONY_FOTO_PRO_TOP15.map(c => <option key={c.name} value={c.name}>{c.brand} - {c.name}</option>)}</optgroup>
                <optgroup label="Action Cameras (Top 20)">{KAMERY_SPORTOWE_TOP20.map(c => <option key={c.name} value={c.name}>{c.brand} - {c.name}</option>)}</optgroup>
                <optgroup label="Pro Drones (Top 15)">{DRONY_FOTO_PRO_TOP15.map(c => <option key={c.name} value={c.name}>{c.brand} - {c.name}</option>)}</optgroup>
                <optgroup label="Premium Compacts (Top 10)">{KOMPAKTY_PREMIUM_TOP10.map(c => <option key={c.name} value={c.name}>{c.brand} - {c.name}</option>)}</optgroup>
            </select>
            {selectedNotes && <FieldInfo icon={Info} text={`Profile Note: ${selectedNotes}`} />}</div>
            <div className="bg-white p-4 rounded-lg border border-slate-200"><div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wide"><Sliders size={14} /> Fine Tuning (Auto-filled)</div><div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6"><div className="space-y-3 border-r border-slate-100 pr-2"><span className="text-[10px] font-bold text-banana-600 uppercase">Optics / Geometry</span><TextInput label="De-Fisheye" type="number" registration={register('meta.camera_gear.tuning.deFisheye', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Distortion Fix" type="number" registration={register('meta.camera_gear.tuning.distortionCorrection', { valueAsNumber: true })} className="h-8 text-xs" /><Toggle label="Horizon Lock" registration={register('meta.camera_gear.tuning.horizonLock')} /></div><div className="space-y-3 border-r border-slate-100 pr-2"><span className="text-[10px] font-bold text-banana-600 uppercase">Detail & Sharpness</span><TextInput label="Sharpening" type="number" registration={register('meta.camera_gear.tuning.sharpening', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Micro Contrast" type="number" registration={register('meta.camera_gear.tuning.microContrast', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Noise Reduction" type="number" registration={register('meta.camera_gear.tuning.noiseReduction', { valueAsNumber: true })} className="h-8 text-xs" /></div><div className="space-y-3 border-r border-slate-100 pr-2"><span className="text-[10px] font-bold text-banana-600 uppercase">Tone & DR</span><TextInput label="Highlight Rec." type="number" registration={register('meta.camera_gear.tuning.highlightRecovery', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Shadow Lift" type="number" registration={register('meta.camera_gear.tuning.shadowLift', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="HDR Compress" type="number" registration={register('meta.camera_gear.tuning.hdrCompression', { valueAsNumber: true })} className="h-8 text-xs" /></div><div className="space-y-3"><span className="text-[10px] font-bold text-banana-600 uppercase">Color & Motion</span><TextInput label="Saturation" type="number" registration={register('meta.camera_gear.tuning.saturation', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="WB Bias (K)" type="number" registration={register('meta.camera_gear.tuning.whiteBalanceBiasK', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Skin Protect" type="number" registration={register('meta.camera_gear.tuning.skinToneProtect', { valueAsNumber: true })} className="h-8 text-xs" /><TextInput label="Stabilization" type="number" registration={register('meta.camera_gear.tuning.stabilizationAssist', { valueAsNumber: true })} className="h-8 text-xs" /></div></div></div>
        </div>
    );
};

export const MetaSection: React.FC<Props> = ({ form }) => {
    const { register, control, watch, setValue } = form;
    
    // Lookups
    const selectedFilmStock = watch('meta.film_stock_emulation.film_stock');
    const filmDesc = FILM_STOCKS_DATA.find(f => f.value === selectedFilmStock)?.desc;

    const selectedQuality = watch('meta.quality_mode');
    const qualityDesc = QUALITY_MODES_DATA.find(q => q.value === selectedQuality)?.desc;

    const selectedGrain = watch('meta.film_grain.amount');
    const grainDesc = GRAIN_AMOUNTS_DATA.find(g => g.value === selectedGrain)?.desc;

    const selectedIso = watch('meta.film_grain.iso_emulation');
    const isoDesc = ISO_VALUES_DATA.find(i => i.value === selectedIso)?.desc;

    useEffect(() => {
        const defaults = FILM_STOCK_DEFAULTS[selectedFilmStock];
        if (defaults) {
            setValue('meta.film_grain.iso_emulation', defaults.iso as any, { shouldDirty: true });
            setValue('meta.film_grain.amount', defaults.grain as any, { shouldDirty: true });
        }
    }, [selectedFilmStock, setValue]);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Meta & Film Look</h2>
            <ProjectNameGenerator form={form} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <TextInput label="Project Name (Auto-Generated)" registration={register('meta.project_name')} readOnly className="bg-slate-50 text-slate-500 font-mono text-xs cursor-not-allowed" />
                <div>
                    <Select label="Quality Mode" options={QUALITY_MODES} registration={register('meta.quality_mode')} />
                    {qualityDesc && <FieldInfo icon={Image} text={qualityDesc} />}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                    <Select label="Film Stock" options={FILM_STOCKS} registration={register('meta.film_stock_emulation.film_stock')} />
                    {filmDesc && <FieldInfo icon={Film} text={filmDesc} />}
                </div>
                <Controller
                    control={control}
                    name="meta.film_stock_emulation.tone"
                    render={({ field }) => (
                        <MultiSelect label="Tone (Max 5)" options={TONES} value={typeof field.value === 'string' ? [field.value] : field.value} onChange={field.onChange} maxSelections={5} placeholder="Select tonal qualities..." />
                    )}
                />
            </div>
            <CameraGearManager form={form} />
            <div className="mt-8 p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-4">
                    <h3 className="font-bold text-banana-700 flex items-center gap-2"><Activity size={18}/> Film Grain & Imperfections</h3>
                    <span className="text-[10px] text-slate-400 italic">ISO & Grain auto-tune to Stock</span>
                </div>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                            <Select label="Grain Amount" options={GRAIN_AMOUNTS} registration={register('meta.film_grain.amount')} />
                            {grainDesc && <FieldInfo icon={Sparkles} text={grainDesc} />}
                        </div>
                        <div>
                            <Select label="ISO Emulation" options={ISO_VALUES} registration={register('meta.film_grain.iso_emulation')} />
                            {isoDesc && <FieldInfo icon={Camera} text={isoDesc} />}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><Select label="Imperfections Preset" options={IMPERFECTION_PRESETS} registration={register('meta.film_grain.imperfection_preset')} /><Controller control={control} name="meta.film_grain.imperfection_details" render={({ field }) => (<MultiSelect label="Specific Imperfections (Max 5)" options={IMPERFECTION_DETAILS} value={field.value || []} onChange={field.onChange} maxSelections={5} placeholder="Add artifacts like bloom, dust..." />)} /></div>
                </div>
            </div>
             <div className="mt-6"><TextInput label="Seed (-1 for random)" type="number" registration={register('meta.seed', { valueAsNumber: true })} /></div>
        </div>
    );
};
