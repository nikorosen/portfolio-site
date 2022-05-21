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
  
    }, [ props.workSelected ])
  
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

      // object.traverse((node) => {
      //   if (!node.isMesh) return;
      //   node.material.wireframe = true;
      //   node.material.wireframeLinewidth = 0.1;
      // });
      
        //let scene = new THREE.Scene();
        scene.add(object);
        //scenes.push(scene);
      });

      return scene
    }
  
    return <group>
      { 
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

      (props.work[props.workIndex]['title'] === 'Steezy3000') ?
      <primitive ref={modelRef} object={createScene(discord)}/>  :

      (props.work[props.workIndex]['title'] === 'Edwin H. Mo’okini Library asset management system') ? 
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
      </mesh> }
    </group>
  }

const Work = (props) => {

  let work = [
      { title: "FishTank2021",
        role: 'UI/UX Designer', 
        desc: 
        `➤ Designed and developed a single page web app for a children's design competition \n
        ➤ Communicated with a team of community leaders to define and implement requirement\n 
        ➤ Developed FishTank 2021 branding materials\n
        ➤ Drafted and implemented design prototypes using Figma\n`, 
        tech: "Figma, Photoshop, WordPress", 
        projectUrl: "",
        modelUrl: nani },

      { title: "Airtime Helicopters",
        role: "UI/UX Designer",
        desc: `➤ Use Adobe Creative suite to develop brand content and curate sales materials for clients.
        ➤ Maintain VPS hosting instances and site security.
        ➤ Develop modules to generate and organize sales pages through WordPress.`, 
        tech: "Figma, Photoshop, WordPress, Vultr VPS", 
        url: logo2 },

      { title: "TELSIM",
        desc: `➤ Developed a simulator in Python 3 that models the Subaru telescope control system to test observation procedures and train system operators, greatly reducing operating costs.
        ➤ Collaborated with an international team of software engineers, astronomers and operators to identify and implement key software components.
        `,
        role: "Software Developer", 
        tech: "Python3, Git", 
        url: logo2 },

        { title: "Coral VR",
          desc: `Utilized Unreal Engine and C++ in the development of CoralVR, a collaborative data visualization project that allows for virtual reality interaction of 3D surveys of Hawaiian coral reef sites.`,
          role: "Software Developer", 
          tech: "C++, Unreal Engine, Git"}, 

          { title: "ROD VR",
            desc: `Developed a C#/Unity application for Rapid 'Ohi'a Death (ROD) outreach, which was presented to community leaders, scientists, and legislators at the 2018 ‘Ike Wai annual conference at UH Manoa.`,
            role: "Software Developer", 
            tech: "C#, Unity3D, Git", 
            url: logo2 },

            { title: "InstaScraper",
              desc: `Developed an application to analyze competitor profiles for high-engagement media and download them for market research`,
              role: "Software Developer", 
              tech: "Python3, Selenium", 
              url: logo2 },

              { title: "Issue Tracker",
                desc: `Built an application to track issues and project progress.`,
                role: "Software Developer", 
                tech: "C#, .NET Core, SQLServer", 
                url: logo2 },

                { title: "Edwin H. Mo’okini Library asset management system",
                  desc: `Collaborated on a team of three to specify and implement requirements for a full-stack application using Windows, IIS, SQLServer, and .Net Framework, employing RESTful design through Razor pages`,
                  role: "Software Developer", 
                  tech: "C#, ASP.NET, SQLServer", 
                  url: logo2 },
 {
      title: "Steezy3000",
      desc: `Built a custom discord.js bot that manages community events in my music production server`,
      role: "Software Developer", 
      tech: "JavaScript, Node.js", 
      url: logo2 },
{
      title: "Portfolio",
      desc: `This site! Custom built to showcase my current and past work as a frontend developer and UI/UX Designer`,
      role: "UI/UX Designer, Software Developer", 
      tech: "JavaScript, Node.js, React, Figma", 
      url: logo2 }     
];
  
    useEffect(() => {
      Aos.init({ duration: 2000});
  
  
    }, []);
  
    return <div data-aos="fade-up" id="work-wrapper">
        <h2>/* work */</h2>
        <div className="flex-container">
            {/*<WorkSelecter 
                work={work} 
                selectedWork={props.selectedWork} 
                setSelectedWork={props.setSelectedWork}
            />*/}
            {/*<div id="work-info-container">*/}
                <WorkDisplay 
                    work={work} 
                    selectedWork={props.selectedWork}
                    workIndex={props.workIndex}
                    setWorkIndex={props.setWorkIndex}/>
                
                <WorkInfo 
                    work={work} 
                    selectedWork={props.selectedWork}
                    workIndex={props.workIndex}
                    setWorkIndex={props.setWorkIndex}/>
                
            {/*</div>*/}
        </div>
      </div>
  }
  
  /*
  const WorkSelecter = (props) => {
  
    const prevItem = React.useRef();
    const itemsRef = React.useRef([]);
  
    useEffect(() => {
      itemsRef.current = itemsRef.current.slice(0, props.work.length);
      console.log('current:' + props.selectedWork)
    }, [props.selectedWork, props.work]);
    
  
    // toggle 'active' class to ON on current work selection
    // toggle 'active' class to OFF on previous work selection
    const handleClick = (e, index) => {
      if (prevItem.current != null)
        prevItem.current.classList.toggle('active');
      prevItem.current = e.target;
  
      props.setSelectedWork(e.target.id);
      
      //console.log(itemsRef.current[index])
      itemsRef.current[index].classList.toggle('active');
    }
  
    return <div id="work-selector">
      <h3>Some things I've done : </h3>
      <div className="flex-container">
      <p>work = [</p>
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
      <p style={{alignSelf:"end"}}>];</p>
      </div>
    </div>
  }*/

