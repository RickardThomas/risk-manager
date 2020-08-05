import './App.css';
import React, {useState} from 'react';

function App() {

  const [riskReward, setRr] = useState(2)
  const [confirmations, setconfirmations] = useState(2)
  const [balance , setBalance] = useState('1000')

  const risk = ( 100 / (riskReward * confirmations)).toFixed(0)

  const positionSize =  (balance / 100 * (riskReward * confirmations)).toFixed(0)

  return (

    <div className="sizer-box">

    <h1>Position Sizer</h1>

    <span>Account Balance:</span>
    <input 
    className="balance" 
    onInput={e => setBalance(e.target.value)}  
     placeholder={'1000'}
    />
  
    <span>Risk / Reward 1:{riskReward}</span>
    <input 
    className="slider" 
    onInput={e => setRr(e.target.value)} 
    defaultValue="2" type="range" min="1" max="10" 
    />


    <span> Confirmations:  {confirmations} </span>
    <input 
    className="slider" 
    onInput={e => setconfirmations(e.target.value)} 
    defaultValue="2" type="range" min="1" max="10"
    />
  
    <div className="answer-box"> 
    <sup>Your Position Size</sup> <sub>£{positionSize}</sub>
    <br></br>
    <sup>Your Risk</sup> <sub>%{risk}</sub>
    </div>
     

    </div>

);
}

export default App;
