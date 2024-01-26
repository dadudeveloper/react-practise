

import { useState } from 'react';
import './App.css'

function App() {
 
  const  [counter ,setCounter] = useState(15) 


  // let counter  = 15 

  const addValue = ()=>{
    
    // counter = counter + 1 
    if (counter <20) {
      setCounter (counter +1)
      
      
    }else{
      alert('maximum value reached')
    }
    }
   

  const removeVlue = ()=>{

    if (counter >0) {
      setCounter(counter -1)
    }else{
      alert('"COUNT "cannot be a  negative value ')
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeVlue}>Remove  value{counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
