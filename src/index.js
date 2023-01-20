import React from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience';
import './App.css';
import { Canvas } from '@react-three/fiber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Canvas
            flat
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [1, 2, 6]
            }}
        >
            <Experience />
        </Canvas>
    </React.StrictMode>
);
