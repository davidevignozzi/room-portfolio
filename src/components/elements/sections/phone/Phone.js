import { useGLTF } from '@react-three/drei';

const Phone = () => {
    const iphone = useGLTF('./assets/models/iphone.glb');
    return <primitive object={iphone.scene} />;
};

export default Phone;
