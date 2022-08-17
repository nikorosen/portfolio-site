import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, Suspense } from 'react';

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPen, faFileCode, faUser } from "@fortawesome/free-solid-svg-icons";

import airtime from "../assets/img/airtime.png";
import telsim from "../assets/img/telsim.PNG";
import fishtank from "../assets/img/fishtank.png";
import coralvr from "../assets/img/coralvr.png";
import dbms from "../assets/img/uh-hilo.png";
import portfolio from "../assets/img/portfolio.PNG";
import pokedex from "../assets/img/pokedex.png";

import Model from './Model';
import Selector from './Selector';

const WorkSelecter = (props) => {

  const prevItem = React.useRef();
  const itemsRef = React.useRef([]);
  let itemIndex = 0;

  useEffect(() => {

    // init. refs
    if (prevItem.current == null) {
      prevItem.current = document.getElementById('0');
      prevItem.current.classList.toggle('active');
      itemsRef.current = itemsRef.current.slice(0, props.work.length);
    }

    // toggle 'active' class to ON on current work selection
    // toggle 'active' class to OFF on previous work selection
    else {
      prevItem.current.classList.toggle('active');
      prevItem.current = document.getElementById(props.workIndex);
      itemsRef.current[props.workIndex].classList.toggle('active');
    }

    // when workIndex updates
  }, [props.workIndex, props.work]);

  const handleClick = (e) => {
    props.setWorkIndex(e.target.id);
  }

  return <div id="work-selector">
    <div className="flex-container">
      <ul>
        {Object.keys(props.work).map((key, index) => {
          return <li
            className=''
            key={index}
            ref={el => {
              itemsRef.current[index] = el
            }}
            onClick={(e) => { handleClick(e, index) }}
            id={key}> {key} </li>
        }
        )}
      </ul>
    </div>
  </div>
}

const WorkDisplay = (props) => {
  return <div id="work-display" >
    <Canvas className="canvas" camera={{ position: [0, 10, 25], fov: 2 }}>
      <OrbitControls enableZoom={false} />
      {<pointLight position={[10, 10, 10]} intensity={.5} />}

      {<ambientLight intensity={0.3} />}

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  </div>
}

const WorkInfo = (props) => {

  const { title, desc, role, tech, url, img } = props.work[props.workIndex];

  return <div id="work-info">

    <h3 style={{ width: "100%" }} class="work-heading"> <FontAwesomeIcon icon={faUser} /> role : [ <span className='work-role'> {role} </span>] {title} </h3>

    <div className="flex-container">
      <WorkSelecter
        work={props.work}
        workIndex={props.workIndex}
        setWorkIndex={props.setWorkIndex}
      />

      <ul className="work-info-grid">
        <li >
          <Selector
            setWorkIndex={props.setWorkIndex}
            workIndex={props.workIndex}
            work={props.work}
          />
        </li>
        <li id="work-info-desc"><h4><FontAwesomeIcon icon={faPen} /> desc : </h4>
          <ul>
            {desc.map(i => <li> {i} </li>)}
          </ul>
        </li>
        <li style={{ width: "100%" }}><h4><FontAwesomeIcon icon={faFileCode} /> tech : </h4>
          [ {tech} ]
        </li>

        <li><h4><FontAwesomeIcon icon={faLink} /> url :</h4>
          <a id="project-url" target="_blank" href={url}><u>https://project?view=true </u></a>
        </li>






      </ul>

    </div>
  </div>
}

/* const Work = (props) => {

  let work = [
      { title: "NexTech Hawai'i",
        role: 'UI/UX Designer', 
        desc: [
        `Developed an information portal for a children's design competition.`,
        `Communicated with a team of community leaders to define and implement requirements.`, 
        `Drafted and implemented designs using Figma.` ], 
        tech: "Figma, WordPress, Photoshop", 
        url: "https://www.figma.com/file/P7lplQNcjMqdeqHU5x2GD5/FISHTANK-2021?node-id=0%3A1" },
 
      { title: "Airtime Helicopters",
        role: "UI/UX Designer",
        desc: [`Maintain VPS hosting instances and site security.`,
        `Develop modules to generate and organize sales pages through WordPress.`,
        `Use Adobe Creative suite to develop brand content and curate sales materials for clients.`
        ], 
        tech: "WordPress, Figma, PhotoShop, Vultr VPS", 
        url: "https://airtimehelicopters.com/" },
 
      { title: "National Astronomical Observatory of Japan ",
        desc: [`Developed a simulator that models the Subaru telescope control system.`,
        `Reduced operating costs by providing a script testing platform.`,
        `Collaborated with an international team of software engineers, astronomers and operators to identify and implement key software components.`],
        role: "Developer", 
        tech: "Python3, Git", 
        url: "https://docs.google.com/presentation/d/1cjdq2_DJCJNNmM5rtXRaNXmBK2viIjv00BnR1j5upsw/edit#slide=id.p" },
 
        { title: "UH Hilo, Coral VR",
          desc: [`Developed modules for Coral VR, a collaborative data visualization project that allows for virtual reality interaction of 3D surveys of Hawaiian coral reef sites.`],
          role: "Developer", 
          tech: "C++, Unreal Engine, Git",
        url: "https://drive.google.com/file/d/1WLk4CIkcFjqKDSiCYLCTXgK7Yl9Bt-W_/view"}, 
 
          { title: "UH Hilo, ROD VR",
            desc: [`Developed a C#/Unity application for Rapid 'Ohi'a Death (ROD) outreach, which was presented to community leaders, scientists, and legislators at the 2018 ‘Ike Wai annual conference at UH Manoa.`],
            role: "Developer", 
            tech: "C#, Unity3D, Git", 
            url: "https://www.youtube.com/watch?v=vsX3QFywdyY" },
 
            { title: "UH Hilo, Library DBMS",
            desc: [`Collaborated on a team of three to specify and implement requirements for a full-stack application using Windows, IIS, SQLServer, and .Net Framework, employing RESTful design through Razor pages.`],
            role: "Developer", 
            tech: "C#, ASP.NET, SQLServer, Git", 
            url: "https://github.com/nikorosen/library-dbms" },

            { title: "Personal, InstaScraper",
              desc: [`Developed an application to analyze competitor profiles for high-engagement media and download them for market research.`],
              role: "Developer", 
              tech: "Python3, Selenium", 
              url: "logo2" },
 
              { title: "Personal, Issue Tracker",
                desc: [`Built a fullstack application to track issues and project progress.`],
                role: "Developer", 
                tech: "C#, .NET Core, SQLServer, BootStrap, Git", 
                url: "https://github.com/nikorosen/issue-tracker" },
 
                
 {
      title: "Personal, Discord.js Bot",
      desc: [`Built a custom discord.js bot that manages community events in my music production server.`],
      role: "Developer", 
      tech: "JavaScript, Node.js, Git", 
      url: "https://github.com/nikorosen/steezy3000" },
{
      title: "Personal, Portfolio",
      desc: [`This site! Custom built to showcase my current and past work as a developer and designer.`],
      role: "UI/UX Designer, Developer", 
      tech: "JavaScript, Node.js, React, Figma, Git", 
      url: "https://github.com/nikorosen/portfolio-site" }     
]; */

