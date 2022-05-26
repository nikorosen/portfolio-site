import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, Suspense} from 'react';
import * as THREE from 'three';
import { OrbitControls, useGLTF, Edges } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import logo2 from '../assets/logo192.png'
import nani from '../assets/nani.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import laptop from '../assets/laptop.glb'
import airtime from '../assets/airtime.glb'
import telsim from '../assets/telsim.glb'
import coralvr from '../assets/coralvr.glb'
import rod from '../assets/rod.glb'
import discord from '../assets/discord.glb'
import issuetracker from '../assets/issuetracker.glb'
import librarydbms from '../assets/librarydbms.glb'
import portfolio from '../assets/portfolio.glb'
import ig from '../assets/ig.glb'

import { AmbientLight } from 'three';

const Model = (props) => {
    const modelRef = React.useRef();
  
    useFrame(({ clock }) => {
      //model.current.rotation.z = clock.getElapsedTime() * 0.1
      //model.current.rotation.x = clock.getElapsedTime() * 0.3
      modelRef.current.rotation.y = clock.getElapsedTime() * -.025;
    });
  
    useEffect(() => {
  
    }, [])
  
    //let renderer = new THREE.WebGLRenderer();
    //renderer.outputEncoding = THREE.sRGBEncoding;

    //const scene = new THREE.Scene(); 
    //const models = [laptop, airtime, telsim];
    //const scenes = [];
  /*   var loader = new GLTFLoader();

    for (let i = 0; i < models.length; i++) {
    loader.load(models[i], (gltf) => {
        //gltf.scene.scale.set(0.7, 0.7, 0.7);
        var object = gltf.scene;

      // object.traverse((node) => {
      //   if (!node.isMesh) return;
      //   node.material.wireframe = true;
      //   node.material.wireframeLinewidth = 0.1;
      // });
      
        let scene = new THREE.Scene();
        scene.add(object)
        scenes.push(scene);
      });
    } */

    const createScene = (model) => {
      var loader = new GLTFLoader();
      const scene = new THREE.Scene(); 

      loader.load(model, (gltf) => {
        //gltf.scene.scale.set(0.7, 0.7, 0.7);
          var object = gltf.scene;

       object.traverse((node) => {
         if (!node.isMesh) return;
         node.material.wireframe = true;
         node.material.wireframeLinewidth = 0.1;
       });
      
        //let scene = new THREE.Scene();

        var box = new THREE.Box3().setFromObject( object );
        var center = new THREE.Vector3();
        box.getCenter( center );
        object.position.sub( center ); // center the model
        object.rotation.y = Math.PI;   // rotate the model

        scene.add(object);
        //scenes.push(scene);
      });

      return scene
    }
  
    return <group> <primitive ref={modelRef} object={createScene(laptop)}/>
      {/* { 
      (props.work[props.workIndex]['title'] === 'FishTank2021') ? 
      <primitive ref={modelRef} object={createScene(laptop)}/>  :
      
      (props.work[props.workIndex]['title'] === 'Airtime Helicopters') ?
      <primitive ref={modelRef} object={createScene(airtime)}/>  :

      (props.work[props.workIndex]['title'] === 'TELSIM') ?
      <primitive ref={modelRef} object={createScene(telsim)}/>  :

      (props.work[props.workIndex]['title'] === 'Coral VR') ? 
      <primitive ref={modelRef} object={createScene(coralvr)}/>  :
      
      (props.work[props.workIndex]['title'] === 'ROD VR') ?
      <primitive ref={modelRef} object={createScene(rod)}/>  :

      (props.work[props.workIndex]['title'] === 'Discord.js Bot') ?
      <primitive ref={modelRef} object={createScene(discord)}/>  :

      (props.work[props.workIndex]['title'] === 'Library DBMS') ? 
      <primitive ref={modelRef} object={createScene(librarydbms)}/>  :
      
      (props.work[props.workIndex]['title'] === 'Issue Tracker') ?
      <primitive ref={modelRef} object={createScene(issuetracker)}/>  :

      (props.work[props.workIndex]['title'] === 'Portfolio') ?
      <primitive ref={modelRef} object={createScene(portfolio)}/>  :

      (props.work[props.workIndex]['title'] === 'InstaScraper') ?
      <primitive ref={modelRef} object={createScene(ig)}/>  :
      
      
      
      <mesh ref={modelRef}>
        <meshNormalMaterial />
         <boxBufferGeometry args={[0.2, 0.3, 0.1]} /> 
      </mesh> } */}
    </group>
  }

