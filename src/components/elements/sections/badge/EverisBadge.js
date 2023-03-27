import React from 'react';
import styled from 'styled-components';

const EverisBadge = () => {
    const BadgeContent = styled.div`
        width: 1680px;
        height: 1180px;
        border-radius: 10rem;
        padding: 10rem 5rem 2.5rem 5rem;
        opacity: 0.5;

        .foto {
            width: 100%;
            height: 100%;
            background-color: blue;
            border-radius: 10rem;
            opacity: 0.7;
        }
    `;

    return (
        <BadgeContent>
            <div className="foto"></div>
        </BadgeContent>
    );
};

export default EverisBadge;
