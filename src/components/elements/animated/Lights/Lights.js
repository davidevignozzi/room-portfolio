import { EffectComposer, Bloom } from '@react-three/postprocessing';
import StaticLights from './StaticLights';
import LoupedeckLights from './LoupedeckLights';
import RodeCasterLights from './RodeCasterLights';

const Lights = () => {
    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>

            <StaticLights />

            {/* Animated */}
            <LoupedeckLights />
            <RodeCasterLights />
        </>
    );
};

export default Lights;
