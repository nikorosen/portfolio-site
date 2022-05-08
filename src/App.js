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

const LightBulb = () => {
  return <div id="light-bulb"><div></div></div>
}

const Home = () => {
  return <div id="home">
    <div class="arrow-down"></div>
    <LightBulb/>
    <Nav/>
    <Title/>
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

  return <div id="skill-display"></div>
}

const Projects = (props) => {
  
  let projects = { 
    InstaScraper : 
      { title: "InstaScraper", 
        desc: "whatever", 
        tech: "python3", 
        url: nani },
    InstaScraper2 :
      { title: "InstaScraper2",
        desc: "whfffffatever", 
        tech: "pytrrrhon3", 
        url: logo2 }
  }
  
  return <div id="project-wrapper">
      <h2>/* projects */</h2>
      <ProjectDisplay  projects={projects} selectedProject={props.selectedProject}/>
      <ProjectSelecter projects={projects} setSelectedProject={props.setSelectedProject}/>
    </div>
}

const ProjectSelecter = (props) => {

  return <div id="project-selector">
      <ul>
        { Object.keys(props.projects).map( (key) => { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            props.setSelectedProject(e.target.id)
            }} id={key}> {props.projects[key]['title']} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const ProjectDisplay = (props) => {
  return <div id="project-display">
    
    <div id="project-description">
      <h3>title:</h3>
        <p>{props.projects[props.selectedProject]['title']}</p> 
      <h4>desc:</h4>
        <p> {props.projects[props.selectedProject]['desc']} </p>
      <h4>tech: </h4> 
        <p> {props.projects[props.selectedProject]['tech']} </p>
    </div>
    <div id="project-icon">
      {<img src={props.projects[props.selectedProject]['url']}></img>}
    </div>  
  </div>
}

const Work = ({selectedWork, setSelectedWork}) => {

  let work = {
    FishTank2021: 'donut',
    AirtimeHelicopters: 'car',
    Test: 'test'
  }

  return <div id="work-wrapper">
      <h2>/* work */</h2>
      <WorkSelecter work={work} selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
      <WorkDisplay work={work} selectedWork={selectedWork}/>
      <div class="arrow" style={{gridArea:"arrow"}}>-----------</div>
    </div>
}

const WorkSelecter = (props) => {

  useEffect(() => {
    console.log('current:' + props.selectedWork)
  }, [props.selectedWork]);
  
  return <div id="work-selector">
    <h3>work = [</h3>
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
      <div style={{height:"100%"}}>
      <Canvas camera = {{position:[10,18,23], fov: 0.5, zoom: 1.3}}>
        <OrbitControls/>
        {/*<pointLight position={[10, 10, 10]} intensity={1.3} />*/}
        <Suspense fallback={null}>
          <Model work={props.work} selectedWork={props.selectedWork}></Model>
        </Suspense>
      </Canvas>
      </div>
    </div>
}

const Bio = () => {
  const bio = "” Hey, I’m Niko. I’m a front-end developer with a passion for building compelling designs. Addicted to art, music and programming. From Hawai’i, now in San Diego, CA.“,"
  
  return <div id="bio">
    <div>
      <h3>bio :</h3>
      {bio}
    </div>
    
    <div id="bio-pic">image here</div>
  </div>
}

const About = ({selectedSkill, setSelectedSkill, display}) => {
  return <div id="about-wrapper">
    <h2>/* about */</h2>
    <Skills 
      selectedSkill={selectedSkill} 
      setSelectedSkill={setSelectedSkill} 
      display={display}/>
    <Bio/>
    </div>
}

const Contact = () => {
  return <div id="contact">
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
      
      <Home/>
      <Work 
        selectedWork={selectedWork} 
        setSelectedWork={setSelectedWork}/>
      <About 
        selectedSkill={selectedSkill} 
        setSelectedSkill={setSelectedSkill} 
        display={selectedAboutDisplay}/>
      <Projects 
        selectedProject={selectedProject} 
        setSelectedProject={setSelectedProject}/>
      <Contact/>
    </div>
  );
}

export default App;
