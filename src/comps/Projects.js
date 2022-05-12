const Projects = (props) => {
  
    let projects = { 
      InstaScraper : 
        { title: "InstaScraper", 
          desc: "whatever", 
          tech: "python3", 
          url: nani },
      InstaScraper2 :
        { title: "InstaScraper2",
          desc: "whfffffatever", 
          tech: "pytrrrhon3", 
          url: logo2 }
    }
    
    return <div id="project-wrapper">
        <a id="projects"><h2>/* projects */</h2></a>
        <ProjectDisplay  projects={projects} selectedProject={props.selectedProject}/>
        <ProjectSelecter projects={projects} setSelectedProject={props.setSelectedProject}/>
      </div>
  }
  
  const ProjectSelecter = (props) => {
  
    return <div id="project-selector">
        <ul>
          { Object.keys(props.projects).map( (key) => { return <li onMouseOver={(e) => {
              console.log(e.target.id)
              props.setSelectedProject(e.target.id)
              }} id={key}> {props.projects[key]['title']} </li> }) }
        </ul>
        <p>],</p>
      </div>
  }
  
  const ProjectDisplay = (props) => {
    return <div id="project-display">
      
      <div id="project-description">
        <h3>title:</h3>
          <p>{props.projects[props.selectedProject]['title']}</p> 
        <h4>desc:</h4>
          <p> {props.projects[props.selectedProject]['desc']} </p>
        <h4>tech: </h4> 
          <p> {props.projects[props.selectedProject]['tech']} </p>
      </div>
      <div id="project-icon">
        {<img src={props.projects[props.selectedProject]['url']}></img>}
      </div>  
    </div>
  }