import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);
  
    return <div /* data-aos="fade-right" */  id="contact">
      <h2>/* Contact */</h2>
      
      <div id="cta">
        <h3 style={{width: '100%'}}>letsConnect()</h3>
        {/* <div  className='header-line'/> */}
        <p>“ I’m open to any interesting opportunity, let’s get in touch! ”</p>
        <a class="link-button" href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap" target="_blank">email()</a>
      </div>

    </div>
  }

  export default Contact;