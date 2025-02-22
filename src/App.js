import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Welcome, user!</h1>
        <Weather defaultCity='Lausanne' />
        <footer>
          This project was coded by{" "}
          <a href='https://github.com/cmvce' target='blank_'>
            Coleene Acevedo
          </a>{" "}
          and is{" "}
          <a href='https://github.com/cmvce/meteo-react' target='blank_'>
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
