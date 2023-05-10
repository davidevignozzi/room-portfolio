import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import useInteractions from '../utils/stores/useInteractions';

const CameraScene = () => {
    const cameraControlsRef = useRef();
    const { camera } = useThree();

    const cameraPosition = new THREE.Vector3();
    const cameraTarget = new THREE.Vector3();

    const projectSettings = {
        position: new THREE.Vector3(-0.225, 0.725, 0.7),
        target: new THREE.Vector3(-0.225, 0.725, 1.75)
    };
    console.log('🚀 ~ CameraScene ~ projectSettings:', projectSettings);

    const skillsSettings = {
        position: new THREE.Vector3(-0.225, 0.725, 0.7),
        target: new THREE.Vector3(-0.225, 0.25, 1.75)
    };

    const phase = useInteractions((state) => state.phase);

    /**
     * Animate at change phase
     */
    useFrame((state) => {
        switch (phase) {
            case 'loading':
                break;

            case 'projects':
                state.camera.position.lerp(cameraPosition.set(2, 2, 2), 1);
                console.log(state.camera.position);
                break;

            case 'skills':
                break;

            case 'education':
                break;

            case 'experiences':
                break;

            case 'everis':
                break;

            case 'contacts':
                break;

            default:
                break;
        }
    });

    useEffect(() => {
        switch (phase) {
            case 'loading':
                break;

            case 'projects':
                break;

            case 'skills':
                break;

            case 'education':
                break;

            case 'experiences':
                break;

            case 'everis':
                break;

            case 'contacts':
                break;

            default:
                break;
        }
    }, [phase]);

    return <OrbitControls makeDefault ref={cameraControlsRef} />;
};

export default CameraScene;
