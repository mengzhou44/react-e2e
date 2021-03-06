import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="txt-clicks"> You clicked {count} times.</p>
        <button
          id="btn-click"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
