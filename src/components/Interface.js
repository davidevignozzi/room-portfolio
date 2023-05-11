import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useInteractions from '../utils/stores/useInteractions';

const Interface = () => {
    const InterfaceSection = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        font-family: 'Bebas Neue', cursive;

        .controlsWrapper {
            position: absolute;
            width: 100%;
            bottom: 2.5rem;
            display: flex;
            justify-content: center;

            .controls {
                /* width: 256px; */
                /* height: 56px; */
                height: 3.25rem;
                display: flex;
                justify-content: space-between;
                color: #333;
                border-radius: 30px;

                // glass effect
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                backdrop-filter: blur(6.5px);
                -webkit-backdrop-filter: blur(6.5px);
                pointer-events: all;
            }

            button {
                background-color: transparent;
                width: 3.25rem;
                height: 100%;
                border: none;
                border-radius: 30px;
                cursor: pointer;
            }

            .prev {
                border-left: 1px solid;
                border-color: #dcdcdc;
                margin-left: -7.5px;
            }

            .label {
                width: 10rem;
                padding: 0 2.25rem;
                border-left: 1px solid white;
                border-right: 1px solid white;
                border-color: #dcdcdc;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    `;

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
        <InterfaceSection className="gsap-interface">
            <div className="controlsWrapper">
                <div className="controls">
                    <button className="home" onClick={home}>
                        H
                    </button>
                    <button className="prev" onClick={prevPhase}>
                        P
                    </button>
                    <div className="label montserrat">
                        <b>{phase}</b>
                    </div>
                    <button className="next" onClick={nextPhase}>
                        N
                    </button>
                </div>
            </div>
        </InterfaceSection>
    );
};

export default Interface;
