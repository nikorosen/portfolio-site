import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);
  
    return <div   id="contact">
      <h2>/* contact */</h2>
      
      <div id="cta">
        <h3>letsConnect()</h3>
        <p>“ I’m open to any interesting opportunity, let’s get in touch! ”</p>
        <div id="email">
          <a className="link-button " href="mailto: nickolas.rosenberg@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;email()</a>
        </div>
        
      </div>
     

    </div>
  }

  export default Contact;