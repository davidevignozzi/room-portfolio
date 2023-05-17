import { Html, Plane } from '@react-three/drei';
import { useRef } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import SkillsTablet from './HTML/SkillsTablet';

const TabletScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const state = useInteractions((state) => state);
    const screenRef = useRef();

    return (
        <group>
            <mesh
                geometry={nodes.WacomCintiq.geometry}
                position={nodes.WacomCintiq.position}
                rotation={nodes.WacomCintiq.rotation}
                scale={nodes.WacomCintiq.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.skills();
                }}
            />

            {/* TabletScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.WacomCintiqScreen.geometry}
                position={nodes.WacomCintiqScreen.position}
                rotation={nodes.WacomCintiqScreen.rotation}
                scale={nodes.WacomCintiqScreen.scale}
                material={screenMaterial}
                onClick={() => {
                    state.skills();
                }}
            >
                <Html
                    fixed
                    center
                    transform
                    // occlude
                    parent={screenRef.current}
                    zIndexRange={[0, 1]}
                    distanceFactor={0.045}
                    position={[-0.005, -0.0025, -0.005]}
                    rotation={[0.8, Math.PI, 0]}
                    style={{ backfaceVisibility: 'none' }}
                    // pointerEvents="none"
                >
                    <SkillsTablet />
                </Html>
            </mesh>
        </group>
    );
};

export default TabletScene;
