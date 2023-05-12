import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { MdHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Interface = () => {
    const state = useInteractions((state) => state);

    const phases = [
        'Loading',
        'Explore',
        'Projects',
        'Skills',
        'Education',
        'Experiences',
        'Everis',
        'Contacts'
    ];

    const [activePhase, setActivePhase] = useState(phases[0]);

    useEffect(() => {
        // style={{
        //     transform: `translateX(-${activePhase * 10}rem)`
        // }}
        gsap.to('.label-phase-content', {
            x: -activePhase * 158.5,
            duration: 0.75,
            ease: 'sine'
        });
    }, [activePhase]);

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
            case 'experiences':
                setActivePhase(5);
                break;
            case 'everis':
                setActivePhase(6);
                break;
            case 'contacts':
                setActivePhase(7);
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
            case 'explore':
            case 'Explore':
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
                state.start();
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

    return (
        <div id="interface">
            <div className="controls-wrapper">
                <button className="home-button" onClick={home}>
                    <MdHome />
                </button>
                <div className="interface-controls">
                    <button className="prev" onClick={prevPhase}>
                        <MdNavigateBefore />
                    </button>
                    <div className="label montserrat">
                        {/* <b>{phase}</b> */}
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
