
import React, { useEffect } from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { TextInput, TextArea, Select, MultiSelect } from '../ui/FormComponents';
import { 
    SCENES, ATMOSPHERES, TIMES_OF_DAY, 
    INTERIOR_STYLES, MATERIALS, CLUTTER_LEVELS, LAYOUT_STYLES, MICRO_DETAILS, PROPS, 
    WEATHER_CONDITIONS, OUTDOOR_TERRAINS, OUTDOOR_ELEMENTS
} from '../../constants';
import { Sofa, Trees, CloudRain, MapPin } from 'lucide-react';
import { FieldInfo } from './common';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const SetDressingBuilder = ({ form }: { form: UseFormReturn<NanoBananaType> }) => {
    const { control, register, setValue, watch } = form;
    const sceneType = watch('scene.set_dressing.scene_type');
    const style = watch('scene.set_dressing.interior_style');
    const materials = watch('scene.set_dressing.materials') || [];
    const props = watch('scene.set_dressing.props') || [];
    const clutter = watch('scene.set_dressing.clutter_level');
    const layout = watch('scene.set_dressing.layout') || [];
    const details = watch('scene.set_dressing.micro_details') || [];
    const weather = watch('scene.set_dressing.weather');
    const terrain = watch('scene.set_dressing.terrain');
    const outdoorElements = watch('scene.set_dressing.outdoor_elements') || [];

    useEffect(() => {
        const parts = [];
        if (sceneType === "Interior") {
            if (style) parts.push(`Interior Style: ${style}`);
            if (materials.length > 0) parts.push(`Materials: ${materials.join(', ')}`);
            if (props.length > 0) parts.push(`Props: ${props.join(', ')}`);
            if (layout.length > 0) parts.push(`Layout: ${layout.join(', ')}`);
            if (clutter) parts.push(`Clutter: ${clutter}`);
            if (details.length > 0) parts.push(`Details: ${details.join(', ')}`);
        } else {
            if (weather) parts.push(`Weather: ${weather}`);
            if (terrain) parts.push(`Terrain: ${terrain}`);
            if (outdoorElements.length > 0) parts.push(`Elements: ${outdoorElements.join(', ')}`);
            if (clutter) parts.push(`Debris Level: ${clutter}`);
        }
        const assembled = parts.join(' → ');
        setValue('scene.set_dressing.assembled_prompt', assembled, { shouldDirty: true });
    }, [
        sceneType, 
        style, JSON.stringify(materials), JSON.stringify(props), clutter, JSON.stringify(layout), JSON.stringify(details), 
        weather, terrain, JSON.stringify(outdoorElements),
        setValue
    ]);

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {sceneType === "Interior" ? <Sofa size={18} className="text-banana-600" /> : <Trees size={18} className="text-green-600" />}
                    <h3 className="font-bold text-slate-800">Set Dressing & World Details</h3>
                </div>
                <div className="flex bg-slate-200 p-1 rounded-lg">
                    <button type="button" onClick={() => setValue('scene.set_dressing.scene_type', 'Interior', { shouldDirty: true })} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${sceneType === 'Interior' ? 'bg-white text-banana-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Interior</button>
                    <button type="button" onClick={() => setValue('scene.set_dressing.scene_type', 'Outdoor', { shouldDirty: true })} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${sceneType === 'Outdoor' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Outdoor</button>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {sceneType === "Interior" ? (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><Select label="1) Interior Style" options={INTERIOR_STYLES} registration={register('scene.set_dressing.interior_style')} /><Select label="4) Clutter Level" options={CLUTTER_LEVELS} registration={register('scene.set_dressing.clutter_level')} /></div>
                        <Controller control={control} name="scene.set_dressing.materials" render={({ field }) => (<MultiSelect label="2) Materials & Finishes" options={MATERIALS} value={field.value} onChange={field.onChange} maxSelections={5} />)} />
                        <Controller control={control} name="scene.set_dressing.props" render={({ field }) => (<MultiSelect label="3) Props & Objects" options={PROPS} value={field.value} onChange={field.onChange} maxSelections={10} />)} />
                        <Controller control={control} name="scene.set_dressing.layout" render={({ field }) => (<MultiSelect label="5) Layout & Composition" options={LAYOUT_STYLES} value={field.value} onChange={field.onChange} maxSelections={3} />)} />
                        <Controller control={control} name="scene.set_dressing.micro_details" render={({ field }) => (<MultiSelect label="6) 'Lived-in' Micro-details" options={MICRO_DETAILS} value={field.value} onChange={field.onChange} maxSelections={5} />)} />
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><Select label="1) Weather Conditions" options={WEATHER_CONDITIONS} registration={register('scene.set_dressing.weather')} /><FieldInfo icon={CloudRain} text="Sets the atmospheric mood and lighting basis for outdoors." /></div><div><Select label="2) Terrain / Setting" options={OUTDOOR_TERRAINS} registration={register('scene.set_dressing.terrain')} /><FieldInfo icon={MapPin} text="The foundational ground or environment type." /></div></div>
                        <Controller control={control} name="scene.set_dressing.outdoor_elements" render={({ field }) => (<MultiSelect label="3) Natural Elements & Flora" options={OUTDOOR_ELEMENTS} value={field.value} onChange={field.onChange} maxSelections={5} />)} />
                        <Select label="4) Debris / Clutter Level" options={CLUTTER_LEVELS} registration={register('scene.set_dressing.clutter_level')} description="How messy is the street/nature? (Leaves, trash, rocks)" />
                    </div>
                )}
                <div className="pt-4 border-t border-slate-100"><TextArea label="Final Set Dressing Prompt (Auto-Assembled)" registration={register('scene.set_dressing.assembled_prompt')} setValue={setValue} rows={3} readOnly className="bg-slate-50 text-slate-500 font-mono text-xs cursor-not-allowed" /></div>
            </div>
        </div>
    );
};

export const SceneSection: React.FC<Props> = ({ form }) => {
    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Scene & Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInput label="Location" registration={form.register('scene.location')} />
                <Select label="Time of Day" options={TIMES_OF_DAY} registration={form.register('scene.time')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Controller control={form.control} name="scene.atmosphere" render={({ field }) => (<MultiSelect label="Atmosphere" options={ATMOSPHERES} value={field.value} onChange={field.onChange} maxSelections={3} />)} />
                 <Controller control={form.control} name="scene.environment" render={({ field }) => (<MultiSelect label="Environment Details" options={SCENES} value={field.value} onChange={field.onChange} maxSelections={3} />)} />
            </div>
            <SetDressingBuilder form={form} />
        </div>
    );
};
