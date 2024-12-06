import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import './App.css';

function App() {
const [balls, setBalls] = useState (0);
const [strikes, setStrikes] = useState (0);
const [outs, setOuts] = useState (0);

const resetBallsAndStrikes = () => {
  setBalls(0);
  setStrikes(0);
};

const handleOut = () =>{
if (outs >= 2){
  setOuts(0);
}
else {
  setOuts(outs + 1);
}
resetBallsAndStrikes();
}


const handleBall = () =>{
  if (balls < 3) setBalls(balls + 1);
  else resetBallsAndStrikes();
}
const handleStrike = () => {
  if (strikes < 2) setStrikes(strikes + 1);
    else handleOut();
}


const resetOut = () => {
if (outs > 3) setOuts(outs = 0);

}


  return (
    <div className="app de ale">
    <Header />
    <main>
      <div className="baseContainer">
      <h2>Marcador de Umpire</h2>
      <div className="counters">
        <Counter label="Bolas" count={balls} onIncrement={handleBall} />
        <Counter label="Strikes" count={strikes} onIncrement={handleStrike} />
        <Counter label="Outs" count={outs} onIncrement={handleOut} />
      </div>
      </div>
    </main>
    <Footer />
  </div>
);
}

export default App;
