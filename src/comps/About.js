import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faToolbox } from '@fortawesome/free-solid-svg-icons';

import icon_js from '../assets/icons/js.png'; 
import icon_ts from '../assets/icons/ts.png'; 
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
import face from '../assets/face.svg';

const skills = [
  {'skill': 'js',        'icon': icon_js},
  
  {'skill': 'html',      'icon':  icon_html},
  {'skill': 'css',       'icon': icon_css},
  {'skill': 'ts',        'icon':  icon_ts},
  {'skill': 'react',     'icon': icon_react},
  {'skill': 'node',      'icon': icon_node},
  {'skill': 'mongodb',   'icon': icon_mongodb},
  {'skill': 'python',    'icon': icon_python},
  {'skill': 'cs',        'icon':  icon_cs},
  {'skill': 'cpp',       'icon':  icon_cpp},
  {'skill': 'dotnet',    'icon':  icon_dotnet},
  {'skill': 'wordpress', 'icon':  icon_wordpress},
  {'skill': 'figma',     'icon':  icon_figma},
  {'skill': 'photoshop', 'icon':  icon_photoshop},
]

const Bio = () => {
    const bio = `” Hey, I’m Niko. 
      I’m a front-end developer with a passion for building compelling designs.
      I recevied my computer science degree from the University of Hawai'i 
      in 2020, and now reside in San Diego, CA where I primarily do freelance front-end development and marketing. 
      Addicted to tech, surfing and music.“`
    
    return <div id="bio">
        <h3><FontAwesomeIcon icon={faPerson}/> bio :</h3>
        <div className='header-line'/>
        <p id="bio-text">{bio}</p>
    </div>
  }
  
  const About = (props) => {
   
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);

   return <div id="about" >
      <h2>/* about */</h2>
      <div className="flex-container" >
        <div style={{display: 'flex', flexFlow: 'row wrap', rowGap : '2em', width: '100%'}}>
          <Bio/>
          <div id="skill-wrapper">
            <h3><FontAwesomeIcon icon={faToolbox}/> toolbox : </h3>
            <div className='header-line'/>
              {/* <ul style={{display: 'flex', flexFlow: 'row wrap'}} >
              [{skills.map( skill => <li key={skill['skill']}> {skill['skill']},  </li> )}]
              </ul> */}
              <p style={{width: "100%"}}>" Here are some things I've been using lately."</p>
            <ul id="skill-icons">
              
              {skills.map( skill => <li><img title={skill['skill']} alt={skill['skill']} src={skill['icon']}/></li> )}
            </ul>
          </div>
        </div>
      
        <div id="bio-pic-container">
            <div id="bio-pic">
            <img alt="bio image" src={bioPic}></img>
          </div>
        </div>
      </div>
      
      
      
      </div>
  }

  export default About;