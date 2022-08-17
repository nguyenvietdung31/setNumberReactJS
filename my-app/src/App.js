import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0)//initialize state with initial value of 0
  const MAX_VALUE = 10
  const MIN_VALUE = -10

  useEffect(() => { //show alert when number greater than MAX_VALUE or less than MIN_VALUE
    if (number >= MAX_VALUE) {
      alert('Max value')
    } else if (number <= MIN_VALUE) {
      alert('Min value')
    }
  })

  const numberIncrease = () => { //increase number
    setNumber(number + 2)
  }

  const numberDecrease = () => { //decrease number
    setNumber(number - 2)
  }

  return (
    <div className="App">
      <h2>Số: {number}</h2>
      <br></br>
      <button id='numberIncrease' disabled={number >= MAX_VALUE} onClick={numberIncrease}>Cộng<br></br>+</button>
      &emsp; {/* tab character */}
      &emsp; {/* tab character */}
      <button id='numberDecrease' disabled={number <= MIN_VALUE} onClick={numberDecrease}>Trừ<br></br>-</button>
    </div>
  )
}
export default App;
