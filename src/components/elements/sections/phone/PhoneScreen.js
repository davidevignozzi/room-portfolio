import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhoneCall, FiGithub, FiDownload } from 'react-icons/fi';
import useInteractions from '../../../../utils/stores/useInteractions';
import { gsap } from 'gsap';

const PhoneScreen = () => {
    const Screen = styled.div`
        width: 400px;
        height: 750px;
        background-color: #222222;
        overflow: hidden;

        .gsap-contacts {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: end;

            .notify {
                width: 100%;
                height: 100px;
                background-color: rgba(255, 255, 255, 0.35);
                border-radius: 1rem;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                color: #fefefe;
                text-decoration: none;
                text-align: start;
                cursor: pointer;

                .icon {
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    i {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 1rem;
                        padding: 0.5rem;
                        font-size: 3.5rem;
                    }
                }
                .info {
                    width: calc(100% - 100px);
                    padding-left: 0.7rem;

                    .title {
                        font-size: large;
                        font-weight: 600;
                        color: #ffffff;
                        margin-bottom: 0.33rem;
                    }

                    .description {
                        font-weight: 300;
                        font-size: 1.15rem;

                        span {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    `;

    const [opacity, setOpacity] = useState(0);
    const [messageVisible, setMessageVisible] = useState(false);
    const state = useInteractions((state) => state);

    /**
     * Show message for 4 seconds
     */
    const showMessage = () => {
        // Copy phone Number
        copyText();
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 4000);
    };

    /**
     * Copy Number
     */
    const copyText = () => {
        navigator.clipboard.writeText('+39 340459604');
    };

    /**
     *  onPhase Contacts show the screen
     */
    useEffect(() => {
        switch (state.phase) {
            case 'contacts':
                setOpacity(1);
                break;

            default:
                setOpacity(0);
                break;
        }
    }, [state.phase]);

    return (
        <Screen>
            <div className="gsap-contacts montserrat" style={{ opacity: opacity }}>
                <a
                    download
                    href={'./assets/downloads/CV-Davide-Vignozzi.pdf'}
                    id="notify-1"
                    className="notify"
                >
                    <div className="icon">
                        <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                            <FiDownload />
                        </i>
                    </div>
                    <div className="info">
                        <div className="title">Curriculum</div>
                        <div className="description">
                            Download my <span>Curriculum</span>
                        </div>
                    </div>
                </a>

                <a
                    href="mailto:davide.vignozzi@gmail.com"
                    target="_blank"
                    id="notify-2"
                    className="notify"
                >
                    <div className="icon">
                        <i style={{ backgroundColor: '#56b3ee' }}>
                            <FiMail />
                        </i>
                    </div>
                    <div className="info">
                        <div className="title">Mail</div>
                        <div className="description">
                            Send Me an email at <span>davide.vignozzi@gmail.com</span>
                        </div>
                    </div>
                </a>

                <button onClick={showMessage} id="notify-3" className="notify">
                    <div className="icon">
                        <i style={{ backgroundColor: '#2dcb73' }}>
                            <FiPhoneCall />
                        </i>
                    </div>
                    <div className="info">
                        <div className="title">Phone</div>
                        <div className="description">
                            Call me at <span>+39 3404596054</span>
                        </div>
                    </div>
                </button>

                {messageVisible && (
                    <div className="notify message">
                        <div className="icon">
                            <i style={{ backgroundColor: '#2dcb73' }}>
                                <FiPhoneCall />
                            </i>
                        </div>
                        <div className="info">
                            <div className="title">Phone</div>
                            <div className="description">Number copied into the clipboard</div>
                        </div>
                    </div>
                )}

                <a
                    href="https://www.linkedin.com/in/davidevignozzi/"
                    target="_blank"
                    id="notify-4"
                    className="notify"
                >
                    <div className="icon">
                        <i style={{ backgroundColor: '#0077b5' }}>
                            <FaLinkedin />
                        </i>
                    </div>
                    <div className="info">
                        <div className="title">LinkedIn</div>
                        <div className="description">
                            Message me on <span>LinkedIn</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://github.com/davidevignozzi"
                    target="_blank"
                    id="notify-5"
                    className="notify"
                >
                    <div className="icon">
                        <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                            <FiGithub />
                        </i>
                    </div>
                    <div className="info">
                        <div className="title">GitHub</div>
                        <div className="description">
                            Message me on <span>GitHub</span>
                        </div>
                    </div>
                </a>
            </div>
        </Screen>
    );
};

export default PhoneScreen;
