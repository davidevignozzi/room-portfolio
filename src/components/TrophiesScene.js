import { Float } from '@react-three/drei';
import useInteractions from '../utils/stores/useInteractions';

const TrophiesScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    return (
        <group onClick={() => state.education()}>
            {/* Boolean */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh
                        geometry={nodes.Boolean.geometry}
                        position={nodes.Boolean.position}
                        rotation={nodes.Boolean.rotation}
                        scale={nodes.Boolean.scale}
                        material={bakedMaterial}
                    />
                </Float>
                <mesh
                    geometry={nodes.BooleanBase.geometry}
                    position={nodes.BooleanBase.position}
                    rotation={nodes.BooleanBase.rotation}
                    scale={nodes.BooleanBase.scale}
                    material={bakedMaterial}
                />
            </group>

            {/* ThreeJs Journey */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh
                        geometry={nodes.ThreejsJourney.geometry}
                        position={nodes.ThreejsJourney.position}
                        rotation={nodes.ThreejsJourney.rotation}
                        scale={nodes.ThreejsJourney.scale}
                        material={bakedMaterial}
                    />
                </Float>
                <mesh
                    geometry={nodes.ThreejsJourneyBase.geometry}
                    position={nodes.ThreejsJourneyBase.position}
                    rotation={nodes.ThreejsJourneyBase.rotation}
                    scale={nodes.ThreejsJourneyBase.scale}
                    material={bakedMaterial}
                />
            </group>

            {/* Meta */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh
                        geometry={nodes.Meta.geometry}
                        position={nodes.Meta.position}
                        rotation={nodes.Meta.rotation}
                        scale={nodes.Meta.scale}
                        material={bakedMaterial}
                    />
                </Float>
                <mesh
                    geometry={nodes.MetaBase.geometry}
                    position={nodes.MetaBase.position}
                    rotation={nodes.MetaBase.rotation}
                    scale={nodes.MetaBase.scale}
                    material={bakedMaterial}
                />
            </group>

            {/* Udemy */}
            <group>
                <Float floatIntensity={0.05} rotationIntensity={0} speed={7.5}>
                    <mesh
                        geometry={nodes.Udemy.geometry}
                        position={nodes.Udemy.position}
                        rotation={nodes.Udemy.rotation}
                        scale={nodes.Udemy.scale}
                        material={bakedMaterial}
                    />
                </Float>
                <mesh
                    geometry={nodes.UdemyBase.geometry}
                    position={nodes.UdemyBase.position}
                    rotation={nodes.UdemyBase.rotation}
                    scale={nodes.UdemyBase.scale}
                    material={bakedMaterial}
                />
            </group>
        </group>
    );
};

export default TrophiesScene;
