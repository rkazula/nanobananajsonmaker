
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { NanoBananaType } from '../../schema';
import { Select } from '../ui/FormComponents';
import { 
    CAMERA_POV, CAMERA_FRAMING, CAMERA_LENS, CAMERA_FOCUS, CAMERA_DOF,
    CAMERA_POV_DATA, CAMERA_FRAMING_DATA, CAMERA_LENS_DATA, CAMERA_FOCUS_DATA, CAMERA_DOF_DATA 
} from '../../constants';
import { FieldInfo } from './common';
import { Eye, Crop, ZoomIn, Scan, Layers } from 'lucide-react';

interface Props {
    form: UseFormReturn<NanoBananaType>;
}

export const CameraSection: React.FC<Props> = ({ form }) => {
    const { register, control } = form;

    const pov = useWatch({ control, name: 'camera_perspective.pov' });
    const framing = useWatch({ control, name: 'camera_perspective.framing' });
    const lens = useWatch({ control, name: 'camera_perspective.lens' });
    const focus = useWatch({ control, name: 'camera_perspective.focus_point' });
    const dof = useWatch({ control, name: 'camera_perspective.depth_of_field' });

    const povInfo = CAMERA_POV_DATA.find(d => d.value === pov);
    const framingInfo = CAMERA_FRAMING_DATA.find(d => d.value === framing);
    const lensInfo = CAMERA_LENS_DATA.find(d => d.value === lens);
    const focusInfo = CAMERA_FOCUS_DATA.find(d => d.value === focus);
    const dofInfo = CAMERA_DOF_DATA.find(d => d.value === dof);

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
             <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Camera Perspective</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div>
                    <Select label="Point of View (POV)" options={CAMERA_POV} registration={register('camera_perspective.pov')} />
                    {povInfo && <FieldInfo icon={Eye} text={povInfo.desc} />}
                </div>
                <div>
                    <Select label="Framing / Shot Size" options={CAMERA_FRAMING} registration={register('camera_perspective.framing')} />
                    {framingInfo && <FieldInfo icon={Crop} text={framingInfo.desc} />}
                </div>
                <div>
                    <Select label="Lens" options={CAMERA_LENS} registration={register('camera_perspective.lens')} />
                    {lensInfo && <FieldInfo icon={ZoomIn} text={lensInfo.desc} />}
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                    <Select label="Focus Point" options={CAMERA_FOCUS} registration={register('camera_perspective.focus_point')} />
                    {focusInfo && <FieldInfo icon={Scan} text={focusInfo.desc} />}
                </div>
                <div>
                    <Select label="Depth of Field" options={CAMERA_DOF} registration={register('camera_perspective.depth_of_field')} />
                    {dofInfo && <FieldInfo icon={Layers} text={dofInfo.desc} />}
                </div>
             </div>
        </div>
    );
};
