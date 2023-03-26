import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'
import { response } from 'express';


function App() {
const [data, setData] = useState(null)

useEffect(()=>{
  fetch('/api')
  .then(response => response.json())
  .then(response => setData(response.message))
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        
        </p>

      </header>
    </div>
  );
}

export default App;
