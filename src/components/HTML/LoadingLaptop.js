import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import useInteractions from '../../utils/stores/useInteractions';

const LoadingLaptop = () => {
    const state = useInteractions((state) => state);

    return (
        state.phase !== 'loading' && (
            <section id="laptop">
                <div className="window">
                    <div className="window--tob-bar">
                        <div className="window--tob-bar-circles">
                            <div className="circle bg-red"></div>
                            <div className="circle bg-orange"></div>
                            <div className="circle bg-green"></div>
                        </div>
                    </div>
                    <div className="window-content">
                        <div className="loading-typing-container fonted">
                            <TypeAnimation
                                sequence={[
                                    `Hi, I'm Davide and I'm a creative front end developer, welcome in my portfolio.`,
                                    1000,
                                    "Hi, I'm Davide and I'm a creative front end developer, welcome in my studio.",
                                    1000,
                                    () => state.start()
                                ]}
                                style={{
                                    fontSize: '4rem'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    );
};

export default LoadingLaptop;
