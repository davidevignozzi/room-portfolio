import { useGLTF, useTexture } from '@react-three/drei';

const StaticRoom = () => {
    const { nodes } = useGLTF('./assets/BakedRoom.glb');
    const bakedTexture = useTexture('./assets/BakedTexture.jpg');
    bakedTexture.flipY = false;
    return (
        <mesh geometry={nodes.BakedRoom.geometry} rotation={nodes.BakedRoom.rotation}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default StaticRoom;
