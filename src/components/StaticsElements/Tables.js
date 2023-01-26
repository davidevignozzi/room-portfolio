import { useGLTF } from '@react-three/drei';

const Tables = () => {
    const tables = useGLTF('./assets/tables.glb');
    return <primitive object={tables.scene} />;
};

export default Tables;
