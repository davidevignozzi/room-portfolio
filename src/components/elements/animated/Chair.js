import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Chair = () => {
    const chair = useGLTF('./assets/models/chair.glb');

    useFrame(({ clock }) => {
        chair.nodes.Office_chair.rotation.y += Math.sin(clock.getElapsedTime()) * 0.005;
    });

    return <primitive object={chair.scene} />;
};

export default Chair;
