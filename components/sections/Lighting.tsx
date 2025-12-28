
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { Select } from '../ui/FormComponents';
import { 
    LIGHTING_TYPES, LIGHTING_DIRECTIONS, LIGHTING_EFFECTS,
    LIGHTING_TYPES_DATA, LIGHTING_DIRECTIONS_DATA, LIGHTING_EFFECTS_DATA 
} from '../../constants';
import { FieldInfo } from './common';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

export const LightingSection: React.FC<Props> = ({ form }) => {
    const { register, control } = form;

    const type = useWatch({ control, name: 'lighting.type' });
    const direction = useWatch({ control, name: 'lighting.direction' });
    const effect = useWatch({ control, name: 'lighting.effect' });

    const typeInfo = LIGHTING_TYPES_DATA.find(d => d.value === type);
    const dirInfo = LIGHTING_DIRECTIONS_DATA.find(d => d.value === direction);
    const effInfo = LIGHTING_EFFECTS_DATA.find(d => d.value === effect);

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
             <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Lighting Studio</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div>
                    <Select label="Light Source Type" options={LIGHTING_TYPES} registration={register('lighting.type')} />
                    {typeInfo && <FieldInfo icon={Lightbulb} text={typeInfo.desc} />}
                </div>
                <div>
                    <Select label="Direction" options={LIGHTING_DIRECTIONS} registration={register('lighting.direction')} />
                    {dirInfo && <FieldInfo icon={ArrowRight} text={dirInfo.desc} />}
                </div>
                <div>
                    <Select label="Effect" options={LIGHTING_EFFECTS} registration={register('lighting.effect')} />
                    {effInfo && <FieldInfo icon={Sparkles} text={effInfo.desc} />}
                </div>
             </div>
        </div>
    );
};