const Work = (props) => {

  let work = [
      { title: "FishTank2021",
        role: 'UI/UX Designer', 
        desc: [
        `Designed and developed a single page web app for a children's design competition`,
        `Communicated with a team of community leaders to define and implement requirement`, 
        `Developed FishTank 2021 branding materials`,
        `Drafted and implemented design prototypes using Figma` ], 
        tech: "Figma, Photoshop, WordPress", 
        projectUrl: "",
        modelUrl: nani },

      { title: "Airtime Helicopters",
        role: "UI/UX Designer",
        desc: [`Use Adobe Creative suite to develop brand content and curate sales materials for clients.`,
        `Maintain VPS hosting instances and site security.`,
        `Develop modules to generate and organize sales pages through WordPress.`], 
        tech: "Figma, Photoshop, WordPress, Vultr VPS", 
        url: logo2 },

      { title: "TELSIM",
        desc: [`Developed a simulator in Python 3 that models the Subaru telescope control system to test observation procedures and train system operators, greatly reducing operating costs.`,
        `Collaborated with an international team of software engineers, astronomers and operators to identify and implement key software components.`],
        role: "Developer", 
        tech: "Python3, Git", 
        url: logo2 },

        { title: "Coral VR",
          desc: [`Utilized Unreal Engine and C++ in the development of CoralVR, a collaborative data visualization project that allows for virtual reality interaction of 3D surveys of Hawaiian coral reef sites.`],
          role: "Developer", 
          tech: "C++, Unreal Engine, Git"}, 

          { title: "ROD VR",
            desc: [`Developed a C#/Unity application for Rapid 'Ohi'a Death (ROD) outreach, which was presented to community leaders, scientists, and legislators at the 2018 ‘Ike Wai annual conference at UH Manoa.`],
            role: "Developer", 
            tech: "C#, Unity3D, Git", 
            url: logo2 },

            { title: "InstaScraper",
              desc: [`Developed an application to analyze competitor profiles for high-engagement media and download them for market research`],
              role: "Developer", 
              tech: "Python3, Selenium", 
              url: logo2 },

              { title: "Issue Tracker",
                desc: [`Built an application to track issues and project progress.`],
                role: "Developer", 
                tech: "C#, .NET Core, SQLServer", 
                url: logo2 },

                { title: "Library DBMS",
                  desc: [`Collaborated on a team of three to specify and implement requirements for a full-stack application using Windows, IIS, SQLServer, and .Net Framework, employing RESTful design through Razor pages`],
                  role: "Developer", 
                  tech: "C#, ASP.NET, SQLServer", 
                  url: logo2 },
 {
      title: "Discord.js Bot",
      desc: [`Built a custom discord.js bot that manages community events in my music production server`],
      role: "Developer", 
      tech: "JavaScript, Node.js", 
      url: logo2 },
{
      title: "Portfolio",
      desc: [`This site! Custom built to showcase my current and past work as a frontend developer and UI/UX Designer`],
      role: "UI/UX Designer, Developer", 
      tech: "JavaScript, Node.js, React, Figma", 
      url: logo2 }     
];
  
    useEffect(() => {
      Aos.init({ duration: 2000});
  
  
    }, []);
  
    return <div id='work' /* data-aos="fade-up" */>
        <h2>/* work */</h2>
        
        <div className="flex-container work-container">
            <div className="flex-container">
            
            {/*<div id="work-info-container">*/}
                
                
                <WorkInfo 
                    work={work} 
                    selectedWork={props.selectedWork}
                    workIndex={props.workIndex}
                    setWorkIndex={props.setWorkIndex}/>
                    </div>
                
                <WorkDisplay 
                    work={work} 
                    selectedWork={props.selectedWork}
                    workIndex={props.workIndex}
                    setWorkIndex={props.setWorkIndex}/>
        </div>

        
      </div>
  }
  
  
  const WorkSelecter = (props) => {
  
    const prevItem = React.useRef(); 
    const itemsRef = React.useRef([]);

    //const selectedWork = props.work[props.workIndex]['title'];
  
    useEffect(() => {
      if (prevItem.current == null) {
      prevItem.current = document.getElementById('0');
      prevItem.current.classList.toggle('active'); }
      itemsRef.current = itemsRef.current.slice(0, props.work.length);
      //itemsRef[0].current = document.getElementById('0').target;
      //itemsRef[0].current.classList.toggle('active');
      //console.log('current:' + selectedWork)
    }, [props.workIndex, props.work]);
    
  
    // toggle 'active' class to ON on current work selection
    // toggle 'active' class to OFF on previous work selection
    const handleClick = (e, index) => {
      if (prevItem.current != null)
        prevItem.current.classList.toggle('active');
      prevItem.current = e.target;
  
      props.setWorkIndex(e.target.id);
      
      //console.log(itemsRef.current[index])
      itemsRef.current[index].classList.toggle('active');
    }
  
    return <div id="work-selector">
      <div className="flex-container">
        <ul>
          {Object.keys(props.work).map( (key, index) => 
            { return <li 
              className='' 
              key={index}
              ref = {el => {itemsRef.current[index] = el
              //console.log(itemsRef.current[index])
            }}
              onClick={(e) => {handleClick(e, index)}} 
              id={key}> {key} </li> }
          )}
        </ul>
      </div>
    </div>
  }

