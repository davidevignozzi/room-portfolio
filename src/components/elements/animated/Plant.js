import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Plant = () => {
    const plant = useGLTF('./assets/plant.glb');

    useFrame(() => {
        plant.scene.children[0].rotation.y += 0.01;
    });
    return <primitive object={plant.scene} />;
};

export default Plant;
