import { useGLTF } from '@react-three/drei';

const RoomStructure = () => {
    const roomStructure = useGLTF('./assets/room-structure.glb');
    return <primitive object={roomStructure.scene} />;
};

export default RoomStructure;
