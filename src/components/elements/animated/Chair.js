import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Chair = () => {
    const chair = useGLTF('./assets/chair.glb');

    useFrame(({ clock }) => {
        chair.scene.children[0].rotation.y += Math.sin(clock.getElapsedTime()) * 0.005;
    });

    return <primitive object={chair.scene} />;
};

export default Chair;
