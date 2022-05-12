import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Suspense } from 'react';
import { OrbitControls, useGLTF, Edges } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import three from 'three';
import * as THREE from 'three';

import Nav from './comps/Nav.js';
import Socials from './comps/Socials.js';
import Title from './comps/Title.js';
import TestModel from './comps/TestModel.js'

import logo2 from './assets/logo192.png'
import nani from './assets/nani.jpg'
import donut from './assets/donut48.glb'
import helicopter from './assets/helicopter/scene.gltf'
import mic from './assets/microphone_gxl_066_bafhcteks/scene.gltf'
import car from './assets/mc-laren/source/McLaren.glb'
import present from './assets/simple_present/scene.gltf'
import fish from './assets/fish_low_poly/scene.gltf'
import plane from './assets/airplane_copy.gltf'
import bioPic from './assets/bio-pic.jpg';

import icon_js from './assets/icons/js.png'; 
import icon_node from './assets/icons/node.png';
import icon_react from './assets/icons/react.png';
import icon_python from './assets/icons/python.png';
import icon_express from './assets/icons/express.png';
import icon_mongodb from './assets/icons/mongodb.png';
import icon_cpp from './assets/icons/cpp.png';
import icon_cs from './assets/icons/cs.png';
import icon_dotnet from './assets/icons/dotnet.png';
import icon_html from './assets/icons/html.png';
import icon_css from './assets/icons/css.png';
import icon_vscode from './assets/icons/vscode.png';

const LightBulb = () => {
  return <div id="light-bulb"></div>
}

const Home = () => {
  return <div id="home">
    <div class="arrow"></div>
    <LightBulb/>
    <Title/>
    <div className="sidebar">
      <div style={{backgroundColor:"var(--primary-color)"}} className="sidebar-box"></div>
      <div style={{backgroundColor:"var(--secondary-text-color)"}} className="sidebar-box"></div>
      <div style={{backgroundColor:"var(--tertiary-text-color)"}} className="sidebar-box"></div>
      <div style={{backgroundColor:"var(--primary-text-color)"}} className="sidebar-box"></div>
      <div style={{backgroundColor:"var(--accent-color)"}} className="sidebar-box"></div>
    </div>
    
    <Socials/>
    <p style={{gridArea: "scrolldown"}}>scrollDown()</p>
  </div>
}

const Skills = (props) => {

  let skills = {
    "JavaScript": {
      url: nani 
    },
    "React": {
      url: logo2
    } };

  return <div id="skill-wrapper">
    <SkillSelector skills={skills} setSelectedSkill={props.setSelectedSkill} />
    <SkillDisplay skills={skills} selectedSkill={props.selectedSkill}/>
  </div>
}

