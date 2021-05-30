
import { useState } from 'react'
import { ethers } from 'ethers'
import GreeterContract  from './artifacts/contracts/Greeter.sol/Greeter.json'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};


export default App;
