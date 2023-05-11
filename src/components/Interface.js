import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { MdHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Interface = () => {
    const state = useInteractions((state) => state);
    const [phase, setPhase] = useState();

    // Capitalize first letter
    useEffect(() => {
        setPhase(`${state.phase.charAt(0).toUpperCase()}${state.phase.slice(1)}`);
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
                        <b>{phase}</b>
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