const WorkDisplay = (props) => {




    return <div id="work-display-wrapper">        
      <div>
        <h3>Some things I've done : </h3>
        <div className='header-line'/>
      </div><div id="work-display" > 
        {/*<img src={props.work[props.selectedWork]}></img>*/}

        {/* <p style={{textAlign:"start"}}>&#60;Canvas model="{props.work[props.workIndex]['title']}"></p> */}
        <Canvas camera = {{position:[5,15,-30], fov: 1.25}}>
          <OrbitControls enableZoom={false}/>
          {<pointLight position={[10, 10, -10]} intensity={.5}/>} 

          {<ambientLight intensity={0.3} />}

          <Suspense fallback={null}>
            <Model 
              work={props.work} 
              workIndex={props.workIndex}></Model>
          </Suspense>
        </Canvas>
        {/* <p style={{textAlign:"start"}}>&#60;/Canvas></p> */}
        </div>

      </div>
  }
  
  const WorkInfo = (props) => {

    const handleClick = (e) => {
      switch (e.target.id) {
        case 'selector-right':
          //console.log((props.workIndex + 1) % props.work.length);
          props.setWorkIndex((props.workIndex + 1) % props.work.length);
        break;
        case 'selector-left':
          console.log(props.work.length);
          props.setWorkIndex((((props.workIndex - 1) % props.work.length) + props.work.length) % props.work.length);
          //props.setWorkIndex((props.workIndex - 1) % props.work.length);
          break;
        default:
          console.log('nothin happenned');
      }
  
      console.log(props.workIndex);
    }

    
    return <div id="work-info">
      
    
      <div id='work-info-wrapper'>
      <div id="selector"> 
          <button id="selector-left" onClick={e => handleClick(e)}>🠐</button>
          <button id="selector-right" onClick={e => handleClick(e)}>🠒</button> 
        </div>
      <ul><li><h4>title :</h4>
      <p>{props.work[props.workIndex]['title']}</p> </li>
      <li><h4>role :</h4>
      <p> {props.work[props.workIndex]['role']} </p></li>
      <li><h4>desc :</h4>
      <p> {props.work[props.workIndex]['desc']} </p>
      <li><h4>tech : </h4> 
      <p> {props.work[props.workIndex]['tech']} </p></li>
    <li></li><h4>url :</h4>
      <p> <a href={props.work[props.workIndex]['projectUrl']}>View project</a> 
      </p></li>
      </ul>
      
      
        
      </div>
  </div>
  
  }

  export default Work;