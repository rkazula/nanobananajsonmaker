
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { NanoBananaType } from '../../schema';

// Import split sections
import { IdealParametersSection } from './IdealParameters';
import { IntentSection } from './Intent';
import { ApiConfigSection } from './ApiConfig';
import { MetaSection } from './Meta';
import { SceneSection } from './Scene';
import { LightingSection } from './Lighting';
import { CameraSection } from './Camera';
import { SubjectSection } from './Subject';
import { WardrobeSection } from './Wardrobe';
import { AdvancedSection } from './Advanced';

interface Props {
  section: string;
  form: UseFormReturn<NanoBananaType>;
}

export const SectionRenderer: React.FC<Props> = ({ section, form }) => {
    switch (section) {
        case 'ideal_parameters': return <IdealParametersSection form={form} />;
        case 'intent': return <IntentSection form={form} />;
        case 'api': return <ApiConfigSection form={form} />;
        case 'meta': return <MetaSection form={form} />;
        case 'scene': return <SceneSection form={form} />;
        case 'lighting': return <LightingSection form={form} />;
        case 'camera': return <CameraSection form={form} />;
        case 'subject': return <SubjectSection form={form} />;
        case 'wardrobe': return <WardrobeSection form={form} />;
        case 'advanced': return <AdvancedSection form={form} />;
        default: return null;
    }
};
