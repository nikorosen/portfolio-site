import Title from './Title.js';

const Home = (props) => {
    return <div id="home">
      
      <Title titleSize={props.titleSize}/>
      
      <p 
        id="scroll-down" 
        style={{gridArea: "scrolldown"}}>
          scrollDown()
      </p>

    </div>
  }

  export default Home;