import React, { useState } from 'react';
import './App.css';

function App() {
  let [age, setAge] = useState(13)

  return (
    <div className="App">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    AGE: {age}
    <br/>
    <br/>
    <br/>
    <br/>

     <button onClick={() => setAge(++age)}>Increase Age</button>
     <button onClick={() => setAge(--age)}>Decrease age</button>
    
     </div>
  );
}

export default App;
