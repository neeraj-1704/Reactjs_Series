import React, { useEffect, useState } from 'react'

function App() {
  // Counter app 
  const [counter, setCounter] = useState(() => {
    const saved = localStorage.getItem('counter');
    return saved ? Number(saved) : 0
  });
  const [value, setValue] = useState(1);


  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [(counter)])

  const handleNumber = (e) => {
    const data = e.target.value;
    setValue(Number(data));
  }

  const increaseCount = () => {

    if (counter + value > 30) {
     
      console.log("The last value is the : ", Number(localStorage.getItem("counter")))
      alert("Counter not more that the counter 20")
    } else {
      setCounter(counter + value)

    }
  }

  const decreaseCount = () => {
    if (counter - value >= 0) {
      setCounter(counter - value)
    } else {
      setCounter(0)
    }
  }

  const resetCount = () => {
    setCounter(0)
    //setValue(0)
  
  }
  return (
    <div>
      <h3>plase enter number of the increment and by default 1 </h3>
      <input
        type='number'
        placeholder='Default increment 1'
        onChange={handleNumber}
      />
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <div>
        <h1>Counter status live :  {
          counter
        }</h1>

      </div>
    </div>
  )
}

export default App