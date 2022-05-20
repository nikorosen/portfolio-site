import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);
  
    return <div data-aos="fade-right"  id="contact-wrapper">
      <a id="contact"></a>
      <h2>/* Contact */</h2>
      
      <div id="cta">
        <h3>letsConnect()</h3>
        <div className='header-line' />
        <p>“ I’m open to any interesting opportunity, let’s get in touch! ”</p>
      </div>
      <a class="link-button" href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap" target="_blank">email()</a>
    </div>
  }

  export default Contact;