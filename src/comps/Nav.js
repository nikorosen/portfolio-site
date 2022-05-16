import Socials from './Socials.js'

const Nav = () => {
    return <div id="nav-bar">
      <div id="nav">
      <ul>
        <li><a style={{color:"var(--accent-color)"}} href="#home">niko</a></li>
        <li><a href="#work-wrapper">work</a></li>
        <li><a href="#about-wrapper">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <Socials></Socials>
      </div>
    </div>
  }

  export default Nav;