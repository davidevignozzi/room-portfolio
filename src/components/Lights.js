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
    const { position, color, intensity } = useControls('Sun', {
        position: {
            value: { x: -3, y: 0.5, z: 0 },
            step: 0.01
        },
        intensity: {
            value: 1.5,
            min: 0,
            max: 5,
            step: 0.1
        },
        color: '#ffffff'
    });

    return (
        <directionalLight
            ref={sun}
            intensity={intensity}
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

    const { position, enabled } = useControls('DEBUGLIGHT', {
        position: {
            value: { x: 0, y: 2, z: 0 },
            step: 0.01
        },
        enabled: true
    });

    useHelper(enabled && debugLight, DirectionalLightHelper, debugLight.scale);

    return (
        <directionalLight
            ref={debugLight}
            intensity={1}
            position={[position.x, position.y, position.z]}
            visible={enabled}
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
