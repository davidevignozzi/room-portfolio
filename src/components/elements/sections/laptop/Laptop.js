import { useGLTF } from '@react-three/drei';

const Laptop = () => {
    const laptop = useGLTF('./assets/models/laptop.glb');
    return <primitive object={laptop.scene} />;
};

export default Laptop;
