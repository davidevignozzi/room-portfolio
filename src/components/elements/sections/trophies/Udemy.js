import { useGLTF, Float } from '@react-three/drei';

const Udemy = () => {
    const udemy = useGLTF('./assets/models/udemy.glb');
    const udemyName = useGLTF('./assets/models/udemyName.glb');

    return (
        <group>
            <Float floatIntensity={0.025} rotationIntensity={0} speed={7.5}>
                <primitive object={udemy.scene} />;
            </Float>
            <mesh
                geometry={udemyName.nodes.udemyName.geometry}
                position={udemyName.nodes.udemyName.position}
                rotation={udemyName.nodes.udemyName.rotation}
                scale={udemyName.nodes.udemyName.scale}
            />
        </group>
    );
};

export default Udemy;
