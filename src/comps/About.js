import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import icon_js from '../assets/icons/js.png'; 
import icon_node from '../assets/icons/node.png';
import icon_react from '../assets/icons/react.png';
import icon_python from '../assets/icons/python.png';
import icon_express from '../assets/icons/express.png';
import icon_mongodb from '../assets/icons/mongodb.png';
import icon_cpp from '../assets/icons/cpp.png';
import icon_cs from '../assets/icons/cs.png';
import icon_dotnet from '../assets/icons/dotnet.png';
import icon_html from '../assets/icons/html.png';
import icon_css from '../assets/icons/css.png';
import icon_vscode from '../assets/icons/vscode.png';
import bioPic from '../assets/bio-pic.jpg';
import logo2 from '../assets/logo192.png'
import nani from '../assets/nani.jpg'

const Bio = () => {
    const bio = `” Hey, I’m Niko. 
      I’m a front-end developer with a passion for building compelling designs.
      I recevied my computer science degree from the University of Hawai'i 
      in 2020, and now reside in San Diego, CA where I primarily do freelance marketing and front-end development. 
      Addicted to programming, design and music.“`
    
    return <div id="bio">
        <h3>Bio :</h3>
        <div className='header-line'/>
        <p>{bio}</p>
    </div>
  }
  
  const About = (props) => {
   
    useEffect(() => {
      Aos.init({ duration: 2000});
  
  
    }, []);

   return <div data-aos="fade-left" id="about-wrapper">
      <a id="about"></a>
      <h2>/* about */</h2>
      <Bio/>
      <div id="bio-pic-container">
      {/* <p>&#60;img src="</p> */}
      <div id="bio-pic">
      <img src={bioPic}></img>
      {/*<div id="pic-border"></div>*/}
      </div>{/* <p style={{textAlign: 'end'}}>"/></p> */}
      </div>
      
      <div id="skill-wrapper">
      <h3>Some things I do : </h3>
      <div className='header-line'/>
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
      
      </div>
  }


  /*
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
              //console.log(e.target.id)
              props.setSelectedSkill(e.target.id) } }
  
              id={key}> {key} </li> }) }
        </ul>
        <p>],</p>
      </div>
  }
  
  const SkillDisplay = (props) => {
  
    // {<img src={props.skills[props.selectedSkill]['url']}></img>}
  
    return <div id="skill-display"><img src={icon_js}></img></div>
  }*/

  export default About;