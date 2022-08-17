
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [number, setNumber] = useState(0);///initialize state with initial value of 0
  useEffect( () => { //show alert when number greater than 10 or less than -10
    if(number>=10)
     alert('Max value')
    else if (number<=-10){
      alert('Min value')
    } 
    else {     
    }
  })
  const numberIncrease = () => { //increase number
    setNumber(number+2);
  }

  const numberDecrease = () => { //decrease number
    setNumber(number-2);
  }

  return(
    <div className="App">
    <h2>Số: {number}</h2>
    <br></br>
    <button id='numberIncrease' disabled={number>=10} onClick={numberIncrease}>Cộng<br></br>+</button>
    &emsp;
    &emsp;
    <button id='numberDecrease' disabled={number<=-10} onClick={numberDecrease}>Trừ<br></br>-</button>

    </div>

  );


}
export default App;

/*
Note: khi show alert giá trị max , gắn flag max 
gắn class, có state 
disabled = true;
dùng useEffect để show alert
*/