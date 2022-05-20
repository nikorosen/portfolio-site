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

import donut from '../assets/donut48.glb'
import helicopter from '../assets/helicopter3/scene.glb';
import helicopterTexture from '../assets/helicopter/textures/Material_baseColor.png';
import mic from '../assets/microphone_gxl_066_bafhcteks/scene.gltf'
import car from '../assets/mc-laren/source/McLaren.glb'
import present from '../assets/simple_present/scene.gltf'
import fish from '../assets/fish_low_poly/scene.gltf'
import plane from '../assets/airplane_copy.gltf'

const Model = (props) => {
    const model = React.useRef();
  
    useFrame(({ clock }) => {
      //model.current.rotation.z = clock.getElapsedTime() * 0.1
      //model.current.rotation.x = clock.getElapsedTime() * 0.3
      model.current.rotation.y = clock.getElapsedTime() * 0.3     
    })
  
    useEffect(() => {
  
    }, [ props.workSelected ])
  
    let renderer = new THREE.WebGLRenderer();
    renderer.outputEncoding = THREE.sRGBEncoding;


    
    const scene = new THREE.Scene(); 
    
    var loader = new GLTFLoader();
    loader.load(helicopter, (gltf) => {
        gltf.scene.scale.set(0.03, 0.03, 0.03);
        var object = gltf.scene;

      object.traverse((node) => {
        if (!node.isMesh) return;
        node.material.wireframe = true;
        node.material.wireframeLinewidth = 0.1;
      });
      
      scene.add(object);
  }, function ( error ) {

    console.log(error);

});
  
    return <group>
      { (props.selectedWork === 'FishTank2021') ? 
      <mesh ref={model}>
        <meshNormalMaterial />
         <boxBufferGeometry args={[0.2, 0.2, 0.2]} /> 
      </mesh> :
      (props.selectedWork === 'AirtimeHelicopters') ?
      <primitive ref={model} object={scene}/> : 
      <mesh ref={model}>
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

        { title: "CoralVR",
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
  
  
  /*
    let work = { 
      FishTank2021 : 
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
      AirtimeHelicopters :
        { title: "Airtime Helicopters",
          role: "UI/UX Designer",
          desc: `➤ Use Adobe Creative suite to develop brand content and curate sales materials for clients.
          ➤ Maintain VPS hosting instances and site security.
          ➤ Develop modules to generate and organize sales pages through WordPress.`, 
          tech: "Figma, Photoshop, WordPress, Vultr VPS", 
          url: logo2 },
      TELSIM :
        { title: "TELSIM",
          desc: `➤ Developed a simulator in Python 3 that models the Subaru telescope control system to test observation procedures and train system operators, greatly reducing operating costs.
          ➤ Collaborated with an international team of software engineers, astronomers and operators to identify and implement key software components.
          `,
          role: "Software Developer", 
          tech: "Python3, Git", 
          url: logo2 },
      CoralVR :
          { title: "CoralVR",
            desc: `Utilized Unreal Engine and C++ in the development of CoralVR, a collaborative data visualization project that allows for virtual reality interaction of 3D surveys of Hawaiian coral reef sites.`,
            role: "Software Developer", 
            tech: "C++, Unreal Engine, Git", 
            url: logo2 },
      RODVR :
            { title: "ROD VR",
              desc: `Developed a C#/Unity application for Rapid 'Ohi'a Death (ROD) outreach, which was presented to community leaders, scientists, and legislators at the 2018 ‘Ike Wai annual conference at UH Manoa.`,
              role: "Software Developer", 
              tech: "C#, Unity3D, Git", 
              url: logo2 },
      InstaScraper :
              { title: "InstaScraper",
                desc: `Developed an application to analyze competitor profiles for high-engagement media and download them for market research`,
                role: "Software Developer", 
                tech: "Python3, Selenium", 
                url: logo2 },
      IssueTracker :
                { title: "Issue Tracker",
                  desc: `Built an application to track issues and project progress.`,
                  role: "Software Developer", 
                  tech: "C#, .NET Core, SQLServer", 
                  url: logo2 },
      LibraryDBMS :
                  { title: "Edwin H. Mo’okini Library asset management system",
                    desc: `Collaborated on a team of three to specify and implement requirements for a full-stack application using Windows, IIS, SQLServer, and .Net Framework, employing RESTful design through Razor pages`,
                    role: "Software Developer", 
                    tech: "C#, ASP.NET, SQLServer", 
                    url: logo2 },
      Steezy3000 : {
        title: "Steezy3000",
        desc: `Built a custom discord.js bot that manages community events in my music production server`,
        role: "Software Developer", 
        tech: "JavaScript, Node.js", 
        url: logo2 },
      Portfolio : {
        title: "Portfolio",
        desc: `This site! Custom built to showcase my current and past work as a frontend developer and UI/UX Designer`,
        role: "UI/UX Designer, Software Developer", 
        tech: "JavaScript, Node.js, React, Figma", 
        url: logo2 }     
    } */
  
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

        <p style={{textAlign:"start"}}>&#60;Canvas model="{props.selectedWork}"></p>
        <Canvas camera = {{position:[5,18,23], fov: 1}}>
          <OrbitControls enableZoom={false}/>
          {<pointLight position={[10, 10, 10]} intensity={1.3} />}
          <Suspense fallback={null}>
            <Model work={props.work} selectedWork={props.selectedWork}></Model>
          </Suspense>
        </Canvas>
        <p style={{textAlign:"start"}}>&#60;/Canvas></p>
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
      <div id="selector"> 
          <button id="selector-left" onClick={e => handleClick(e)}>🠐</button>
          <button id="selector-right" onClick={e => handleClick(e)}>🠒</button> 
        </div>
        
      </div>
  </div>
  
  }

  export default Work;