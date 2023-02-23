import { useGLTF, Float } from '@react-three/drei';

const Udemy = () => {
    const udemy = useGLTF('./assets/models/udemy.glb');
    return (
        <Float floatIntensity={0.025} rotationIntensity={0} speed={7.5}>
            <primitive object={udemy.scene} />;
        </Float>
    );
};

export default Udemy;
