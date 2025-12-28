
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { Select } from '../ui/FormComponents';
import { ASPECT_RATIOS, ASPECT_RATIOS_DATA, IMAGE_SIZES_DATA } from '../../constants';
import { FieldInfo } from './common';
import { Monitor, Maximize } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

export const ApiConfigSection: React.FC<Props> = ({ form }) => {
    const { register, control } = form;
    
    // Watch fields to update descriptions dynamically
    const selectedAr = useWatch({ control, name: 'api.generation_config.image_config.aspect_ratio' });
    const selectedSize = useWatch({ control, name: 'api.generation_config.image_config.image_size' });

    const arInfo = ASPECT_RATIOS_DATA.find(d => d.value === selectedAr);
    const sizeInfo = IMAGE_SIZES_DATA.find(d => d.value === selectedSize);

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
             <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">API Configuration</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                    <Select label="Aspect Ratio" options={ASPECT_RATIOS} registration={register('api.generation_config.image_config.aspect_ratio')} />
                    {arInfo && <FieldInfo icon={Monitor} text={arInfo.desc} />}
                </div>
                <div>
                    <Select label="Resolution / Size" options={IMAGE_SIZES_DATA.map(x=>x.value)} registration={register('api.generation_config.image_config.image_size')} />
                    {sizeInfo && <FieldInfo icon={Maximize} text={sizeInfo.desc} />}
                </div>
             </div>
        </div>
    );
};
