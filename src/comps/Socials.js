import resume from '../assets/nickolas-rosenberg-resume-full.pdf'

const Socials = () => {
    return <div id="socials">
      <ul>
        <li><a href="https://www.linkedin.com/in/nickolas-rosenberg/">in</a></li>
        <li><a href="https://github.com/nikorosen">git</a></li>
        <li style={{color:"var(--accent-color)", border: "1px var(--accent-color) solid", borderRadius: "0.5em"}}><a href={resume} download>↓ resume</a></li>
      </ul>
    </div>
  }

  export default Socials;