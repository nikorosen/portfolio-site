// 05/17/22 Niko Rosenberg
// driver file for portfolio

import './App.css';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import { ThemeContext, themes } from './ThemeContext';

import Nav from './comps/Nav.js';
import Work from './comps/Work.js';
import About from './comps/About.js';
import Home from './comps/Home.js';
import Contact from './comps/Contact.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [workIndex, setWorkIndex] = useState(0);
  
  const arrowPositionSpeed = 0.65;
  const arrowHeightSpeed = 0.4;
  const arrowInitPosition = 94.5;

  const [arrowHeight, setArrowHeight] = useState(0);
  const [arrowPosition, setArrowPosition] = useState(arrowInitPosition);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [titleSize, setTitleSize] = useState();

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   
  }, [arrowHeight, arrowPosition, arrowRotation])

  //
  // update ui elements on scroll
  //
  const handleScroll = () => {
    let scrollPercent = getScrollPercent();
    let newArrowHeight = scrollPercent * arrowHeightSpeed;
    let newArrowRotation = scale(scrollPercent, 80, 100, 0, -90);
    let newArrowPosition = arrowInitPosition - scrollPercent * arrowPositionSpeed;

/*     var el = document.getElementById('title');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    el.style.fontSize = (fontSize + 1) + 'px';

    setTitleSize(12 + scrollPercent*0.05) */

    setArrowPosition(newArrowPosition);
    setArrowHeight(newArrowHeight);

    if (scrollPercent >= 80) 
      setArrowRotation(newArrowRotation);

    else if (arrowRotation != 0)
      setArrowRotation(0);

    //console.log("old height:" + arrowHeight);
    //console.log("new height:" + newArrowHeight);
    //console.log("arrow position: "+ arrowPosition);
    //console.log("scroll percent:" +scrollPercent());
    //console.log('titlesize: ' +titleSize);
  }

  // helper function to scale parameters relative to scroll position
  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  // help function to get scroll percent of page
  const getScrollPercent = () => {
    let h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  }

  return (
    <div className="App">
      <div style={{
        transform: ("rotate("+arrowRotation+"deg)"), 
        top: (arrowPosition+'vh'), height: (arrowHeight+'vh')}} 
        className="arrow">
      </div>
    
      <div className='side-info'>
        <ul>
        <li><a href="mailto: nickolas.rosenberg@gmail.com">nickolas.rosenberg@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/nickolas-rosenberg/"><FontAwesomeIcon className="icon"  icon={faLinkedin}/></a></li>
        <li><a href="https://github.com/nikorosen"><FontAwesomeIcon className="icon" icon={faGithub}/></a></li>
        </ul>
      </div>

      {/*console.log('titleSize on app render: ' + titleSize)*/}

      <Nav/>

      <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div onClick={(e) => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                  console.log(darkMode);}} id="light-bulb"></div>
            )}
      </ThemeContext.Consumer>
      
      <Home
        titleSize={titleSize}
      />
      
      <Work 
        workIndex = {workIndex}
        setWorkIndex = {setWorkIndex}
        />
      
      <About />
      <Contact/>
      
      <div style={{paddingBottom:"3vh"}}>2022 -- Designed and Built by Niko Rosenberg</div>
    </div>
  );
}

export default App;
