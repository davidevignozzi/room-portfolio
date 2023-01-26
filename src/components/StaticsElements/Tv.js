import { useGLTF } from '@react-three/drei';

const Tv = () => {
    const tv = useGLTF('./assets/television.glb');
    return <primitive object={tv.scene} />;
};

export default Tv;
