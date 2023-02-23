import { Float, useGLTF } from '@react-three/drei';

const Boolean = () => {
    const boolean = useGLTF('./assets/models/boolean.glb');
    return (
        <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
            <primitive object={boolean.scene} />;
        </Float>
    );
};

export default Boolean;
