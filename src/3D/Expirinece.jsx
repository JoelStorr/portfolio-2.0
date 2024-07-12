import { Environment, Html, Stage } from '@react-three/drei';
import React, { useEffect, useState } from 'react'
import Desktop from '../Pages/Desktop/Desktop';
import TestComponent from './TestComponent';

import './Expirience.css';

export default function Expirinece() {



  const [path, setPath] = useState(window.location.pathname)


  useEffect(()=>{

    const handleClicks = ()=>{

      setPath(window.location.pathname);
    }

    document.body.addEventListener('click', handleClicks)
    window.addEventListener('popstate', handleClicks)
    
    console.log(path);

    return ()=>{
      document.body.removeEventListener('click', handleClicks);
      window.removeEventListener('popstate', handleClicks);
    }

  })



  if(path === '/gallary'){

    return (
      <Stage>
        <mesh>
          <boxGeometry/>
          <meshNormalMaterial/>
        </mesh>
      </Stage>
    )

  } else {

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
              <Desktop />
          </Html>
          </mesh>
          </Stage>
      </>
  
      
  
    );
  }


}
