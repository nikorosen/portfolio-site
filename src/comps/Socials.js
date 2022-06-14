import resume from '../assets/niko-rosenberg-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFloppyDisk, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';


const Socials = () => {
    return <div className="socials">
      <ul>
        <li><a style={{color:"var(--accent-color)"}} href={resume} download> <FontAwesomeIcon icon={faFileArrowDown}/> resume</a></li>
        {/* <li><a href="https://www.linkedin.com/in/nickolas-rosenberg/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a href="https://github.com/nikorosen"><FontAwesomeIcon icon={faGithub}/></a></li> */}
        
      </ul>
    </div>
  }

  export default Socials;