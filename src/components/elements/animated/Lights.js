import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LoupedeckLights from './Lights/LoupedeckLights';

const Lights = () => {
    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>

            <LoupedeckLights />
        </>
    );
};

export default Lights;
