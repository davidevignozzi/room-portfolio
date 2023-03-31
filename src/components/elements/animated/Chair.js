import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Chair = () => {
    const chair = useGLTF('./assets/models/chair.glb');

    useFrame(({ clock }) => {
        chair.nodes.Office_chair.rotation.y -= Math.cos(clock.getElapsedTime()) * 0.0025;
    });

    return <primitive object={chair.scene} />;
};

export default Chair;
