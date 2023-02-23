import { Float, useGLTF } from '@react-three/drei';

const ThreeJourney = () => {
    const threeJsJourney = useGLTF('./assets/models/threeJsJourney.glb');

    return (
        <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
            <primitive object={threeJsJourney.scene} />;
        </Float>
    );
};

export default ThreeJourney;
