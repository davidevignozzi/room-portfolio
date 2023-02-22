import React from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Debug ui */}
        <Leva collapsed />

        {/* Canva */}
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [5, 2.5, -5]
            }}
        >
            <Experience />
        </Canvas>
    </React.StrictMode>
);
