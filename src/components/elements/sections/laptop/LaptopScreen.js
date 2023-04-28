import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import useInteractions from '../../../../utils/stores/useInteractions';

const LaptopScreen = () => {
    const state = useInteractions((state) => state);
    const text = useRef(null);
    const typed = useRef(null);
    const [completed, setCompleted] = useState(false);

    const NoteApp = styled.div`
        width: 90%;
        height: 80%;
        border-radius: 0.5rem;
        background-color: #fefefe;

        .topbar {
            height: 2rem;
            border-bottom: 1px solid #333333;
            display: flex;
            align-items: center;
            border-radius: 0.5rem 0.5rem 0 0;
            background-color: #333333;
            .circle {
                width: 0.75rem;
                height: 0.75rem;
                margin: 0.25rem;
                border-radius: 99%;

                &:first-of-type {
                    margin-left: 0.5rem;
                }
            }

            .red {
                background-color: red;
            }
            .yellow {
                background-color: orange;
            }
            .green {
                background-color: green;
            }
        }
    `;

    const TypedText = styled.h1`
        /* margin-top: 3rem; */
        padding: 3rem;
        font-size: 1.25rem;
        color: #333333;
    `;

    useEffect(() => {
        if (state.phase === 'loaded') {
            const typed = new Typed(text.current, {
                strings: [
                    `Hi I'm Davide, i'm a creative front end developer. Welcome in my <span class='accented'>Portfolio.</span>`,
                    `Hi I'm Davide, i'm a creative front end developer. Welcome in my <span class='accented'>Studio.</span>`
                ],
                typeSpeed: 30,
                backSpeed: 25,
                backDelay: 1000,
                smartBackspace: true,
                loop: false,
                onComplete() {
                    setTimeout(() => {
                        setCompleted(true);
                        state.start();
                    }, 500);
                }
            });

            // Destropying
            return () => {
                typed.destroy();
            };
        }
    }, [state.phase]);

    return (
        <div className="wrapper-laptop">
            <NoteApp>
                <div className="topbar">
                    <div className="circle red" />
                    <div className="circle yellow" />
                    <div className="circle green" />
                </div>
                <TypedText>
                    <span className="montserrat" ref={text}>
                        {completed && (
                            <span>
                                Hi I'm Davide, i'm a creative front end developer. Welcome in my{' '}
                                <span className="accented">Studio.</span>
                            </span>
                        )}
                    </span>
                </TypedText>
            </NoteApp>
        </div>
    );
};

export default LaptopScreen;
