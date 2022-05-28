/* <div id="selector"> 
<button id="selector-left" onClick={e => handleClick(e)}>🠐</button>
<button id="selector-right" onClick={e => handleClick(e)}>🠒</button> 
</div> 

    const index = props.workIndex;
    const length = props.work.length;

const handleClick = (e) => {
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

    console.log(index);
  } */