import { useGLTF } from '@react-three/drei';

const Alex = () => {
    const alex = useGLTF('./assets/alex.glb');
    return <primitive object={alex.scene} />;
};

export default Alex;
