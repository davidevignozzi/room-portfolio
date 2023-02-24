import { Float, useGLTF } from '@react-three/drei';

const Boolean = () => {
    const boolean = useGLTF('./assets/models/boolean.glb');
    const booleanName = useGLTF('./assets/models/booleanName.glb');

    return (
        <group>
            <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                <primitive object={boolean.scene} />;
            </Float>
            <mesh
                geometry={booleanName.nodes.BooleanName.geometry}
                position={booleanName.nodes.BooleanName.position}
                rotation={booleanName.nodes.BooleanName.rotation}
                scale={booleanName.nodes.BooleanName.scale}
            />
        </group>
    );
};

export default Boolean;
