
import React, { useState, useEffect } from 'react';
import { UseFormReturn, useFieldArray, Controller, useWatch } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { TextInput, TextArea, Select, ColorSelect, MultiSelect, Slider } from '../ui/FormComponents';
import { 
    SUBJECT_COUNTS, SUBJECT_GROUPING, SUBJECT_ROLES, IDENTITY_LOCKS, CONSISTENCY_TAGS, AGE_RANGES,
    ETHNICITIES, BODY_TYPES, SKIN_TONES, SKIN_TONE_MAP, SKIN_QUALITIES,
    HAIR_COLORS, HAIR_COLORS_MAP, HAIR_STYLES, HAIR_LENGTHS, HAIR_STYLE_LENGTH_MAP, EYE_COLORS, EYE_COLOR_MAP, EYE_SHAPES,
    DISTINCT_FEATURES, TATTOO_PLACEMENTS, TATTOO_SIZES,
    POSE_TEMPLATES, POSE_BODY, POSE_SHOULDERS, POSE_HANDS, POSE_HEAD, POSE_GAZE, POSE_EXPRESSIONS, POSE_INTERACTIONS,
    NAIL_SHAPES, NAIL_LENGTHS, NAIL_FINISHES, NAIL_DESIGNS, NAIL_COLORS, NAIL_COLORS_MAP
} from '../../dictionaries';
import { User, Trash2, Palette, Wand2, Sparkles, Plus, Info } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

const PoseBuilder = ({ form, index }: { form: UseFormReturn<NanoBananaType>, index: number }) => {
    const [body, setBody] = useState(""); 
    const [shoulders, setShoulders] = useState(""); 
    const [hands, setHands] = useState(""); 
    const [head, setHead] = useState(""); 
    const [gaze, setGaze] = useState(""); 
    const [expr, setExpr] = useState(""); 
    const [interaction, setInteraction] = useState("");
    const [templateVal, setTemplateVal] = useState(""); // For controlled select reset

    const { setValue, register } = form;

    const buildPose = () => {
        const parts = [ 
            body ? `Body: ${body}` : "", 
            shoulders ? `Posture: ${shoulders}` : "", 
            hands ? `Hands: ${hands}` : "", 
            head ? `Head: ${head}` : "", 
            gaze ? `Gaze: ${gaze}` : "", 
            expr ? `Expression: ${expr}` : "", 
            interaction ? `Interaction: ${interaction}` : ""
        ].filter(Boolean);
        
        // Fix: Don't overwrite with empty string or garbage if user hasn't selected anything
        if (parts.length === 0) return;

        const finalString = parts.join(", ") + "."; 
        setValue(`subject.${index}.pose`, finalString, { shouldDirty: true, shouldValidate: true });
    };

    const applyTemplate = (templateString: string) => { 
        if (!templateString) return; 
        // Apply immediately
        setValue(`subject.${index}.pose`, templateString, { shouldDirty: true, shouldValidate: true });
        // Reset select to allow re-selecting the same option if needed
        setTemplateVal("");
    };

    return (
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mb-4">
            <div className="flex items-center gap-2 mb-4 text-banana-700 font-bold text-sm uppercase tracking-wide border-b pb-2"><Wand2 size={16} /> Pose Builder</div>
            
            <div className="mb-6 p-4 bg-banana-50 rounded-lg border border-banana-100">
                <div className="flex items-center gap-2 mb-2 text-banana-800 font-bold text-xs"><Sparkles size={14} /> <span>Rapid Pose Templates (Click to apply immediately)</span></div>
                <select 
                    className="w-full p-2 rounded border border-banana-200 text-sm text-slate-700 bg-white focus:ring-2 focus:ring-banana-500 focus:outline-none" 
                    onChange={(e) => applyTemplate(e.target.value)} 
                    value={templateVal}
                >
                    <option value="" disabled>-- Select a full pose template --</option>
                    {POSE_TEMPLATES.map(tmpl => (<option key={tmpl} value={tmpl}>{tmpl}</option>))}
                </select>
            </div>

            <div className="text-xs font-bold text-slate-500 mb-2 uppercase">Or build manually:</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <Select label="Body Orientation" options={POSE_BODY} value={body} onChange={(e) => setBody(e.target.value)} className="h-9 text-xs" />
                <Select label="Shoulders" options={POSE_SHOULDERS} value={shoulders} onChange={(e) => setShoulders(e.target.value)} className="h-9 text-xs" />
                <Select label="Hands" options={POSE_HANDS} value={hands} onChange={(e) => setHands(e.target.value)} className="h-9 text-xs" />
                <Select label="Head Angle" options={POSE_HEAD} value={head} onChange={(e) => setHead(e.target.value)} className="h-9 text-xs" />
                <Select label="Gaze" options={POSE_GAZE} value={gaze} onChange={(e) => setGaze(e.target.value)} className="h-9 text-xs" />
                <Select label="Expression" options={POSE_EXPRESSIONS} value={expr} onChange={(e) => setExpr(e.target.value)} className="h-9 text-xs" />
                <Select label="Interactions" options={POSE_INTERACTIONS} value={interaction} onChange={(e) => setInteraction(e.target.value)} className="h-9 text-xs" />
            </div>
            <button type="button" onClick={buildPose} className="w-full py-2.5 bg-slate-800 text-white text-xs font-bold rounded hover:bg-slate-700 transition-colors shadow-md active:scale-[0.99] mb-4">Generate from Manual Dropdowns</button>
            
            <TextArea 
                label="Current Pose Prompt" 
                registration={register(`subject.${index}.pose`)} 
                rows={2} 
                description="The active pose instruction that will be sent to the model."
            />
        </div>
    );
};

