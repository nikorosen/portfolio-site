import React from "react";

const Selector = React.forwardRef((props, ref) => {

  const index = props.workIndex;
  const length = props.work.length;
  const {title, desc, role, tech, url, img} = props.work[props.workIndex];

  const handleClick = (e) => {

    let prev = document.getElementById(index);
    prev.classList.toggle('active');
    console.log(prev);

    switch (e.target.id) {
      case 'selector-right':
        //console.log((props.workIndex + 1) % props.work.length);
        props.setWorkIndex((index + 1) % length);
      break;
      case 'selector-left':
        console.log(length);
        props.setWorkIndex((((index - 1) % length) + length) % length);
        break;
      default:
        console.log('nothin happenned');
    }

    let curr = document.getElementById(index);
    curr.classList.toggle('active');
    console.log(curr);

    console.log(index);
  }

  return <div id="selector"> 
    <button id="selector-left" onClick={e => handleClick(e)}>🠐</button>
    <a  id="work-info-img" target="_blank" href={url}><img src={img}></img></a>
    <button id="selector-right" onClick={e => handleClick(e)}>🠒</button> 
  </div> 
});

export default Selector;