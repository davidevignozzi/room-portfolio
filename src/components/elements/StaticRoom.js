import { useGLTF, useTexture } from '@react-three/drei';

const StaticRoom = () => {
    const { nodes } = useGLTF('./assets/Room.glb');
    console.log('🚀 ~ Model', nodes);
    const bakedTexture = useTexture('./assets/BakingSteps.jpg');
    console.log('🚀 ~ Texture', bakedTexture);
    bakedTexture.flipY = false;
    return (
        <mesh geometry={nodes.Room.geometry} rotation={nodes.Room.rotation}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default StaticRoom;
