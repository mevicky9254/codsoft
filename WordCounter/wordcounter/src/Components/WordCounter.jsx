import React from "react";
import { useState } from "react";
import "./wordcounter.css";

const WordCounter = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
  
    const handleInputChange = (event) => {
      setText(event.target.value);
      fetch('http://localhost:8080/countWords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event.target.value),
      })
        .then((response) => response.json())
        .then((data) => setWordCount(data));
    };
  
    return (
      <div className="word-counter-container">
        <h1 className="word-counter-title">Word Counter App</h1>
        <textarea className="word-counter-textarea"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter your text here..."
          rows={20}
          cols={60}
        />
        <p className="word-counter-result">Total words: {wordCount}</p>
      </div>
    );
  };
  
  export default WordCounter;