import React from 'react';
import styled from 'styled-components';

const TabletScreen = () => {
    const Screen = styled.div`
        width: 400px;
        height: 225px;
        h1 {
            margin: 0.3rem 0;
            text-align: center;
            font-size: 1.5rem;
        }

        .skills {
            width: 100%;
            height: 11.5rem;
            background-color: red;
        }
    `;
    return (
        <Screen>
            <h1 className="montserrat">Skills</h1>
            <div className="skills"></div>
        </Screen>
    );
};
export default TabletScreen;
