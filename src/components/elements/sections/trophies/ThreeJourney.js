import { Float, useGLTF } from '@react-three/drei';

const ThreeJourney = () => {
    const threeJsJourney = useGLTF('./assets/models/threeJsJourney.glb');
    const threeJsJourneyName = useGLTF('./assets/models/threeJsJourneyName.glb');
    return (
        <group>
            <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                <primitive object={threeJsJourney.scene} />;
            </Float>
            <mesh
                geometry={threeJsJourneyName.nodes.threeJsJourneyName.geometry}
                position={threeJsJourneyName.nodes.threeJsJourneyName.position}
                rotation={threeJsJourneyName.nodes.threeJsJourneyName.rotation}
                scale={threeJsJourneyName.nodes.threeJsJourneyName.scale}
            />
        </group>
    );
};

export default ThreeJourney;
