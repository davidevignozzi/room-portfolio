import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { labels } from '../../../../labels';
import useInteractions from '../../../../utils/stores/useInteractions';

const LaptopScreen = () => {
    const text = useRef();
    const start = useInteractions((state) => state.start);

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
        const typed = new Typed(text.current, {
            strings: [
                `${labels.itaWelcome} <span class='accented'>Portfolio.</span>`,
                `${labels.itaWelcome} <span class='accented'>Studio.</span>`
            ],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1000,
            smartBackspace: true,
            loop: false
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    });

    return (
        <div className="wrapper-laptop">
            <NoteApp>
                <div className="topbar">
                    <div className="circle red" />
                    <div className="circle yellow" />
                    <div className="circle green" />
                </div>
                <TypedText>
                    <span className="montserrat" ref={text}></span>
                </TypedText>
            </NoteApp>
        </div>
    );
};

export default LaptopScreen;
