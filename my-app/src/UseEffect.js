import React, { useState, useEffect } from "react";
 
 
function UseEffect() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = `(${count}) times`
    console.log()
  })
  return (
    <>
      <h1>clicked {count} times</h1>
      <button onClick = {() => {
          setCount(count+1)
      }}>Click</button>
    </>
  );
}
export default UseEffect