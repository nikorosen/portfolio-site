import React from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

import laptop from '../assets/laptop.glb'


const Model = (props) => {
    const modelRef = React.useRef();
    const rotateSpeed = -0.1;

    useFrame(({ clock }) => {
      modelRef.current.rotation.y = clock.getElapsedTime() * rotateSpeed;
    });

    const createScene = (model) => {
      var loader = new GLTFLoader();
      const scene = new THREE.Scene(); 

      loader.load(model, (gltf) => {
        var object = gltf.scene;

        // turn object to wireframe
        object.traverse((node) => {
            if (!node.isMesh) return;
            node.material.wireframe = true;
            node.material.wireframeLinewidth = 0.1;
        });
      
        // center object
        var box = new THREE.Box3().setFromObject( object );
        var center = new THREE.Vector3();
        box.getCenter( center );
        object.position.sub( center ); // center the model
        object.rotation.y = Math.PI;   // rotate the model

        scene.add(object);
      });

      return scene
    }

    // store model for persistent render
    const model = React.useMemo(()=> createScene(laptop), []);
  
    return <group> 
        <primitive ref={modelRef} object={model}/> 
    </group>
  }

  export default Model;