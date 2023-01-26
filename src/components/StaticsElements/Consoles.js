import { useGLTF } from '@react-three/drei';

const Consoles = () => {
    const consoles = useGLTF('./assets/consoles.glb');
    return <primitive object={consoles.scene} />;
};

export default Consoles;
