import React from 'react';
import { labels } from '../../../../labels';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useInteractions from '../../../../utils/stores/useInteractions';

const LaptopScreen = () => {
    const start = useInteractions((state) => state.start);

    const [prefix, flags] = useTypewriter({
        words: [labels.itaWelcome]
    });

    const [currentWord] = useTypewriter({
        words: ['Portfolio.', 'Studio.'],
        onLoopDone: () => {
            setTimeout(() => {
                start();
            }, 2000);
        }
    });

    const { isDone } = flags;

    return (
        <div className="wrapper">
            <div className="welcome">
                <h1>
                    {prefix}

                    {isDone && <span>{currentWord}</span>}

                    <span style={{ color: 'red' }}>
                        <Cursor />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default LaptopScreen;
