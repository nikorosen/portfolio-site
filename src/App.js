import logo from './logo.svg';
import './App.css';

const LightBulb = () => {
  return <>lightbulb</>
}

const Title = () => {
  return <div id="title">
    <p>class Niko &#123;</p>
    <h1>front-end developer</h1>
    <p>&#125;;</p>
  </div>
}

const Home = () => {
  return <div id="home">
    <div class="arrow-down">arrow down</div>
    <LightBulb/>
    <Nav/>
    <Title/>
    <Socials/>
    <p>scrollDown()</p>
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
      <li><a>resume</a></li>
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

  return <div id="skills">
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
  return <div id="projects-wrapper">
      <h2>/* projects */</h2>
      <ProjectDisplay/>
      <ProjectSelecter/>
    </div>
}

const ProjectSelecter = () => {
  let projects = ["InstaScraper", "ROD"]

  return <div id="projects">
      <ul>
        { projects.map( item => { return <li id={item}> {item} </li> }) }
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
    <div class="arrow-right">-------------></div>
    </div>
}

const WorkSelecter = () => {
  let work = ["FishTank2021", "AirtimeHelicopters"]
  
  return <div id="work">
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
    <h3>bio :</h3>
    {bio}
  </div>
}

const About = () => {
  return <div id="about">
    <h2>/* about */</h2>
    <Skills/>
    <Bio/>
    </div>
}

const Contact = () => {
  return <div id="contact">
    <h2>/* Contact */</h2>
    <h3>letsConnect()</h3>
    <p>“ Looking for freelance projects but i’m open to any interesting opportunity, let’s get in touch! ”</p>
    <button>email()</button>
    <div class="arrow-up"/>
    <p>toTop()</p>
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
