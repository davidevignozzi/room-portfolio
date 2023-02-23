import { Float, useGLTF } from '@react-three/drei';

const Meta = () => {
    const meta = useGLTF('./assets/models/meta.glb');
    return (
        <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
            <primitive object={meta.scene} />
        </Float>
    );
};

export default Meta;
