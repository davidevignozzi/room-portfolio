import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhoneCall, FiGithub, FiDownload } from 'react-icons/fi';

const PhoneScreen = () => {
    const Screen = styled.div`
        width: 400px;
        height: 750px;
        background-color: #222222;
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
                    font-size: larger;
                    font-weight: 600;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                }

                .description {
                    font-weight: 300;

                    span {
                        font-weight: 600;
                    }
                }
            }
        }
    `;

    const [messageVisible, setMessageVisible] = useState(false);

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

    return (
        <Screen className="montserrat">
            <a download href={'./assets/downloads/CV-Davide-Vignozzi.pdf'} className="notify">
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

            <a href="mailto:davide.vignozzi@gmail.com" target="_blank" className="notify">
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

            <div onClick={showMessage} className="notify">
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
            </div>

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

            <a href="https://github.com/davidevignozzi" target="_blank" className="notify">
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
        </Screen>
    );
};

export default PhoneScreen;
