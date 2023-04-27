import { useGLTF, useTexture } from '@react-three/drei';

const StaticRoom = () => {
    const { nodes } = useGLTF('./assets/Room.glb');
    const bakedTexture = useTexture('./assets/Textures/bakedSun.jpg');
    bakedTexture.flipY = false;

    return (
        <mesh geometry={nodes.Room.geometry} rotation={nodes.Room.rotation}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

useGLTF.preload('./assets/Room.glb');

export default StaticRoom;
