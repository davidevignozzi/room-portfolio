import React from 'react';
import styled from 'styled-components';
import useInteractions from '../../../../utils/stores/useInteractions';

const EverisBadge = () => {
    const BadgeContent = styled.div`
        width: 1680px;
        height: 1180px;
        border-radius: 10rem;
        padding: 10rem 5rem 2.5rem 5rem;

        .badge-wrapper {
            width: 100%;
            height: 100%;
            /* border-radius: 10rem; */
        }

        .info {
            width: 100%;
            height: 100%;
            display: flex;

            .info-content {
                width: 60%;
                height: 100%;

                h1 {
                    font-size: 6rem;
                    color: #333333;
                }

                h2 {
                    font-size: 5rem;
                    color: #555555;
                }

                .logo {
                    margin-top: 20rem;
                    width: 100%;
                    img {
                        width: 75%;
                    }
                }
            }

            .foto {
                margin-top: 10rem;
                width: 40%;
                height: 600px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    `;

    const state = useInteractions((state) => state);

    return (
        <BadgeContent
            className={`${state.phase === 'experiences' && 'zoomIn'}`}
            onClick={() => state.phase === 'experiences' && state.everis()}
        >
            <div className="badge-wrapper">
                <div className="info">
                    <div className="info-content montserrat">
                        <h1>Davide Vignozzi</h1>
                        <h2>Front end Developer Jr</h2>

                        <div className="logo">
                            <img src="./assets/images/experiences/everis.png" alt="Everis" />
                        </div>
                    </div>

                    <div className="foto">
                        <img src="./assets/images/Animoji.png" alt="Davide Vignozzi" />
                    </div>
                </div>
            </div>
        </BadgeContent>
    );
};

export default EverisBadge;
