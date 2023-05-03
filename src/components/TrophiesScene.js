import { Float } from '@react-three/drei';
import useInteractions from '../utils/stores/useInteractions';

const TrophiesScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <group onClick={() => state.education()}>
            {/* Boolean */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh geometry={nodes.Boolean.geometry} position={nodes.Boolean.position}>
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>
                <mesh geometry={nodes.BooleanLogo.geometry} position={nodes.BooleanLogo.position}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>

            {/* ThreeJs Journey */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh
                        geometry={nodes.ThreejsJourney.geometry}
                        position={nodes.ThreejsJourney.position}
                    >
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>
                <mesh
                    geometry={nodes.ThreejsJourneyLogo.geometry}
                    position={nodes.ThreejsJourneyLogo.position}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>

            {/* Meta */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh geometry={nodes.Meta.geometry} position={nodes.Meta.position}>
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>
                <mesh geometry={nodes.MetaLogo.geometry} position={nodes.MetaLogo.position}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>

            {/* Udemy */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh geometry={nodes.Udemy.geometry} position={nodes.Udemy.position}>
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>
                <mesh geometry={nodes.Plane002.geometry} position={nodes.Plane002.position}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
        </group>
    );
};

export default TrophiesScene;
