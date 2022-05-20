import Title from './Title.js';

const Home = (props) => {
    return <div id="home">
      {/*console.log('titleSize on home render: ' + props.titleSize)*/}
      
      <Title titleSize={props.titleSize}/>
      
      <div className="sidebar">
        <div style={{backgroundColor:"var(--primary-color)"}} className="sidebar-box"></div>
        <div style={{backgroundColor:"var(--secondary-text-color)"}} className="sidebar-box"></div>
        <div style={{backgroundColor:"var(--tertiary-text-color)"}} className="sidebar-box"></div>
        <div style={{backgroundColor:"var(--primary-text-color)"}} className="sidebar-box"></div>
        <div style={{backgroundColor:"var(--accent-color)"}} className="sidebar-box"></div>
      </div>
      
      <p 
        id="scroll-down" 
        style={{gridArea: "scrolldown"}}>
            scrollDown()
        </p>

    </div>
  }

  export default Home;