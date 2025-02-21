import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='Lausanne' />
        <footer>
          This project was coded by{" "}
          <a href='https://github.com/cmvce' target='blank_'>
            Coleene Acevedo
          </a>{" "}
          and is <a href=''>open-sourced</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
