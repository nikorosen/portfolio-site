import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import logo2 from './assets/logo192.png'
import nani from './assets/nani.jpg'

const LightBulb = () => {
  return <div id="light-bulb"><div></div></div>
}

const Title = () => {
  return <div id="title">
    <p style={{alignSelf: "start"}}>class <span style={{color: "var(--primary-text-color)"}}>Niko</span> &#123;</p>
    <h1>front-end <br/> <span style={{textShadow:"1px 1px var(--accent-color), -1px -1px var(--accent-color)", color: "var(--primary-color)"}}>developer</span></h1>
    <p style={{alignSelf: "end"}}>&#125;;</p>
  </div>
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

const Nav = () => {
  return <div id="nav">
    <ul>
      <li><a>work</a></li>
      <li><a>about</a></li>
      <li><a>projects</a></li>
      <li><a>contact</a></li>
    </ul>
  </div>
}

const Socials = () => {
  return <div id="socials">
    <ul>
      <li><a>in</a></li>
      <li><a>git</a></li>
      <li style={{color:"var(--accent-color)"}}><a>resume</a></li>
    </ul>
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
        { Object.keys(props.skills).map( key => { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            props.setSelectedSkill(e.target.id)
            }} id={key}> {key} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const SkillDisplay = (props) => {
  return <div id="skill-display">{<img src={props.skills[props.selectedSkill]['url']}></img>}</div>
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
    "FishTank2021": nani,
    "Airtime Helicopters": logo2
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
    console.log("updated")
  }, [props.selectedWork]);
  
  return <div id="work-selector">
    <h3>work = [</h3>
      <ul>
        {Object.keys(props.work).map( key => 
          { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            props.setSelectedWork(e.target.id)
            }
          } id={key}> {key} </li> }
        )}
      </ul>
    <p>];</p>
  </div>
}

const WorkDisplay = (props) => {
  return <div id="work-display"><img src={props.work[props.selectedWork]}></img></div>
}

const Bio = () => {
  const bio = "” Hey, I’m Niko. I’m a front-end developer with a passion for building compelling designs. Addicted to art, music and programming. From Hawai’i, now in San Diego, CA.“,"
  
  return <div id="bio">
    <div><h3>bio :</h3>
    {bio}</div>
    <div id="bio-pic">image here</div>
  </div>
}

const About = ({selectedSkill, setSelectedSkill, display}) => {
  return <div id="about-wrapper">
    <h2>/* about */</h2>
    <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} display={display}/>
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
    <button>email()</button>
    {/*<div class="arrow-up"/>*/}
    {/*<p id="to-top">toTop()</p>*/}
    <Socials/>
  </div>
}

function App() {

  const [selectedWork, setSelectedWork] = useState();
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
