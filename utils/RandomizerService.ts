
import { 
    SCENES, TIMES_OF_DAY, ATMOSPHERES, 
    LIGHTING_TYPES, LIGHTING_DIRECTIONS, LIGHTING_EFFECTS, 
    FILM_STOCKS, QUALITY_MODES, WEATHER_CONDITIONS, INTERIOR_STYLES
} from '../constants';

// Helper to pick random element
const pick = <T>(arr: readonly T[] | T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper to pick multiple unique elements
const pickMulti = <T>(arr: readonly T[] | T[], n: number): T[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
};

export interface RandomizedContext {
    'scene.location': string;
    'scene.time': string;
    'scene.atmosphere': string[];
    'lighting.type': string;
    'lighting.direction': string;
    'lighting.effect': string;
    'meta.film_stock_emulation.film_stock': string;
    'meta.quality_mode': string;
    'scene.set_dressing.weather': string;
    'scene.set_dressing.interior_style': string;
}

export class RandomizerService {
    /**
     * Generates a random set of context parameters (Scene, Lighting, Meta)
     * independent of the camera/subject settings.
     */
    static generateContext(): RandomizedContext {
        return {
            'scene.location': pick(SCENES),
            'scene.time': pick(TIMES_OF_DAY),
            'scene.atmosphere': pickMulti(ATMOSPHERES, 2),
            
            'lighting.type': pick(LIGHTING_TYPES),
            'lighting.direction': pick(LIGHTING_DIRECTIONS),
            'lighting.effect': pick(LIGHTING_EFFECTS),
            
            'meta.film_stock_emulation.film_stock': pick(FILM_STOCKS),
            'meta.quality_mode': pick(QUALITY_MODES),
            
            'scene.set_dressing.weather': pick(WEATHER_CONDITIONS),
            'scene.set_dressing.interior_style': pick(INTERIOR_STYLES)
        };
    }

    /**
     * Helper to get a human-readable summary of what was randomized
     */
    static getSummary(ctx: RandomizedContext): string {
        return `📍 ${ctx['scene.location']}  •  🕒 ${ctx['scene.time']}  •  🎞️ ${ctx['meta.film_stock_emulation.film_stock']}  •  💡 ${ctx['lighting.type']}`;
    }
}
