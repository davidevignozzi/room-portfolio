import { Float } from '@react-three/drei';
import { isBrowser } from 'react-device-detect';
import useInteractions from '../utils/stores/useInteractions';

const TrophiesScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        if (state.phase === 'explore' || state.phase === 'education') {
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
    const handleTrophies = () => {
        if (isBrowser) {
            if (state.phase !== 'education') {
                state.education();
            }
        }
    };

    /**
     * To open a url passed in a new Tab
     */
    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };

    /**
     * If the user click on the boolean trophy open Boolean Certificate.
     */
    const handleBoolean = () => {
        if (state.phase === 'education') {
            openInNewTab(
                'https://www.credential.net/2241676c-8964-4a36-b184-9fa3721b7abd#gs.fzo2ae'
            );
        }
    };

    /**
     * If the user click on the ThreejsJourney trophy open ThreejsJourney Certificate.
     */
    const handleThreeJsJourney = () => {
        if (state.phase === 'education') {
            openInNewTab('https://threejs-journey.com/certificate/view/18301');
        }
    };

    /**
     * If the user click on the Meta trophy open Meta Certificate.
     */
    const handleMeta = () => {
        if (state.phase === 'education') {
            // openInNewTab('');
        }
    };

    /**
     * If the user click on the Udemy trophy open Udemy Certificate.
     */
    const handleUdemy = () => {
        if (state.phase === 'education') {
            openInNewTab(
                'https://www.udemy.com/certificate/UC-f11ac59d-3835-43d8-865b-1cd3ef80651e/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email'
            );
        }
    };

    return (
        <group
            onClick={handleTrophies}
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
        >
            {/* Boolean */}
            <group onClick={handleBoolean}>
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
            <group onClick={handleThreeJsJourney}>
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
            <group onClick={handleMeta}>
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
            <group onClick={handleUdemy}>
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
