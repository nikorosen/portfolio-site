import logo from './logo.svg';
import './App.css';

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

const Skills = () => {
  return <div id="skill-wrapper">
    <SkillSelector/>
    <SkillDisplay/>
  </div>
}

const SkillSelector = () => {

  let skills = ["JavaScript", "React"]

  return <div id="skill-selector">
      <h3>skills: [</h3>
      <ul>
        { skills.map( item => { return <li id={item}> {item} </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const SkillDisplay = () => {
  return <div id="skill-display">test-skill-display</div>
}

const Projects = () => {
  return <div id="project-wrapper">
      <h2>/* projects */</h2>
      <ProjectDisplay/>
      <ProjectSelecter/>
    </div>
}

const ProjectSelecter = () => {
  let projects = ["InstaScraper", "ROD"]

  return <div id="project-selector">
      <ul>
        { projects.map( item => { return <li id={item}> {item}, </li> }) }
      </ul>
      <p>],</p>
    </div>
}

const ProjectDisplay = () => {
  return <div id="project-display">
    
    <div id="project-description">
      <h3>title:</h3>
        <p>{/*props.title*/}</p> 
      <h4>desc:</h4>
        <p> {/*props.desc*/} </p>
      <h4>tech: </h4> 
        <p> {/*props.desc*/} </p>
    </div>
    <div id="project-icon">
      display-project icon
      <img></img>  
    </div>  
  </div>
}

const Work = () => {
  return <div id="work-wrapper">
      <h2>/* work */</h2>
      <WorkSelecter/>
      <WorkDisplay/>
      <div class="arrow" style={{gridArea:"arrow"}}>-----------</div>
    </div>
}

const WorkSelecter = () => {
  let work = ["FishTank2021", "AirtimeHelicopters"]
  
  return <div id="work-selector">
    <h3>work = [</h3>
    <ul>
    { work.map( item => { return <li id={item}> {item} </li> }) }
    </ul>
    <p>];</p>
  </div>
}

const WorkDisplay = () => {
  return <div id="work-display">test-work-display</div>
}

const Bio = () => {
  const bio = "” Hey, I’m Niko. I’m a front-end developer with a passion for building compelling designs. Addicted to art, music and programming. From Hawai’i, now in San Diego, CA.“,"
  
  return <div id="bio">
    <div><h3>bio :</h3>
    {bio}</div>
    <div id="bio-pic">image here</div>
  </div>
}

const About = () => {
  return <div id="about-wrapper">
    <h2>/* about */</h2>
    <Skills/>
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
  return (
    <div className="App">
      <Home/>
      <Work/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
