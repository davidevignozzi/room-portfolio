import { useGLTF } from '@react-three/drei';

const StaticsElements = () => {
    const staticsElements = useGLTF('./assets/staticsElements.glb');
    return <primitive object={staticsElements.scene} />;
};

export default StaticsElements;
