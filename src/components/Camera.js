import { useState, useEffect, useRef } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { CameraControls, OrbitControls, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Camera = () => {
    const { camera, gl } = useThree();
    const CameraControlsRef = useRef();
    const [isMoving, setIsMoving] = useState(true);
    const [limitations, setLimitations] = useState(false);

    /**
     * Phases
     */
    const state = useInteractions((state) => state);

    /**
     * Loading Camera Settings
     */
    const cameraPositionLoading = { x: -0.006, y: 1, z: 0.05 };
    const cameraZoomLoading = 11;
    const targetPositionLoading = { x: 0.454, y: 0.55, z: 1 };

    /**
     * Explore Camera Settings
     */
    const cameraPositionExplore = { x: 4, y: 3.5, z: -5 };
    const cameraZoomExplore = 1.15;
    const targetPositionExplore = { x: 0, y: 0, z: 0 };

    /**
     * Explore Camera Limitations
     */
    const minPolarAngle = 0;
    const maxPolarAngle = Math.PI / 2 - 0.15;
    const minAzimuthAngle = Math.PI / 2;
    const maxAzimuthAngle = Math.PI;
    const maxDistance = 7.3;

    /**
     * Project Camera Settings
     */
    const cameraPositionProjects = { x: -0.1, y: 0.75, z: 0 };
    const cameraZoomProjects = 3;
    const targetPositionProjects = { x: -0.0725, y: 0.6, z: 1.4 };

    /**
     * Skills Camera Settings
     */
    const cameraPositionSkills = { x: -0.075, y: 0.85, z: 0.275 };
    const cameraZoomSkills = 2.5;
    const targetPositionSkills = { x: -0.07275, y: 0.35, z: 1.15 };

    /**
     * Education Camera Settings
     */
    const cameraPositionEducation = { x: -0.05, y: 1.2, z: 0.25 };
    const cameraZoomEducation = 1.75;
    const targetPositionEducation = { x: -0.065, y: 1.125, z: 1.5 };

    /**
     * Experiences Camera Settings
     */
    const cameraPositionExperiences = { x: -1.05, y: 1.15, z: 0.25 };
    const cameraZoomExperiences = 1.85;
    const targetPositionExperiences = { x: -1.05, y: 1.05, z: 1.55 };

    /**
     * Everis Camera Settings
     */
    const cameraPositionEveris = { x: -0.855, y: 0.95, z: 0.25 };
    const cameraZoomEveris = 7;
    const targetPositionEveris = { x: -0.855, y: 0.95, z: 1.55 };

    /**
     * Contacts Camera Settings
     */
    const cameraPositionContacts = { x: -0.36, y: 1, z: 0.85 };
    const cameraZoomContacts = 4;
    const targetPositionContacts = { x: -0.425, y: 0.275, z: 1.15 };

    /**
     * Active Camera Settings
     */
    const cameraPosition = cameraPositionLoading;
    const cameraZoom = cameraZoomLoading;
    const targetPosition = targetPositionLoading;

    /**
     * Set Camera is Moving
     */
    useEffect(() => {
        if (isMoving) {
            CameraControlsRef.current.enablePan = true;
            CameraControlsRef.current.enableRotate = true;
        } else {
            CameraControlsRef.current.enablePan = false;
            CameraControlsRef.current.enableRotate = false;
        }
    }, [isMoving]);

    /**
     * Set Limitations
     */
    useEffect(() => {
        if (limitations === true) {
            CameraControlsRef.current.minPolarAngle = minPolarAngle;
            CameraControlsRef.current.maxPolarAngle = maxPolarAngle;
            CameraControlsRef.current.minAzimuthAngle = minAzimuthAngle;
            CameraControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
            CameraControlsRef.current.maxDistance = maxDistance;
        } else {
            CameraControlsRef.current.minPolarAngle = 0;
            CameraControlsRef.current.maxPolarAngle = Math.PI;
            CameraControlsRef.current.minAzimuthAngle = Infinity;
            CameraControlsRef.current.maxAzimuthAngle = Infinity;
        }
    }, [limitations]);

    /**
     * Function to Animate Camera
     * When the phase change call this function
     * ---
     */
    const moveTheCamera = (
        cameraX,
        cameraY,
        cameraZ,
        delayMove,
        durationMove,
        animationMoveType
    ) => {
        gsap.to(camera.position, {
            x: cameraX,
            y: cameraY,
            z: cameraZ,
            delay: delayMove,
            duration: durationMove,
            ease: animationMoveType
        });
    };

    const zoomTheCamera = (zoomCamera, delayZoom, zoomDuration, zoomAnimationType) => {
        gsap.to(camera, {
            zoom: zoomCamera,
            onUpdate: () => {
                camera.updateProjectionMatrix();
            },
            delay: delayZoom,
            duration: zoomDuration,
            ease: zoomAnimationType
        });
    };

    const targetOfTheCamera = (
        taegetX,
        taegetY,
        taegetZ,
        delayTarget,
        durationTarget,
        animationTargetType,
        onComplete
    ) => {
        gsap.to(CameraControlsRef.current?.target, {
            x: taegetX,
            y: taegetY,
            z: taegetZ,
            delay: delayTarget,
            duration: durationTarget,
            ease: animationTargetType,
            onUpdate: () => {
                CameraControlsRef.current?.update();
            },
            onComplete: onComplete
        });
    };

    const animateTheCamera = (
        cameraX,
        cameraY,
        cameraZ,
        delayMove,
        durationMove,
        animationMoveType,
        zoomCamera,
        delayZoom,
        zoomDuration,
        zoomAnimationType,
        taegetX,
        taegetY,
        taegetZ,
        delayTarget,
        durationTarget,
        animationTargetType,
        onComplete
    ) => {
        moveTheCamera(cameraX, cameraY, cameraZ, delayMove, durationMove, animationMoveType);
        zoomTheCamera(zoomCamera, delayZoom, zoomDuration, zoomAnimationType);
        targetOfTheCamera(
            taegetX,
            taegetY,
            taegetZ,
            delayTarget,
            durationTarget,
            animationTargetType,
            onComplete
        );
    };

    // End Function ---------------------

    /**
     * Function to Animate Camera
     * Zoom out to return to Explore Mode
     * ---
     */

    // Wheel
    window.addEventListener('wheel', (e) => {
        if (e.wheelDeltaY > 0) {
            // zoomIn
            return;
        } else {
            if (
                state.phase !== 'loading' &&
                state.phase !== 'loaded' &&
                state.phase !== 'explore' &&
                state.phase !== 'Explore'
            ) {
                state.back();
            }
        }
    });

    // Pinch Out

    // End Function ---------------------

    /**
     * Animations
     */
    useEffect(() => {
        switch (state.phase) {
            /**
             * From Loading to Explore mode
             */
            case 'explore':
                setIsMoving(true);
                animateTheCamera(
                    cameraPositionExplore.x, // cameraX
                    cameraPositionExplore.y, // cameraY
                    cameraPositionExplore.z, // cameraZ
                    1, // delayMove
                    2, // durationMove
                    'power4.in', // typeMove
                    cameraZoomExplore, //cameraZoom
                    0, // delayZoom
                    2, // durationZoom
                    'sine', // typeZoom
                    targetPositionExplore.x, // targetX
                    targetPositionExplore.y, // targetY
                    targetPositionExplore.z, // targetZ
                    1, // delayTarget
                    2, // durationTarget
                    'power4.in', // typeTarget
                    () => {
                        setLimitations(true);
                    } // onComplete
                );

                break;

            /**
             * From Projects to explore mode
             */
            case 'Explore':
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionExplore.x, // cameraX
                    cameraPositionExplore.y, // cameraY
                    cameraPositionExplore.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomExplore, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionExplore.x, // targetX
                    targetPositionExplore.y, // targetY
                    targetPositionExplore.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setLimitations(true);
                    } // onComplete
                );

                break;

            /**
             * Phase => Projects
             */
            case 'projects':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionProjects.x, // cameraX
                    cameraPositionProjects.y, // cameraY
                    cameraPositionProjects.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomProjects, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionProjects.x, // targetX
                    targetPositionProjects.y, // targetY
                    targetPositionProjects.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            /**
             * Phase => Skills
             */
            case 'skills':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionSkills.x, // cameraX
                    cameraPositionSkills.y, // cameraY
                    cameraPositionSkills.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomSkills, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionSkills.x, // targetX
                    targetPositionSkills.y, // targetY
                    targetPositionSkills.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            /**
             * Phase => Education
             */
            case 'education':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionEducation.x, // cameraX
                    cameraPositionEducation.y, // cameraY
                    cameraPositionEducation.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomEducation, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionEducation.x, // targetX
                    targetPositionEducation.y, // targetY
                    targetPositionEducation.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            /**
             * Phase => Experiences
             */
            case 'experiences':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionExperiences.x, // cameraX
                    cameraPositionExperiences.y, // cameraY
                    cameraPositionExperiences.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomExperiences, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionExperiences.x, // targetX
                    targetPositionExperiences.y, // targetY
                    targetPositionExperiences.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            /**
             * Phase => Experiences => Everis
             */
            case 'everis':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionEveris.x, // cameraX
                    cameraPositionEveris.y, // cameraY
                    cameraPositionEveris.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomEveris, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionEveris.x, // targetX
                    targetPositionEveris.y, // targetY
                    targetPositionEveris.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            /**
             * Phase => Contacts
             */
            case 'contacts':
                setLimitations(false);
                setIsMoving(true);

                animateTheCamera(
                    cameraPositionContacts.x, // cameraX
                    cameraPositionContacts.y, // cameraY
                    cameraPositionContacts.z, // cameraZ
                    0, // delayMove
                    1.5, // durationMove
                    'sine', // typeMove
                    cameraZoomContacts, //cameraZoom
                    0, // delayZoom
                    1.5, // durationZoom
                    'sine', // typeZoom
                    targetPositionContacts.x, // targetX
                    targetPositionContacts.y, // targetY
                    targetPositionContacts.z, // targetZ
                    0, // delayTarget
                    1.5, // durationTarget
                    'sine', // typeTarget
                    () => {
                        setIsMoving(false);
                    } // onComplete
                );

                break;

            default:
                camera.position.set(
                    cameraPositionLoading.x,
                    cameraPositionLoading.y,
                    cameraPositionLoading.z
                );
        }
    }, [state.phase]);

    return (
        <OrbitControls
            ref={CameraControlsRef}
            camera={camera}
            gl={gl}
            target={[targetPosition.x, targetPosition.y, targetPosition.z]}
            rotateSpeed={0.2}
            zoomSpeed={2}
        />

        // <CameraControls
        //     ref={CameraControlsRef}
        //     camera={camera}
        //     enabled
        //     minPolarAngle={0}
        //     maxPolarAngle={Math.PI / 2}
        //     minAzimuthAngle={Math.PI / 2}
        //     maxAzimuthAngle={Math.PI}
        //     polarRotateSpeed={0.25}
        //     azimuthRotateSpeed={0.25}
        //     smoothTime={1.5}
        // />
    );
};

export default Camera;
