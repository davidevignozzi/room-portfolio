import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Interface from './components/Interface';
import Pending from './components/HTML/Pending';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Debug ui */}
        <Leva collapsed />

        {/* Canva */}

        <Canvas
            camera={{
                fov: 35,
                near: 0.1,
                far: 15,
                position: [0, 0, 0]
            }}
        >
            <Suspense fallback={<Pending />}>
                <Experience />
            </Suspense>
        </Canvas>
        <Interface />
    </React.StrictMode>
);
