import { useRef } from 'react';
import { Html } from '@react-three/drei';
import { isBrowser } from 'react-device-detect';
import useInteractions from '../utils/stores/useInteractions';
import SkillsTablet from './HTML/SkillsTablet';

const TabletScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const screenOffMaterial = props.screenOffMaterial;
    const state = useInteractions((state) => state);
    const screenRef = useRef();

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        if (state.phase === 'explore' || state.phase === 'start') {
            document.body.style.cursor = 'pointer';
        }
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
        document.body.style.cursor = 'default';
    };

    /**
     * Handle Phase
     */
    const handlePhase = () => {
        if (isBrowser) {
            if (state.phase !== 'skills') {
                state.skills();
            }
        }
    };

    return (
        <group
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            onClick={handlePhase}
        >
            <mesh
                geometry={nodes.WacomCintiq.geometry}
                position={nodes.WacomCintiq.position}
                rotation={nodes.WacomCintiq.rotation}
                scale={nodes.WacomCintiq.scale}
                material={bakedMaterial}
            />

            {/* TabletScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.WacomCintiqScreen.geometry}
                position={nodes.WacomCintiqScreen.position}
                rotation={nodes.WacomCintiqScreen.rotation}
                scale={nodes.WacomCintiqScreen.scale}
                material={isBrowser ? screenMaterial : screenOffMaterial}
            >
                {isBrowser && (
                    <Html
                        fixed
                        prepend
                        center
                        transform
                        parent={screenRef.current}
                        portal={screenRef.current}
                        zIndexRange={[0, 1]}
                        distanceFactor={0.045}
                        position={[-0.005, -0.0025, -0.005]}
                        rotation={[0.8, Math.PI, 0]}
                    >
                        <section
                            id="tablet"
                            className="fonted centered no-user-select"
                            onMouseOver={handleMouseEnter}
                            onClick={handlePhase}
                        >
                            <SkillsTablet />
                        </section>
                    </Html>
                )}
            </mesh>
        </group>
    );
};

export default TabletScene;
