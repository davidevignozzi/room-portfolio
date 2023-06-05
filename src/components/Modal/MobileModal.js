import React, { useState } from 'react';
import { isBrowser } from 'react-device-detect';

const MobileModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        isBrowser ||
        (isModalOpen && (
            <div className="modal-overlay">
                <div className="modal fonted">
                    <div className="modal-close" onClick={() => setIsModalOpen(false)}>
                        <span>X</span>
                    </div>

                    <div className="modal-content">
                        <h2>Warning</h2>
                        <h4>Mobile Version in Progress</h4>
                        <p>Open it from your Desktop</p>
                    </div>
                </div>
            </div>
        ))
    );
};

export default MobileModal;
