import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { MdHome, MdOutlineHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Interface = () => {
    const state = useInteractions((state) => state);

    const animationsTime = useInteractions((state) => state.animationsTime);
    /**
     * Phases Array
     */
    const phases = [
        'Loading',
        'Explore',
        'Projects',
        'Skills',
        'Education',
        'Experiences',
        'Contacts'
    ];

    // Index of active phase will be shown in the slider
    const [activePhase, setActivePhase] = useState(phases[0]);

    useEffect(() => {
        switch (state.phase) {
            case 'loading':
                break;
            case 'projects':
                setActivePhase(2);
                break;
            case 'skills':
                setActivePhase(3);
                break;
            case 'education':
                setActivePhase(4);
                break;
            case 'everis':
            case 'experiences':
                setActivePhase(5);
                break;
            case 'contacts':
                setActivePhase(6);
                break;
            default:
                setActivePhase(1);
                break;
        }
    }, [state.phase]);

    /**
     * onClick on the prev button
     */
    const prevPhase = () => {
        switch (state.phase) {
            case 'projects':
                state.explore();
                break;
            case 'skills':
                state.projects();
                break;
            case 'education':
                state.skills();
                break;
            case 'experiences':
                state.education();
                break;
            case 'everis':
            case 'contacts':
                state.experiences();
                break;
            default:
                break;
        }
    };

    /**
     * onClick on the next button
     */
    const nextPhase = () => {
        switch (state.phase) {
            case 'start':
            case 'explore':
                state.projects();
                break;
            case 'projects':
                state.skills();
                break;
            case 'skills':
                state.education();
                break;
            case 'education':
            case 'everis':
                state.experiences();
                break;
            case 'experiences':
                state.contacts();
                break;
            case 'contacts':
                state.explore();
                break;
            default:
                break;
        }
    };

    /**
     * onClick on the home button
     */
    const home = () => {
        state.explore();
    };

    /**
     * Slider Animation
     */
    useEffect(() => {
        gsap.to('.label-phase-content', {
            x: -activePhase * 158.5,
            duration: animationsTime,
            ease: 'sine'
        });
    }, [activePhase]);

    return (
        <div id="interface">
            <div className="controls-wrapper">
                <button className="home-button" onClick={home}>
                    {state.phase === 'explore' ? <MdHome /> : <MdOutlineHome />}
                </button>
                <div className="interface-controls">
                    <button className="prev" onClick={prevPhase}>
                        <MdNavigateBefore />
                    </button>
                    <div className="label montserrat">
                        <div className="label-phase">
                            {phases.map((phase, index) => {
                                return (
                                    <div key={index} className="label-phase-content">
                                        <span className={` ${activePhase === index && 'active'}`}>
                                            {phase}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <button className="next" onClick={nextPhase}>
                        <MdNavigateNext />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Interface;