const Work = (props) => {

  let work = [
    {
      title: "Airtime Helicopters",
      role: "Frontend Engineer, UI Designer, Marketer",
      desc: [`Designed and built a responsive website using Next.js, React, Node.js and Firebase to advertise aircraft sales listings.`,
        `Generated $100k+ in increased revenue through SEO and high engagement organic marketing campaigns on Facebook with 3k daily average engagement and 50k average reach. `,
        `Correspond with an international clientele to facilitate the buying and selling of aircraft.`
      ],
      tech: "JavaScript, React.js, Node.js, Next.js, Firebase, Figma",
      url: "https://airtimehelicopters.com/",
      img: airtime
    },

    {
      title: "NexTech Hawai'i",
      role: 'UI Designer',
      desc: [
        `Developed an information portal for a non-profit organization.`,
        `Communicated with a team of community leaders to define and implement requirements.`,
        `Drafted and implemented designs using Figma.`],
      tech: "Figma, WordPress, Photoshop",
      url: "https://www.figma.com/file/P7lplQNcjMqdeqHU5x2GD5/FISHTANK-2021?node-id=0%3A1",
      img: fishtank
    },

    {
      title: "UH Hilo, Library DBMS",
      desc: [`Collaborated on a team of three to specify and implement requirements for a full-stack application using Windows, IIS, SQLServer, and .Net Framework, employing RESTful design through Razor pages.`],
      role: "Developer",
      tech: "C#, ASP.NET, SQLServer, Git",
      url: "https://github.com/nikorosen/library-dbms",
      img: dbms
    },

    {
      title: "Personal, Portfolio",
      desc: [`This site! Custom built to showcase my current and past work as a developer and designer.`],
      role: "UI Designer, Developer",
      tech: "JavaScript, Node.js, React, three.js, Figma, Git",
      url: "https://github.com/nikorosen/portfolio-site",
      img: portfolio
    },

    {
      title: "Personal, Pokedex",
      role: "Frontend Developer",
      desc: [`Pokedex built in Next.js, React.js and Node.js. Fetches data from the PokeAPI database where users can view and capture Pokemon. Built for fun.`
      ],
      tech: "JavaScript, React.js, Node.js, Next.js,",
      url: "https://nikorosenberg-pokedex.netlify.app/",
      img: pokedex
    },

    {
      title: "National Astronomical Observatory of Japan ",
      desc: [`Developed a simulator that models the Subaru telescope control system.`,
        `Reduced operating costs by providing a script testing platform.`,
        `Collaborated with an international team of software engineers, astronomers and operators to identify and implement key software components.`],
      role: "Developer",
      tech: "Python3, Git",
      url: "https://docs.google.com/presentation/d/1cjdq2_DJCJNNmM5rtXRaNXmBK2viIjv00BnR1j5upsw/edit#slide=id.p",
      img: telsim
    },

    {
      title: "UH Hilo, Coral VR",
      desc: [`Developed modules for Coral VR, a collaborative data visualization project that allows for virtual reality interaction of 3D surveys of Hawaiian coral reef sites.`],
      role: "Developer",
      tech: "C++, Unreal Engine, Git",
      url: "https://drive.google.com/file/d/1WLk4CIkcFjqKDSiCYLCTXgK7Yl9Bt-W_/view",
      img: coralvr
    },




  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div id='work'>
    <h2>/* selected projects */</h2>

    <div className="flex-container work-container">
      <div className="flex-container">
        <WorkInfo
          work={work}
          workIndex={props.workIndex}
          setWorkIndex={props.setWorkIndex} />
      </div>

      <WorkDisplay
        work={work}
        workIndex={props.workIndex}
        setWorkIndex={props.setWorkIndex} />
    </div>
  </div>
}

export default Work;