const SkillSelector = (props) => {
  return <div id="skill-selector">
      <h3>skills: [</h3>
      <ul>
        { Object.keys(props.skills).map( key => { return <li 
            onMouseOver={(e) => {
            console.log(e.target.id)
            props.setSelectedSkill(e.target.id) } }

            id={key}> {key} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const SkillDisplay = (props) => {

  // {<img src={props.skills[props.selectedSkill]['url']}></img>}

  return <div id="skill-display"><img src={icon_js}></img></div>
}

const Work = ({selectedWork, setSelectedWork}) => {

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
        ➤ Worked with version control software in a Linux environment `,
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
  }

  return <div id="work-wrapper">
      <h2>/* work */</h2>
      <WorkSelecter work={work} selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
      <WorkDisplay work={work} selectedWork={selectedWork}/>
      <WorkInfo work={work} selectedWork={selectedWork}/>
      <div class="arrow-down" style={{gridArea:"arrow"}}></div>
    </div>
}

const WorkSelecter = (props) => {

  useEffect(() => {
    console.log('current:' + props.selectedWork)
  }, [props.selectedWork]);
  
  return <div id="work-selector">
    <h3>Some things I've done</h3>
    <p>work = [</p>
      <ul>
        {Object.keys(props.work).map( key => 
          { return <li onMouseOver={(e) => {
            props.setSelectedWork(e.target.id)
            }
          } id={key}> {key} </li> }
        )}
      </ul>
    <p>];</p>
  </div>
}

const Model = (props) => {
  const model = React.useRef();

  useFrame(({ clock }) => {
    model.current.rotation.z = clock.getElapsedTime() * 0.1
    model.current.rotation.x = clock.getElapsedTime() * 0.3
    model.current.rotation.y = clock.getElapsedTime() * 0.3     
  })

  useEffect(() => {

  }, [ props.workSelected ])


  const scene = new THREE.Scene(); 

  /*var loader = new GLTFLoader();
  loader.load(props.model, (gltf) => {
    var object = gltf.scene;
    
    object.traverse((node) => {
      if (!node.isMesh) return;
      node.material.wireframe = true;
      node.material.wireframeLinewidth = 0.1;
    });
    
    scene.add(object);
});

<primitive ref={model} object={scene}/>*/

  return <group>
    { (props.selectedWork === 'FishTank2021') ? 
    <mesh ref={model}>
      <meshNormalMaterial />
       <boxBufferGeometry args={[0.1, 0.1, 0.1]} /> 
    </mesh> :
    (props.selectedWork === 'AirtimeHelicopters') ?
    <mesh ref={model}>
      <meshNormalMaterial />
       <boxBufferGeometry args={[0.1, 0.3, 0.1]} /> 
    </mesh> : 
    <mesh ref={model}>
      <meshNormalMaterial />
       <boxBufferGeometry args={[0.2, 0.3, 0.1]} /> 
    </mesh> }
  </group>
}

const WorkDisplay = (props) => {
  return <div id="work-display">
      {/*<img src={props.work[props.selectedWork]}></img>*/}
      <div style={{height:"80%"}}>
      
      <p style={{textAlign:"start"}}>&#60;Canvas model="{props.selectedWork}"></p>
      <Canvas camera = {{position:[10,18,23], fov: 1}}>
        <OrbitControls enableZoom={false}/>
        {/*<pointLight position={[10, 10, 10]} intensity={1.3} />*/}
        <Suspense fallback={null}>
          <Model work={props.work} selectedWork={props.selectedWork}></Model>
        </Suspense>
      </Canvas>
      <p style={{textAlign:"start"}}>&#60;/Canvas></p>
      
      </div>
    </div>
}

const WorkInfo = (props) => {
  return <div id="work-info">
  <h3>title:</h3>
    <p>{props.selectedWork}</p> 
    <h4>role:</h4>
    <p> {props.work[props.selectedWork]['role']} </p>
  <h4>desc:</h4>
    <p style={{height:"16em"}}> {props.work[props.selectedWork]['desc']} </p>
  <h4>tech: </h4> 
    <p> {props.work[props.selectedWork]['tech']} </p>
  <h4>url:</h4>
    <p> <a href={props.work[props.selectedWork]['projectUrl']}>View project</a> </p>
  
</div>

}

const Bio = () => {
  const bio = `” Hey, I’m Niko. 
    I’m a front-end developer with a passion for building compelling designs.
    I recevied my computer science degree from the University of Hawai'i 
    in 2020, and now reside in San Diego, CA where I primarily do freelance marketing and front-end development. 
    Addicted to programming, design and music.“`
  
  return <div id="bio">
    <div>
      <h3>bio :</h3>
      <p>{bio}</p>
    </div>
  </div>
}

const About = ({selectedSkill, setSelectedSkill, display}) => {
  return <div id="about-wrapper">
    <a id="about"></a>
    <h2>/* about */</h2>
    <Bio/>
    {/*<Skills 
      selectedSkill={selectedSkill} 
      setSelectedSkill={setSelectedSkill} 
display={display}/>*/}
    
    <div id="bio-pic">
    <img src={bioPic}></img>
    <div id="pic-border"></div>
    </div>
    
    <div id="skill-wrapper">
    <h3>Some things I can do: </h3>
    <ul id="skill-icons">
      <li><img src={icon_js}></img></li>
      <li><img src={icon_html}></img></li>
      <li><img src={icon_css}></img></li>
      <li><img src={icon_react}></img></li>
      <li><img src={icon_node}></img></li>
      <li><img src={icon_express}></img></li>
      <li><img src={icon_mongodb}></img></li>
      <li><img src={icon_python}></img></li>
      <li><img src={icon_cs}></img></li>
      <li><img src={icon_cpp}></img></li>
      <li><img src={icon_dotnet}></img></li>
      <li><img src={icon_vscode}></img></li>
    </ul>
    </div>
    <div className="line">line</div>
    
    </div>
}

const Contact = () => {
  return <div id="contact">
    <a id="contact"></a>
    <h2>/* Contact */</h2>
    <div id="cta">
      <h3>letsConnect()</h3>
      <p>“ Looking for freelance projects but i’m open to any interesting opportunity, let’s get in touch! ”</p>
    </div>
    <a class="link-button" href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap" target="_blank">email()</a>
    {/*<div class="arrow-up"/>*/}
    {/*<p id="to-top">toTop()</p>*/}
    <Socials/>
  </div>
}

const PopUp = () => {
  return <div className="pop-up">test</div>
}

function App() {

  const [selectedWork, setSelectedWork] = useState("FishTank2021");
  const [selectedSkill, setSelectedSkill] = useState("Javascript");
  const [selectedProject, setSelectedProject] = useState("InstaScraper");
  const [selectedAboutDisplay, setSelectedDisplay]  = useState("skills");

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Work 
        selectedWork={selectedWork} 
        setSelectedWork={setSelectedWork}/>
      <About 
        selectedSkill={selectedSkill} 
        setSelectedSkill={setSelectedSkill} 
        display={selectedAboutDisplay}/>
      {/*<Projects 
        selectedProject={selectedProject} 
  setSelectedProject={setSelectedProject}/>*/}
      <Contact/>
    </div>
  );
}

export default App;
