import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import useInteractions from '../utils/stores/useInteractions';
import gsap from 'gsap';

const CameraScene = () => {
    // Camera
    const { camera, gl } = useThree();
    const cameraControlsRef = useRef();

    // Phases
    const state = useInteractions((state) => state);
    const phase = useInteractions((state) => state.phase);

    // Animation Time
    const animationsTime = useInteractions((state) => state.animationsTime);

    /**
     * Camera Limitations
     */
    const minPolarAngle = 0;
    const maxPolarAngle = Math.PI / 2 - 0.15;
    const minAzimuthAngle = Math.PI / 2;
    const maxAzimuthAngle = Math.PI;

    /**
     * To permit animations of the camera
     */
    const cameraMovementsOn = () => {
        cameraControlsRef.current.enabled = true;
        cameraControlsRef.current.minPolarAngle = 0;
        cameraControlsRef.current.maxPolarAngle = Math.PI;
        cameraControlsRef.current.minAzimuthAngle = Infinity;
        cameraControlsRef.current.maxAzimuthAngle = Infinity;
    };

    /**
     * User can control the camera
     */
    const cameraMovementsWithLimitations = () => {
        cameraControlsRef.current.enabled = true;
        cameraControlsRef.current.minPolarAngle = minPolarAngle;
        cameraControlsRef.current.maxPolarAngle = maxPolarAngle;
        cameraControlsRef.current.minAzimuthAngle = minAzimuthAngle;
        cameraControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
    };

    /**
     * User can not control the camera
     */
    const cameraMovementsOff = () => {
        cameraControlsRef.current.enabled = false;
    };

    /**
     * Camera setting for each phase
     */
    // * Explore
    const exploreSettings = {
        position: new THREE.Vector3(4, 3.5, -5),
        target: new THREE.Vector3(0, 0, 0)
    };
    // * Loading
    const loadingSettings = {
        position: new THREE.Vector3(0.515, 0.5, 1.12),
        target: new THREE.Vector3(0.6, 0.4, 1.3)
    };
    // * Projects
    const projectsSettings = {
        position: new THREE.Vector3(-0.076, 0.61, 0.8),
        target: new THREE.Vector3(-0.076, 0.61, 1.75)
    };
    // * Skills
    const skillsSettings = {
        position: new THREE.Vector3(-0.076, 0.7, 0.8),
        target: new THREE.Vector3(-0.076, 0.505, 1)
    };
    // * Education
    const educationSettings = {
        position: new THREE.Vector3(-0.076, 1.1, 0.6),
        target: new THREE.Vector3(-0.076, 1.1, 1.375)
    };
    // * Experiences
    const experiencesSettings = {
        position: new THREE.Vector3(-1.05, 1.0675, 0.675),
        target: new THREE.Vector3(-1.05, 1.0675, 1.5)
    };
    // * Everis
    const everisSettings = {
        position: new THREE.Vector3(-0.8535, 0.945, 1.44),
        target: new THREE.Vector3(-0.8535, 0.945, 1.45)
    };
    // * Contacts
    const contactsSettings = {
        position: new THREE.Vector3(-0.39, 0.5, 1.075),
        target: new THREE.Vector3(-0.42, 0.275, 1.15)
    };

    /**
     * Animate camera when phase change
     */
    const animateCamera = (positionSettings, targetSettings, duration, ease) => {
        /**
         * Stop the animation if is going
         */
        gsap.killTweensOf(camera.position);
        gsap.killTweensOf(cameraControlsRef.current.target);

        /**
         * Move the camera
         */
        gsap.to(camera.position, {
            x: positionSettings.x,
            y: positionSettings.y,
            z: positionSettings.z,
            duration: duration,
            ease: ease,
            onStart: () => {
                cameraMovementsOn();
            },
            onComplete: () => {
                cameraMovementsOff();
            }
        });

        /**
         * Set the target of the camera
         */
        gsap.to(cameraControlsRef.current.target, {
            x: targetSettings.x,
            y: targetSettings.y,
            z: targetSettings.z,
            duration: duration,
            ease: ease
        });
    };

    /**
     * 🏠 Home Animation
     */
    const animateToExplore = (
        positionSettings,
        targetSettings,
        delay1,
        delay2,
        duration1,
        duration2,
        ease
    ) => {
        /**
         * Move the camera
         */
        gsap.to(camera.position, {
            x: positionSettings.x,
            y: positionSettings.y,
            z: positionSettings.z,
            delay: delay1,
            duration: duration1,
            ease: ease,
            onStart: () => {
                cameraControlsRef.current.enabled = true;
            },
            onComplete: () => {
                cameraMovementsWithLimitations();
            }
        });

        /**
         * Set the target of the camera
         */
        gsap.to(cameraControlsRef.current.target, {
            x: targetSettings.x,
            y: targetSettings.y,
            z: targetSettings.z,
            delay: delay2,
            duration: duration2,
            ease: ease
        });
    };

    /**
     * Start Animation
     */
    const animateToStart = () => {
        /**
         * Little zoom out
         */
        gsap.to(camera.position, {
            x: loadingSettings.position.x - 0.225,
            y: loadingSettings.position.y + 0.25,
            z: loadingSettings.position.z - 0.5,
            duration: 2.5,
            ease: 'slowmo',
            onStart: () => {
                cameraControlsRef.current.enabled = true;
            }
        });

        // Home animation
        animateToExplore(
            exploreSettings.position,
            exploreSettings.target,
            2,
            2.25,
            1.5,
            1.25,
            'power2.in'
        );
    };

    useEffect(() => {
        switch (phase) {
            case 'loading':
                /**
                 * Camera Settings for the first POV
                 */
                camera.position.set(
                    loadingSettings.position.x,
                    loadingSettings.position.y,
                    loadingSettings.position.z
                );
                cameraControlsRef.current.target = loadingSettings.target;
                break;

            case 'loaded':
                // Disable camera movements when is loaded
                cameraControlsRef.current.enabled = false;
                break;

            case 'start':
                animateToStart();
                break;

            case 'projects':
                animateCamera(
                    projectsSettings.position,
                    projectsSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            case 'skills':
                animateCamera(
                    skillsSettings.position,
                    skillsSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            case 'education':
                animateCamera(
                    educationSettings.position,
                    educationSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            case 'experiences':
                animateCamera(
                    experiencesSettings.position,
                    experiencesSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            case 'everis':
                animateCamera(
                    everisSettings.position,
                    everisSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            case 'contacts':
                animateCamera(
                    contactsSettings.position,
                    contactsSettings.target,
                    animationsTime,
                    'sine'
                );
                break;

            default:
                animateToExplore(
                    exploreSettings.position,
                    exploreSettings.target,
                    0,
                    0,
                    1.5,
                    1.5,
                    'slowmo'
                );
                break;
        }
    }, [phase]);

    return (
        <OrbitControls
            makeDefault
            ref={cameraControlsRef}
            args={[camera, gl]}
            rotateSpeed={0.2}
            zoomSpeed={2}
            enablePan={false}
            maxDistance={7.3}
        />
    );
};

export default CameraScene;

// TODO: Drei Resize 'https://github.com/pmndrs/drei#resize'
