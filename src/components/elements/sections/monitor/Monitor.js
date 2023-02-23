import { useGLTF } from '@react-three/drei';

const Monitor = () => {
    const monitor = useGLTF('./assets/models/monitor.glb');
    return <primitive object={monitor.scene} />;
};

export default Monitor;
