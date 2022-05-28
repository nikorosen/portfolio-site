import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);
  
    return <div data-aos="fade-left"  id="contact">
      <h2>/* Contact */</h2>
      
      <div id="cta">
        <h3>letsConnect()</h3>
        <p>“ I’m open to any interesting opportunity, let’s get in touch! ”</p>
        <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
          <a class="link-button" href="mailto: nickolas.rosenberg@gmail.com" target="_blank">.email()</a>
        </div>
      </div>

    </div>
  }

  export default Contact;