import React, { useState } from 'react';
import { FiMail, FiPhoneCall, FiGithub, FiDownload } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const ContactsPhone = () => {
    const [messageVisible, setMessageVisible] = useState(false);

    /**
     * Copy Phone Number
     */
    const copyText = () => {
        navigator.clipboard.writeText('+39 340459604');
    };

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

    return (
        <div className="phone-container">
            {/* CV */}
            <a
                download
                href={'./assets/downloads/CV-Davide-Vignozzi.pdf'}
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                        <FiDownload />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">Curriculum</h1>
                    <p className="phone-notification-description">
                        Download my <span>Curriculum</span>
                    </p>
                </div>
            </a>

            {/* MAIL */}
            <a
                href="mailto:davide.vignozzi@gmail.com"
                target="_blank"
                className="phone-notification"
            >
                <div className="phone-notification-icon centered">
                    <i style={{ backgroundColor: '#56b3ee' }}>
                        <FiMail />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">Mail</h1>
                    <p className="phone-notification-description">
                        Send Me an email at <span>davide.vignozzi@gmail.com</span>
                    </p>
                </div>
            </a>

            {/* PHONE NUMBER */}
            <div onClick={showMessage} className="phone-notification">
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#2dcb73' }}>
                        <FiPhoneCall />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">Phone</h1>
                    <p className="phone-notification-description">
                        Call me at <span>+39 3404596054</span>
                    </p>
                </div>
            </div>

            {/* MESSAGE => phone number copied */}
            {messageVisible && (
                <div className="phone-notification">
                    <div className="phone-notification-icon">
                        <i style={{ backgroundColor: '#2dcb73' }}>
                            <FiPhoneCall />
                        </i>
                    </div>
                    <div className="phone-notification-info">
                        <h1 className="phone-notification-title">Phone</h1>
                        <p className="phone-notification-description">
                            Number copied into the clipboard
                        </p>
                    </div>
                </div>
            )}

            {/* LINKEDIN */}
            <a
                href="https://www.linkedin.com/in/davidevignozzi/"
                target="_blank"
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#0077b5' }}>
                        <FaLinkedin />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">LinkedIn</h1>
                    <p className="phone-notification-description">
                        Message me on <span>LinkedIn</span>
                    </p>
                </div>
            </a>

            {/* GITHUB */}
            <a
                href="https://github.com/davidevignozzi"
                target="_blank"
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                        <FiGithub />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">GitHub</h1>
                    <p className="phone-notification-description">
                        Message me on <span>GitHub</span>
                    </p>
                </div>
            </a>

            <div id="phone-bar"></div>
        </div>
    );
};

export default ContactsPhone;
