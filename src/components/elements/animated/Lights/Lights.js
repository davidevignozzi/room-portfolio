import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LoupedeckLights from './LoupedeckLights';
import RodeCasterLights from './RodeCasterLights';

const Lights = () => {
    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>

            <LoupedeckLights />
            <RodeCasterLights />
        </>
    );
};

export default Lights;
