import React from 'react';
import logo from './logo.svg';
// TODO: Update webpack loader to import from App.css and not App.css.ts
import style from './App.css';
import Shadow from './Shadow';

function App() {
  return (
    <Shadow>
      { /* TODO: Consider other ways to inject style */}
      <style>{style}</style>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    </Shadow>
  );
}

export default App;
