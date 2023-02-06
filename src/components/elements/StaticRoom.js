import { useGLTF, useTexture } from '@react-three/drei';

const StaticRoom = () => {
    const { nodes } = useGLTF('./assets/BakedRoom.glb');
    const bakedTexture = useTexture('./assets/BakedTexture.jpg');
    bakedTexture.flipY = false;
    console.log('🚀 ~ StaticRoom ~ nodes', nodes);
    return (
        // <primitive object={bakedRoom.scene} />
        <mesh geometry={nodes.StaticRoom.geometry}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default StaticRoom;
