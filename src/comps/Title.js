const Title = (props) => {
  
  {/*console.log('titleSize on title render: ' + props.titleSize)*/}
  
    return <div id="title">
      
      <p style={{alignSelf: "start"}}>class <span style={{color: "var(--primary-text-color)"}}>Niko</span> &#123;</p>
      <h1 style={{fontSize: props.titleSize+'em'}}>front-end <br/> <span style={{textShadow:"1px 1px var(--accent-color), -1px -1px var(--accent-color)", color: "var(--primary-color)"}}>engineer</span></h1>
      <p style={{alignSelf: "end"}}>&#125;;</p>
    </div>
  }
  
  export default Title;