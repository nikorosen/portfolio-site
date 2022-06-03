import Title from './Title.js';

const Home = (props) => {
    return <div id="home">
      
      <Title titleSize={props.titleSize}/>
      
      <a href="#work"
        id="scroll-down" 
        className="scroll-link" 
        style={{gridArea: "scrolldown"}}>
          scrollDown()
      </a>

    </div>
  }

  export default Home;