// Component to handle individual subject logic (Auto-description, etc.)
const SubjectCard = ({ form, index, remove }: { form: UseFormReturn<NanoBananaType>, index: number, remove: (index: number) => void }) => {
    const { control, register, setValue } = form;
    const [autoGenDesc, setAutoGenDesc] = useState(true);

    // Watch all fields for this subject
    const subjectData = useWatch({
        control,
        name: `subject.${index}`
    });

    useEffect(() => {
        if (!autoGenDesc || !subjectData || !subjectData.appearance) return;

        const app = subjectData.appearance;
        const clothes = subjectData.clothing || [];
        const accessories = subjectData.accessories || [];
        const pose = subjectData.pose;
        
        // Construct detailed description
        const parts = [];

        // 1. Core Demographics
        const ageId = subjectData.age_range || 'YOUNG_ADULT';
        const agePreset = AGE_RANGES.find(r => r.id === ageId);
        
        // Use prompt tags for the actual description
        const ageTags = agePreset ? agePreset.promptTags.join(", ") : "young adult";
        const core = `A ${ageTags} ${app.ethnicity || ''} ${app.gender || ''}, acting as ${subjectData.role || 'subject'}`;
        parts.push(core.replace(/\s+/g, ' ').trim());

        // 2. Physical Details & Biometrics (Integrated)
        const physical = [];
        if (app.body_type) physical.push(`${app.body_type} build`);
        
        // Merge skin quality and tone into one cohesive descriptor
        const skinDesc = [app.skin_quality, app.skin_tone].filter(Boolean).join(" ");
        if (skinDesc) physical.push(`${skinDesc} skin`);
        
        if (app.hair) {
            const parts = app.hair.split(" -> ");
            const hStyle = parts[0] || "";
            const hLength = parts[1] || "";
            const hColor = parts[2] || "";
            physical.push(`${hColor} ${hLength} ${hStyle} hair`.replace(/\s+/g, ' ').trim());
        }
        if (app.eyes) physical.push(`${app.eyes.color} ${app.eyes.shape} eyes`);
        
        if (physical.length > 0) parts.push(`Features: ${physical.join(', ')}.`);

        // 3. Clothing Summary (Updated with Pattern)
        if (clothes.length > 0) {
            const outfit = clothes.map(c => {
                // Construct string: "Color Pattern Fit Fabric Item" (e.g. Red Striped Loose Cotton T-Shirt)
                return `${c.color} ${c.pattern || ''} ${c.fit} ${c.fabric} ${c.item}`.replace(/\s+/g, ' ').trim();
            }).join(', ');
            parts.push(`Wearing: ${outfit}.`);
        }

        // 4. Accessories Summary
        if (accessories.length > 0) {
            const accList = accessories.map(a => `${a.color || ''} ${a.material || ''} ${a.item}`.replace(/\s+/g, ' ').trim()).join(', ');
            parts.push(`Accessories: ${accList}.`);
        }

        // 5. Pose integration (if present)
        if (pose) {
            parts.push(`Action/Pose: ${pose}`);
        }

        // 6. Nails integration
        if (app.nails) {
            const { length, finish, color, shape, design } = app.nails;
            const nailDesc = `${length} ${finish} ${color} ${shape} ${design === 'Solid Color' ? '' : design} nails`.replace(/\s+/g, ' ').trim();
            parts.push(`Nails: ${nailDesc}.`);
        }

        // 7. Distinct Features
        if (app.distinct_features && app.distinct_features.length > 0) {
            parts.push(`Distinctive features: ${app.distinct_features.join(', ')}.`);
        }

        // 8. Guardrails (Hidden hints for the model)
        if (agePreset?.guardrails && agePreset.guardrails.length > 0) {
            parts.push(`[Guardrails: ${agePreset.guardrails.join(', ')}]`);
        }

        const fullDescription = parts.join(' ');

        // Update if different to avoid infinite loops
        if (fullDescription !== subjectData.description) {
            setValue(`subject.${index}.description`, fullDescription, { shouldDirty: true });
        }

    }, [
        autoGenDesc,
        // We track specific deep values to trigger updates efficiently
        subjectData?.age_range,
        subjectData?.appearance?.ethnicity,
        subjectData?.appearance?.gender,
        subjectData?.role,
        subjectData?.appearance?.body_type,
        subjectData?.appearance?.skin_tone,
        subjectData?.appearance?.skin_quality,
        subjectData?.appearance?.hair,
        subjectData?.pose,
        // Track serialized arrays to detect deep changes in clothing/accessories properties
        JSON.stringify(subjectData?.clothing),
        JSON.stringify(subjectData?.accessories),
        // Fallback
        subjectData?.id
    ]);

    const importanceVal = subjectData?.importance || 10;

    return (
        <div className="p-6 border border-slate-200 rounded-xl bg-slate-50/50 shadow-sm relative animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <User className="text-banana-600" />
                    <h4 className="font-bold text-banana-900 text-lg">Subject #{index + 1}</h4>
                    <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded font-mono">{subjectData?.id}</span>
                </div>
                <button type="button" onClick={() => remove(index)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors" title="Remove Subject">
                    <Trash2 size={18} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Select label="Count" options={SUBJECT_COUNTS} registration={register(`subject.${index}.count`)} />
                <Select label="Grouping" options={SUBJECT_GROUPING} registration={register(`subject.${index}.grouping`)} />
                <Select label="Role / Rank" options={SUBJECT_ROLES} registration={register(`subject.${index}.role`)} />
            </div>

            <div className="mb-6">
                <Slider label="Visual Importance (Hierarchy)" registration={register(`subject.${index}.importance`, { valueAsNumber: true })} currentValue={importanceVal} min={1} max={10} description="10 = Main Focus, 1 = Background Blur" />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Select label="Identity Lock" options={IDENTITY_LOCKS} registration={register(`subject.${index}.identity_lock`)} />
                        {/* Yellow Info Box */}
                        <div className="mt-3 text-xs text-yellow-800 flex items-start gap-2">
                            <p className="leading-relaxed">
                                <strong>Identity Lock Control:</strong> <br/>
                                • <strong>None:</strong> Random face every time.<br/>
                                • <strong>Soft:</strong> Slight variations allowed (good for natural feeling).<br/>
                                • <strong>Strong:</strong> Strictly enforces facial ID/consistency across seeds.
                            </p>
                        </div>
                    </div>
                    <Controller control={control} name={`subject.${index}.consistency_tags`} render={({ field }) => (<MultiSelect label="Consistency Tags" options={CONSISTENCY_TAGS} value={field.value} onChange={field.onChange} maxSelections={5} placeholder="Lock features like moles/scars..." />)} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Select label="Age Range" options={AGE_RANGES.map(r => r.id)} registration={register(`subject.${index}.age_range`)} />
                {/* Visual Feedback for Age Range */}
                <div className="mt-1 text-[10px] text-slate-400 italic">
                    {AGE_RANGES.find(r => r.id === (subjectData?.age_range || "YOUNG_ADULT"))?.label}
                </div>
                <TextInput label="Exact Age (Optional)" type="number" registration={register(`subject.${index}.exact_age`, { valueAsNumber: true })} />
                <Select label="Gender" options={["Male", "Female", "Non-binary"]} registration={register(`subject.${index}.appearance.gender`)} />
                <Select label="Ethnicity" options={ETHNICITIES} registration={register(`subject.${index}.appearance.ethnicity`)} />
            </div>

            <div className="space-y-4 mb-6">
                <h5 className="font-bold text-slate-700 flex items-center gap-2 border-b border-slate-200 pb-2"><Palette size={16} /> Detailed Appearance</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-slate-100">
                    <Select label="Body Type" options={BODY_TYPES} registration={register(`subject.${index}.appearance.body_type`)} />
                    <Controller control={control} name={`subject.${index}.appearance.skin_tone`} render={({ field }) => (<ColorSelect label="Skin Tone" options={SKIN_TONES} value={field.value} onChange={field.onChange} colorMap={SKIN_TONE_MAP} />)} />
                    <Select label="Skin Quality" options={SKIN_QUALITIES} registration={register(`subject.${index}.appearance.skin_quality`)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-slate-100">
                    <Controller 
                        control={control} 
                        name={`subject.${index}.appearance.hair`} 
                        render={({ field }) => {
                            const hairVal = field.value || "";
                            const parts = hairVal.split(" -> ");
                            const currentStyle = parts[0] || "Straight";
                            const currentLength = parts[1] || "Medium";
                            const currentColor = parts[2] || "Brown";
                            
                            const handleHairChange = (style: string, length: string, color: string) => {
                                field.onChange(`${style} -> ${length} -> ${color}`);
                            };

                            const lengthOptions = HAIR_STYLE_LENGTH_MAP[currentStyle] || HAIR_LENGTHS;

                            return (
                                <>
                                    <Select 
                                        label="Hair Style" 
                                        options={HAIR_STYLES} 
                                        value={currentStyle}
                                        onChange={(e: any) => {
                                            const newStyle = e.target.value;
                                            const availableLengths = HAIR_STYLE_LENGTH_MAP[newStyle] || HAIR_LENGTHS;
                                            const newLength = availableLengths.includes(currentLength) ? currentLength : availableLengths[0];
                                            handleHairChange(newStyle, newLength, currentColor);
                                        }} 
                                    />
                                    <Select 
                                        label="Hair Length" 
                                        options={lengthOptions} 
                                        value={currentLength}
                                        onChange={(e: any) => handleHairChange(currentStyle, e.target.value, currentColor)} 
                                    />
                                    <ColorSelect 
                                        label="Hair Color" 
                                        options={HAIR_COLORS} 
                                        value={currentColor} 
                                        onChange={(val) => handleHairChange(currentStyle, currentLength, val)} 
                                        colorMap={HAIR_COLORS_MAP} 
                                    />
                                </>
                            );
                        }} 
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-slate-100">
                    <Controller control={control} name={`subject.${index}.appearance.eyes.color`} render={({ field }) => (<ColorSelect label="Eye Color" options={EYE_COLORS} value={field.value} onChange={field.onChange} colorMap={EYE_COLOR_MAP} />)} />
                    <Select label="Eye Shape" options={EYE_SHAPES} registration={register(`subject.${index}.appearance.eyes.shape`)} />
                </div>
                <div className="mt-4"><Controller control={control} name={`subject.${index}.appearance.distinct_features`} render={({ field }) => (<MultiSelect label="Distinct Features" options={DISTINCT_FEATURES} value={field.value || []} onChange={field.onChange} maxSelections={5} />)} /></div>
                
                <div className="mt-4 p-4 bg-slate-100 rounded-lg border border-slate-200">
                    <h6 className="font-bold text-xs uppercase text-slate-500 mb-2">Nails (Optional)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <Select label="Shape" options={NAIL_SHAPES} registration={register(`subject.${index}.appearance.nails.shape`)} />
                        <Select label="Length" options={NAIL_LENGTHS} registration={register(`subject.${index}.appearance.nails.length`)} />
                        <Select label="Finish" options={NAIL_FINISHES} registration={register(`subject.${index}.appearance.nails.finish`)} />
                        <Select label="Design" options={NAIL_DESIGNS} registration={register(`subject.${index}.appearance.nails.design`)} />
                        <Controller control={control} name={`subject.${index}.appearance.nails.color`} render={({ field }) => (<ColorSelect label="Color" options={NAIL_COLORS} value={field.value || "Nude Beige"} onChange={field.onChange} colorMap={NAIL_COLORS_MAP} />)} />
                    </div>
                </div>

                <div className="mt-4 p-4 bg-slate-100 rounded-lg border border-slate-200">
                    <h6 className="font-bold text-xs uppercase text-slate-500 mb-2">Tattoos (Optional)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <TextInput label="Description" registration={register(`subject.${index}.appearance.tattoos.description`)} placeholder="Dragon, Rose, Geometric..." />
                        <Select label="Placement" options={TATTOO_PLACEMENTS} registration={register(`subject.${index}.appearance.tattoos.placement`)} />
                        <Select label="Size" options={TATTOO_SIZES} registration={register(`subject.${index}.appearance.tattoos.size`)} />
                    </div>
                </div>
            </div>
            
            <PoseBuilder form={form} index={index} />
            
            <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-slate-700">Full Description (Prompt)</label>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 font-medium">Auto-generate from params</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={autoGenDesc} onChange={(e) => setAutoGenDesc(e.target.checked)} className="sr-only peer" />
                            <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-banana-500"></div>
                        </label>
                    </div>
                </div>
                <TextArea 
                    label="" 
                    registration={register(`subject.${index}.description`)} 
                    rows={4} 
                    readOnly={autoGenDesc}
                    className={autoGenDesc ? "bg-slate-50 text-slate-500 cursor-not-allowed" : "bg-white"}
                    description={autoGenDesc ? "This field is currently auto-generating based on Age, Appearance, Clothes, and Pose." : "Manual mode enabled."}
                />
            </div>
        </div>
    );
};

export const SubjectSection: React.FC<Props> = ({ form }) => {
    const { control, setValue, watch } = form;
    const { fields, append, remove } = useFieldArray({ control, name: "subject" });
    
    // Auto-ID generator effect
    useEffect(() => {
        fields.forEach((field, index) => {
            const role = watch(`subject.${index}.role`);
            const gender = watch(`subject.${index}.appearance.gender`);
            const age = watch(`subject.${index}.age_range`) || "YOUNG_ADULT";
            const currentId = watch(`subject.${index}.id`);
            if (role && gender && age && (currentId.includes("main_subject") || currentId.startsWith("sub_"))) {
                 const newId = `${role}_${age}_${gender}_${index + 1}`.toLowerCase();
                 setValue(`subject.${index}.id`, newId, { shouldDirty: true });
            }
        });
    }, [JSON.stringify(watch("subject")), setValue, fields]);

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Subject Definition</h2>
            <div className="space-y-8">
                {fields.map((field, index) => (
                    <SubjectCard key={field.id} form={form} index={index} remove={remove} />
                ))}
                
                <button
                    type="button"
                    onClick={() => append({ id: `sub_${Date.now()}`, type: 'person', count: "1", grouping: "solo", role: "secondary", importance: 5, identity_lock: "none", consistency_tags: [], age_range: "YOUNG_ADULT", appearance: { gender: "Female", ethnicity: "Caucasian", skin_quality: "hyper-realistic", body_type: "average", skin_tone: "Fair Ivory", hair: "Layered Cut -> Medium -> Brown", eyes: { color: "Blue", shape: "Almond" }, distinct_features: [], nails: { shape: "Natural", length: "Natural", finish: "Glossy", design: "Solid Color", color: "Nude Beige" }, tattoos: { description: "", placement: "Forearm", size: "small" } }, description: '', pose: '', clothing: [], accessories: [] })}
                    className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-banana-500 hover:text-banana-600 hover:bg-banana-50 transition-all font-bold flex items-center justify-center gap-2"
                >
                    <Plus size={20} /> Add Another Subject
                </button>
            </div>
        </div>
    );
};
