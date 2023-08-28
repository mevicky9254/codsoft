import React, { useState } from 'react';
import './App.css';




function App() {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('');
  const [randomNumber, setRandomNumber] = useState('');
  const [showResult, setShowResult] = useState(false);



  const matchNumber = () => {
    fetch("http://localhost:8080/matchNumber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNumber),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data ? "Congratulations! You won the game!" : "Try again! The lucky number was not matched.");
        setShowResult(true);
      });

      
  };

  const getRandomNumber = () => {
    fetch("http://localhost:8080/getRandomNumber")
      .then((response) => response.json())
      .then((data) => setRandomNumber(data));
  };

  const tryYourLuck = () => {
    setShowResult(false); // Hide the previous result before showing the new one
    matchNumber();
    getRandomNumber();
    setUserNumber(" ");
  };



  return (
    <div className={`container ${showResult ? 'result-shown' : ''}`}>
      <h1 className="title">Number Game</h1>
      <h2 className={`result ${showResult ? 'result-shown' : ''}`}>{result}</h2>
      <input
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
        placeholder="Enter your lucky number"
      />
      <h2 className={`random-number ${showResult ? 'result-shown' : ''}`}>Random Number: {randomNumber}</h2>
      <button  onClick={tryYourLuck}>Try Your Luck!</button>
    </div>
  );
}

export default App;
