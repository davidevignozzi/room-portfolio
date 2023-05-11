import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import useInteractions from '../utils/stores/useInteractions';
import gsap from 'gsap';

const CameraScene = () => {
    const { camera, gl } = useThree();
    const cameraControlsRef = useRef();

    const phase = useInteractions((state) => state.phase);

    /**
     * Camera setting for each phase
     */
    // * Explore
    const exploreSettings = {
        position: new THREE.Vector3(4, 3.5, -5),
        target: new THREE.Vector3(0, 0, 0)
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
        target: new THREE.Vector3(-1.012, 1.0675, 1.45)
    };
    // * Contacts
    const contactsSettings = {
        position: new THREE.Vector3(-0.5575, 0.65, 0.95),
        target: new THREE.Vector3(-0.575, 0.4, 1)
    };

    /**
     * Animate camera when phase change
     */
    //* Projects Animation
    const animateToExplore = () => {
        gsap.to(camera.position, {
            x: exploreSettings.position.x,
            y: exploreSettings.position.y,
            z: exploreSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: exploreSettings.target.x,
            y: exploreSettings.target.y,
            z: exploreSettings.target.z
        });
    };

    //* Projects Animation
    const animateToProjects = () => {
        gsap.to(camera.position, {
            x: projectsSettings.position.x,
            y: projectsSettings.position.y,
            z: projectsSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: projectsSettings.target.x,
            y: projectsSettings.target.y,
            z: projectsSettings.target.z
        });
    };

    //* Skills Animation
    const animateToSkills = () => {
        gsap.to(camera.position, {
            x: skillsSettings.position.x,
            y: skillsSettings.position.y,
            z: skillsSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: skillsSettings.target.x,
            y: skillsSettings.target.y,
            z: skillsSettings.target.z
        });
    };

    //* Education Animation
    const animateToEducation = () => {
        gsap.to(camera.position, {
            x: educationSettings.position.x,
            y: educationSettings.position.y,
            z: educationSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: educationSettings.target.x,
            y: educationSettings.target.y,
            z: educationSettings.target.z
        });
    };

    //* Experiences Animation
    const animateToExperiences = () => {
        gsap.to(camera.position, {
            x: experiencesSettings.position.x,
            y: experiencesSettings.position.y,
            z: experiencesSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: experiencesSettings.target.x,
            y: experiencesSettings.target.y,
            z: experiencesSettings.target.z
        });
    };

    //* Everis Animation
    const animateToEveris = () => {
        gsap.to(camera.position, {
            x: everisSettings.position.x,
            y: everisSettings.position.y,
            z: everisSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: everisSettings.target.x,
            y: everisSettings.target.y,
            z: everisSettings.target.z
        });
    };

    //* Contacts Animation
    const animateToContacts = () => {
        gsap.to(camera.position, {
            x: contactsSettings.position.x,
            y: contactsSettings.position.y,
            z: contactsSettings.position.z
        });
        gsap.to(cameraControlsRef.current.target, {
            x: contactsSettings.target.x,
            y: contactsSettings.target.y,
            z: contactsSettings.target.z
        });
    };

    useEffect(() => {
        switch (phase) {
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

    return <OrbitControls makeDefault ref={cameraControlsRef} args={[camera, gl]} />;
};

export default CameraScene;
