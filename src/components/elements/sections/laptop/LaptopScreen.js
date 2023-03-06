import React from 'react';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { labels } from '../../../../labels';
import useInteractions from '../../../../utils/stores/useInteractions';

const LaptopScreen = () => {
    const text = useRef();
    const start = useInteractions((state) => state.start);

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
    }, []);

    return (
        <div className="wrapper">
            <div className="welcome montserrat">
                <h1>
                    <span ref={text}></span>
                </h1>
            </div>
        </div>
    );
};

export default LaptopScreen;
