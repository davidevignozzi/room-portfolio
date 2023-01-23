import { useGLTF } from '@react-three/drei';

const Sofa = () => {
    const sofa = useGLTF('./assets/sofa.glb');
    return <primitive object={sofa.scene} />;
};

export default Sofa;
