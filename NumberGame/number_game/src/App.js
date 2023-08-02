
import './App.css';
import React, { useState } from 'react';
 


function App() {

const [userNumber,setUserNumber]=useState();

const[result,setResult]=useState("");

const[randomNumber, setRandomNumber]=useState();


const matchNumber=()=>{

  fetch("http://localhost:8080/matchNumber",{

        method:"POST",
        headers:{
          "content-Type": "application/json",
        },
        body:JSON.stringify(userNumber),
  })
  .then((response)=>response.json())
  .then((data)=>{
    if(data){
      setResult("Congratulations you won the game ")
    }else{
      setResult("Try again")
    }
  })
 
   console.log(userNumber);

}

const getRandomNumber=()=>{

  fetch("http://localhost:8080/getRandomNumber")
  .then((response)=>response.json())
  .then((data)=>setRandomNumber(data))
  
}


const tryYourLuck = () => {
  matchNumber();
  getRandomNumber();
};

  return (
    <>
    <div className="container">
       <h1>Number Game</h1>
       <h1>{result}</h1>
       <input
         type="number" 
         value={userNumber}
         placeholder="Enter your lucky number"
         onChange={(e)=>setUserNumber(e.target.value)}
        />
      <h2>{randomNumber}</h2>

      <button onClick={tryYourLuck}>Try Your Luck !</button>
      
    </div>
    </>
   
  );
}

export default App;
