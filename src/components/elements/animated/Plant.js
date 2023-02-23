import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Plant = () => {
    const plant = useGLTF('./assets/models/plant.glb');

    useFrame(({ clock }) => {
        plant.nodes.Plant.rotation.y += 0.01;
    });
    return <primitive object={plant.scene} />;
};

export default Plant;
