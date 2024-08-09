import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)


    const start = () =>{
        
        const id = setInterval(()=>{
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)
    }


  return (
    <div>
      <div>
        <p>{counter}</p>
      </div>
      <button onClick={start}>Incresase</button>
    </div>
  )
}

export default Counter
