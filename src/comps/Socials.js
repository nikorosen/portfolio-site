import resume from '../assets/nickolas-rosenberg-resume-full.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Socials = () => {
    return <div className="socials">
      <ul>
        <li><a style={{color:"var(--accent-color)"}} href={resume} download>↓ resume</a></li>
        <li><a href="https://www.linkedin.com/in/nickolas-rosenberg/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a href="https://github.com/nikorosen"><FontAwesomeIcon icon={faGithub}/></a></li>
        
      </ul>
    </div>
  }

  export default Socials;