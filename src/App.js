import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

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

const Skills = ({selectedSkill, setSelectedSkill}) => {
  return <div id="skill-wrapper">
    <SkillSelector selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
    <SkillDisplay selectedSkill={selectedSkill}/>
  </div>
}

const SkillSelector = ({selectedSkill, setSelectedSkill}) => {

  let skills = ["JavaScript", "React"]

  return <div id="skill-selector">
      <h3>skills: [</h3>
      <ul>
        { skills.map( item => { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            setSelectedSkill(e.target.id)
            }} id={item}> {item} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const SkillDisplay = ({selectedSkill}) => {
  return <div id="skill-display">{selectedSkill}</div>
}

const Projects = ({selectedProject, setSelectedProject}) => {
  
  let projects = { 
    InstaScraper : 
      {title: "InstaScraper", desc: "whatever", tech: "python3"},
    InstaScraper2 :
      {title: "InstaScraper2", desc: "whfffffatever", tech: "pytrrrhon3"}
  }
  
  return <div id="project-wrapper">
      <h2>/* projects */</h2>
      <ProjectDisplay  projects={projects} selectedProject={selectedProject}/>
      <ProjectSelecter projects={projects} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
    </div>
}

const ProjectSelecter = ({projects, setSelectedProject}) => {

  return <div id="project-selector">
      <ul>
        { Object.keys(projects).map( (key, val) => { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            setSelectedProject(e.target.id)
            }} id={key}> {projects[key]['title']} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const ProjectDisplay = ({projects, selectedProject}) => {
  return <div id="project-display">
    
    <div id="project-description">
      <h3>title:</h3>
        <p>{projects[selectedProject]['title']}</p> 
      <h4>desc:</h4>
        <p> {projects[selectedProject]['desc']} </p>
      <h4>tech: </h4> 
        <p> {projects[selectedProject]['tech']} </p>
    </div>
    <div id="project-icon">
      {projects[selectedProject]['title']}
      <img></img>  
    </div>  
  </div>
}

const Work = ({selectedWork, setSelectedWork}) => {
  return <div id="work-wrapper">
      <h2>/* work */</h2>
      <WorkSelecter selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
      <WorkDisplay selectedWork={selectedWork}/>
      <div class="arrow" style={{gridArea:"arrow"}}>-----------</div>
    </div>
}

const WorkSelecter = ({selectedWork, setSelectedWork}) => {
  
  let work = ["FishTank2021", "Airtime Helicopters"]

  useEffect(() => {
    console.log("updated")
  }, [selectedWork]);
  
  return <div id="work-selector">
    <h3>work = [</h3>
      <ul>
        {work.map( item => 
          { return <li onMouseOver={(e) => {
            console.log(e.target.id)
            setSelectedWork(e.target.id)
            }
          } id={item}> {item} </li> }
        )}
      </ul>
    <p>];</p>
  </div>
}

const WorkDisplay = ({selectedWork}) => {
  return <div id="work-display">{selectedWork}</div>
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
