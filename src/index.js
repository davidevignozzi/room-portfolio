import React from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Interface from './components/Interface';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Debug ui */}
        <Leva collapsed />

        {/* Canva */}
        <Canvas
            camera={{
                fov: 40,
                near: 0.1,
                far: 15,
                position: [0, 0, 0]
            }}
        >
            <Experience />
        </Canvas>
        <Interface />
    </React.StrictMode>
);
