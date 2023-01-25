import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';

/**
 * Sun
 */
const Sun = () => {
    const sun = useRef();
    useHelper(sun, DirectionalLightHelper, sun.scale);

    /**
     * Debug Sun
     */
    const { position, color } = useControls('Sun', {
        position: {
            value: { x: -3, y: 0.5, z: 0 },
            step: 0.01
        },
        color: '#ffffff'
    });

    return (
        <directionalLight
            ref={sun}
            intensity={1.5}
            position={[position.x, position.y, position.z]}
            color={color}
        />
    );
};

// -----------------------------------------------------------------

/**
 * Light for debugging
 */
const DebugLight = () => {
    const debugLight = useRef();
    useHelper(debugLight, DirectionalLightHelper, debugLight.scale);

    const { position } = useControls('DEBUGLIGHT', {
        position: {
            value: { x: 0, y: 2, z: 0 },
            step: 0.01
        }
    });

    return (
        <directionalLight
            ref={debugLight}
            intensity={1}
            position={[position.x, position.y, position.z]}
        />
    );
};

// -----------------------------------------------------------------

/**
 * Lights Setup
 */
const Lights = () => {
    return (
        <>
            <Sun />
            <DebugLight />
        </>
    );
};

export default Lights;
