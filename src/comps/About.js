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
import icon_figma from '../assets/icons/figma.png';
import icon_photoshop from '../assets/icons/photoshop.png';
import icon_wordpress from '../assets/icons/wordpress.png';

import bioPic from '../assets/bio-pic.jpg';

const icons = [
  icon_js,
  icon_html,
  icon_css,
  icon_react,
  icon_node,
  icon_mongodb,
  icon_python,
  icon_cs,
  icon_cpp,
  icon_dotnet,
  icon_wordpress,
  icon_figma,
  icon_photoshop,
  icon_vscode,
]

const Bio = () => {
    const bio = `” Hey, I’m Niko. 
      I’m a front-end developer with a passion for building compelling designs.
      I recevied my computer science degree from the University of Hawai'i 
      in 2020, and now reside in San Diego, CA where I primarily do freelance marketing and front-end development. 
      Addicted to programming, design and music.“`
    
    return <div id="bio">
        <h3>Bio :</h3>
        <div className='header-line'/>
        <p id="bio-text">{bio}</p>
    </div>
  }
  
  const About = (props) => {
   
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);

   return <div id="about" data-aos="fade-right">
      <h2>/* about */</h2>
      <div className="flex-container"><Bio/>
        <div id="bio-pic-container">
      {/* <p>&#60;img src="</p> */}
            <div id="bio-pic">
            <img src={bioPic}></img>
      {/*<div id="pic-border"></div>*/}
          </div>{/* <p style={{textAlign: 'end'}}>"/></p> */}
        </div>
      </div>
      
      <div id="skill-wrapper">
      <h3>Some things I do : </h3>
      <div className='header-line'/>
      <ul id="skill-icons">
        {icons.map( icon => <li key={icon}><img alt={icon} src={icon}/></li> )}
      </ul>
      </div>
      
      </div>
  }

  export default About;