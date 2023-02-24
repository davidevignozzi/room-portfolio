import { Float, useGLTF } from '@react-three/drei';

const Meta = () => {
    const meta = useGLTF('./assets/models/meta.glb');
    const metaName = useGLTF('./assets/models/metaName.glb');

    return (
        <group>
            <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                <primitive object={meta.scene} />
            </Float>
            <mesh
                geometry={metaName.nodes.metaName.geometry}
                position={metaName.nodes.metaName.position}
                rotation={metaName.nodes.metaName.rotation}
                scale={metaName.nodes.metaName.scale}
            />
        </group>
    );
};

export default Meta;
