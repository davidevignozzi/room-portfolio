import { useState, useEffect, useRef } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { CameraControls, OrbitControls, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Camera = () => {
    const { camera, gl } = useThree();
    const CameraControlsRef = useRef();

    /**
     * Phases
     */
    const state = useInteractions((state) => state);
    // const start = useInteractions((state) => state.start);
    const back = useInteractions((state) => state.back);
    const projects = useInteractions((state) => state.projects);

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
     * TODO
     * minZoom
     * maxZoom
     *
     * Try to fix the desk foot.
     */

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
     * Contacts Camera Settings
     */
    const cameraPositionContacts = { x: -0.25, y: 1, z: 0.7 };
    const cameraZoomContacts = 3;
    const targetPositionContacts = { x: -0.425, y: 0.275, z: 1.175 };

    /**
     * Active Camera Settings
     */
    const cameraPosition = cameraPositionLoading;
    const cameraZoom = cameraZoomLoading;
    const targetPosition = targetPositionLoading;

    /**
     * Animations
     */
    useEffect(() => {
        switch (state.phase) {
            /**
             * From Loading to Explore mode
             */
            case 'explore':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionExplore.x,
                    y: cameraPositionExplore.y,
                    z: cameraPositionExplore.z,
                    delay: 1,
                    duration: 2,
                    ease: 'power4.in'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomExplore,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 2
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionExplore.x,
                    y: targetPositionExplore.y,
                    z: targetPositionExplore.z,
                    delay: 1,
                    duration: 2,
                    ease: 'power4.in',
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    }
                });

                break;

            /**
             * From Projects to explore mode
             */
            case 'Explore':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionExplore.x,
                    y: cameraPositionExplore.y,
                    z: cameraPositionExplore.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomExplore,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionExplore.x,
                    y: targetPositionExplore.y,
                    z: targetPositionExplore.z,
                    duration: 1.5,
                    ease: 'sine',
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    }
                });

                break;

            /**
             * Phase => Projects
             */
            case 'projects':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionProjects.x,
                    y: cameraPositionProjects.y,
                    z: cameraPositionProjects.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomProjects,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionProjects.x,
                    y: targetPositionProjects.y,
                    z: targetPositionProjects.z,
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });
                break;

            /**
             * Phase => Skills
             */
            case 'skills':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionSkills.x,
                    y: cameraPositionSkills.y,
                    z: cameraPositionSkills.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomSkills,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionSkills.x,
                    y: targetPositionSkills.y,
                    z: targetPositionSkills.z,
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                break;

            /**
             * Phase => Education
             */
            case 'education':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionEducation.x,
                    y: cameraPositionEducation.y,
                    z: cameraPositionEducation.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomEducation,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionEducation.x,
                    y: targetPositionEducation.y,
                    z: targetPositionEducation.z,
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                break;

            /**
             * Phase => Experiences
             */
            case 'experiences':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionExperiences.x,
                    y: cameraPositionExperiences.y,
                    z: cameraPositionExperiences.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomExperiences,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionExperiences.x,
                    y: targetPositionExperiences.y,
                    z: targetPositionExperiences.z,
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                break;

            /**
             * Phase => Contacts
             */
            case 'contacts':
                // Camera position
                gsap.to(camera.position, {
                    x: cameraPositionContacts.x,
                    y: cameraPositionContacts.y,
                    z: cameraPositionContacts.z,
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera zoom
                gsap.to(camera, {
                    zoom: cameraZoomContacts,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                // Camera target
                gsap.to(CameraControlsRef.current?.target, {
                    x: targetPositionContacts.x,
                    y: targetPositionContacts.y,
                    z: targetPositionContacts.z,
                    onUpdate: () => {
                        CameraControlsRef.current?.update();
                    },
                    duration: 1.5,
                    ease: 'sine'
                });

                break;

            default:
                camera.position.set(
                    cameraPositionLoading.x,
                    cameraPositionLoading.y,
                    cameraPositionLoading.z
                );
        }
    }, [state.phase]);

    /**
     * Zoom out back home
     */
    useFrame(() => {
        switch (state.phase) {
            /**
             * Zoom out from projects
             */
            case 'projects':
                if (
                    camera.position.x.toFixed(2) < -0.11 &&
                    camera.position.y.toFixed(2) < 0.86 &&
                    camera.position.z.toFixed(1) < -0.4 &&
                    camera.zoom === cameraZoomProjects
                ) {
                    back();
                }
                break;

            /**
             * Zoom out from skills
             */
            case 'skills':
                if (
                    camera.position.x.toFixed(2) <= -0.04 &&
                    camera.position.y.toFixed(2) >= 0.8 &&
                    camera.position.z.toFixed(2) <= -0.21 &&
                    camera.zoom === cameraZoomSkills
                ) {
                    back();
                }
                break;

            /**
             * Zoom out from education
             */
            case 'education':
                if (
                    camera.position.x.toFixed(2) >= -0.05 &&
                    camera.position.y.toFixed(2) >= 1.22 &&
                    camera.position.z.toFixed(2) < -0.2 &&
                    camera.zoom === cameraZoomEducation
                ) {
                    back();
                }

                break;
        }
    });

    return (
        <OrbitControls
            ref={CameraControlsRef}
            camera={camera}
            gl={gl}
            target={[targetPosition.x, targetPosition.y, targetPosition.z]}
            // enablePan={false}
            rotateSpeed={0.2}
            zoomSpeed={2}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI / 2}
            // // maxPolarAngle={undefined}
            // minAzimuthAngle={Math.PI / 2}
            // maxAzimuthAngle={Math.PI}
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
