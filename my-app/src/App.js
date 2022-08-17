
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [number, setNumber] = useState(0);///khởi tạo state với giá trị ban đầu bằng 0
  
  const numberIncrease = () => { //increase number
    setNumber(number+2);
  //   if(number>=8){
  //     alert('Max Value')
  //     document.getElementById("numberIncrease").disabled = true;
  //   }
  //   document.getElementById("numberDecrease").disabled = false;
  }

  const numberDecrease = () => { ///decrease number
    setNumber(number-2);
    // if(number<=-8){
    //   alert('Min Value')
    //   document.getElementById("numberDecrease").disabled = true;
    // }
    // document.getElementById("numberIncrease").disabled = false;
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