const WorkDisplay = (props) => {

  useEffect(() => {
    
  }, []);

    return  <div id="work-display" > 
        {/*<img src={props.work[props.selectedWork]}></img>*/}

        {/* <p style={{textAlign:"start"}}>&#60;Canvas model="{props.work[props.workIndex]['title']}"></p> */}
        <Canvas className="canvas" camera = {{position:[0,10,25], fov: 2}}>
          <OrbitControls enableZoom={false}/>
          {<pointLight position={[10, 10, 10]} intensity={.5}/>} 

          {<ambientLight intensity={0.3} />}

          <Suspense fallback={null}>
            <Model 
              work={props.work} 
              workIndex={props.workIndex}></Model>
          </Suspense>
        </Canvas>
        {/* <p style={{textAlign:"start"}}>&#60;/Canvas></p> */}

        

      </div>
  }
  
  const WorkInfo = (props) => {

    const index = props.workIndex;
    const length = props.work.length;
  
    const handleClick = (e) => {
      switch (e.target.id) {
        case 'selector-right':
          //console.log((props.workIndex + 1) % props.work.length);
          props.setWorkIndex((index + 1) % length);
        break;
        case 'selector-left':
          console.log(length);
          props.setWorkIndex((((index - 1) % length) + length) % length);
          break;
        default:
          console.log('nothin happenned');
      }
  
      console.log(index);
    }

    const desc = props.work[props.workIndex]['desc'];
    const tech = props.work[props.workIndex]['tech'];
    const url = props.work[props.workIndex]['projectUrl'];
    const role = props.work[props.workIndex]['role'];
    const title = props.work[props.workIndex]['title'];

    return <div id="work-info">    
      <h3 class="work-heading">[ {role} ] {title} </h3> 

<div className="flex-container">
      <WorkSelecter 
                work={props.work} 
                selectedWork={props.selectedWork} 
                setSelectedWork={props.setSelectedWork}
                workIndex={props.workIndex}
                setWorkIndex={props.setWorkIndex}
            />   
      <ul>
        <li><h4>desc :</h4>
          <ul>
            {desc.map(i => <li> {i} </li>)}   
          </ul>
        </li>

        <li><h4>tech : </h4> 
          {tech}
        </li>

        <li><h4>url :</h4>
          <a href={url}>View project</a>
        </li>
      </ul>
      {/* <div id="selector"> 
          <button id="selector-left" onClick={e => handleClick(e)}>🠐</button>
          <button id="selector-right" onClick={e => handleClick(e)}>🠒</button> 
        </div> */}

        </div>   
  </div>
  
  }

  export default Work;