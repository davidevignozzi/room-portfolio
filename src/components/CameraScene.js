import { useEffect, useRef, useState } from 'react';
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

    /**
     * Camera Limitations
     */
    const [isMoving, setIsMoving] = useState(true);
    const [limitations, setLimitations] = useState(false);

    const minPolarAngle = 0;
    const maxPolarAngle = Math.PI / 2 - 0.15;
    const minAzimuthAngle = Math.PI / 2;
    const maxAzimuthAngle = Math.PI;

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
        position: new THREE.Vector3(0.35, 0.67, 1),
        target: new THREE.Vector3(0.454, 0.525, 1.2)
    };
    // * Projects
    const projectsSettings = {
        position: new THREE.Vector3(-0.225, 0.725, 0.7),
        target: new THREE.Vector3(-0.225, 0.725, 1.75)
    };
    // * Skills
    const skillsSettings = {
        position: new THREE.Vector3(-0.235, 0.7, 0.75),
        target: new THREE.Vector3(-0.235, 0.505, 1)
    };
    // * Education
    const educationSettings = {
        position: new THREE.Vector3(-0.22, 1.25, 0.7),
        target: new THREE.Vector3(-0.22, 1.2, 1.375)
    };
    // * Experiences
    const experiencesSettings = {
        position: new THREE.Vector3(-1.2, 1.2, 0.675),
        target: new THREE.Vector3(-1.2, 1.2, 1.5)
    };
    // * Everis
    const everisSettings = {
        position: new THREE.Vector3(-1.012, 1.0675, 1.25),
        target: new THREE.Vector3(-1.012, 1.065, 1.45)
    };
    // * Contacts
    const contactsSettings = {
        position: new THREE.Vector3(-0.5575, 0.65, 0.95),
        target: new THREE.Vector3(-0.575, 0.4, 1)
    };

    /**
     * Animate camera when phase change
     */
    const tl = gsap.timeline();
    tl.add('toExplore');
    tl.add('toProjects');
    tl.add('toSkills');
    tl.add('toEducation');
    tl.add('toExperiences');
    tl.add('toEveris');
    tl.add('toContacts');

    // * Start Animation
    const animateStart = () => {
        gsap.to(camera.position, {
            x: loadingSettings.position.x - 0.225,
            y: loadingSettings.position.y + 0.25,
            z: loadingSettings.position.z - 0.5,
            duration: 2.5,
            ease: 'slowmo'
        });
        gsap.to(camera.position, {
            x: exploreSettings.position.x,
            y: exploreSettings.position.y,
            z: exploreSettings.position.z,
            delay: 2,
            ease: 'power2.in',
            duration: 1.5
        });
        gsap.to(cameraControlsRef.current.target, {
            x: exploreSettings.target.x,
            y: exploreSettings.target.y,
            z: exploreSettings.target.z,
            delay: 2.25,
            ease: 'power2.in',
            duration: 1.25,
            onComplete: () => {
                state.explore();
            }
        });
    };

    //* Explore Animation
    const animateToExplore = () => {
        tl.to(
            camera.position,
            {
                x: exploreSettings.position.x,
                y: exploreSettings.position.y,
                z: exploreSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                }
            },
            'toExplore'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: exploreSettings.target.x,
                y: exploreSettings.target.y,
                z: exploreSettings.target.z,
                onComplete: () => {
                    cameraControlsRef.current.minPolarAngle = minPolarAngle;
                    cameraControlsRef.current.maxPolarAngle = maxPolarAngle;
                    cameraControlsRef.current.minAzimuthAngle = minAzimuthAngle;
                    cameraControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
                }
            },
            'toExplore'
        );
    };

    //* Projects Animation
    const animateToProjects = () => {
        tl.to(
            camera.position,
            {
                x: projectsSettings.position.x,
                y: projectsSettings.position.y,
                z: projectsSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toProjects'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: projectsSettings.target.x,
                y: projectsSettings.target.y,
                z: projectsSettings.target.z
            },
            'toProjects'
        );
    };

    //* Skills Animation
    const animateToSkills = () => {
        tl.to(
            camera.position,
            {
                x: skillsSettings.position.x,
                y: skillsSettings.position.y,
                z: skillsSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toSkills'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: skillsSettings.target.x,
                y: skillsSettings.target.y,
                z: skillsSettings.target.z
            },
            'toSkills'
        );
    };

    //* Education Animation
    const animateToEducation = () => {
        tl.to(
            camera.position,
            {
                x: educationSettings.position.x,
                y: educationSettings.position.y,
                z: educationSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toEducation'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: educationSettings.target.x,
                y: educationSettings.target.y,
                z: educationSettings.target.z
            },
            'toEducation'
        );
    };

    //* Experiences Animation
    const animateToExperiences = () => {
        tl.to(
            camera.position,
            {
                x: experiencesSettings.position.x,
                y: experiencesSettings.position.y,
                z: experiencesSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toExperiences'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: experiencesSettings.target.x,
                y: experiencesSettings.target.y,
                z: experiencesSettings.target.z
            },
            'toExperiences'
        );
    };

    //* Everis Animation
    const animateToEveris = () => {
        tl.to(
            camera.position,
            {
                x: everisSettings.position.x,
                y: everisSettings.position.y,
                z: everisSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toEveris'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: everisSettings.target.x,
                y: everisSettings.target.y,
                z: everisSettings.target.z
            },
            'toEveris'
        );
    };

    //* Contacts Animation
    const animateToContacts = () => {
        tl.to(
            camera.position,
            {
                x: contactsSettings.position.x,
                y: contactsSettings.position.y,
                z: contactsSettings.position.z,
                onStart: () => {
                    cameraControlsRef.current.enabled = true;
                    cameraControlsRef.current.minPolarAngle = 0;
                    cameraControlsRef.current.maxPolarAngle = Math.PI;
                    cameraControlsRef.current.minAzimuthAngle = Infinity;
                    cameraControlsRef.current.maxAzimuthAngle = Infinity;
                },
                onComplete: () => {
                    cameraControlsRef.current.enabled = false;
                }
            },
            'toContacts'
        );
        tl.to(
            cameraControlsRef.current.target,
            {
                x: contactsSettings.target.x,
                y: contactsSettings.target.y,
                z: contactsSettings.target.z
            },
            'toContacts'
        );
    };

    useEffect(() => {
        switch (phase) {
            case 'loading':
                camera.position.set(
                    loadingSettings.position.x,
                    loadingSettings.position.y,
                    loadingSettings.position.z
                );
                cameraControlsRef.current.target = loadingSettings.target;

                setTimeout(() => {
                    animateStart();
                }, 1000);
                break;

            case 'start':
                animateStart();
                break;

            case 'projects':
                animateToProjects();
                break;

            case 'skills':
                animateToSkills();
                break;

            case 'education':
                animateToEducation();
                break;

            case 'experiences':
                animateToExperiences();
                break;

            case 'everis':
                animateToEveris();
                break;

            case 'contacts':
                animateToContacts();
                break;

            default:
                animateToExplore();
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
        />
    );
};

export default CameraScene;
