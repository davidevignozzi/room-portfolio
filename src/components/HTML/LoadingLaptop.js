import React from 'react';

const LoadingLaptop = () => {
    return (
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
                    <div className="loading-typing-container">
                        <h1 className="loading-typing-content fonted">
                            Hi, I'm Davide and I'm a creative front end developer, welcome in my
                            portfolio.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoadingLaptop;
