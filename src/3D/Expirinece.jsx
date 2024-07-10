import { Environment, Html, Stage } from '@react-three/drei';
import React from 'react'
import Desktop from '../Pages/Desktop/Desktop';
import TestComponent from './TestComponent';

import './Expirience.css';

export default function Expirinece() {
  return (
    <>
        <Stage 
           shadows={{type: 'contact', opacity: 0.2, blur:3}} 
           environment="sunset"
           preset='portrait'
           intensity={2}
           
        >
        <mesh
            position-z={-5}
            receiveShadow={true}
            castShadow={true}
        >
        <torusKnotGeometry />
        <meshLambertMaterial />
        <Html position-z={3}  center className='html-holder'>
            <h1>Hello World</h1>
            <TestComponent />
            <Desktop />
        </Html>
        </mesh>
        </Stage>
    </>

    

  );
}
