import { useGLTF } from '@react-three/drei';

const Skadils = () => {
    const skadils = useGLTF('./assets/skadils.glb');
    return <primitive object={skadils.scene} />;
};

export default Skadils;
