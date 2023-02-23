import { useGLTF } from '@react-three/drei';

const Tablet = () => {
    const tablet = useGLTF('./assets/models/tablet.glb');
    return <primitive object={tablet.scene} />;
};

export default Tablet;
