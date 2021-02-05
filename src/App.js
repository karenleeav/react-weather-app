import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "New York" />
        <footer>
        <a href="https://github.com/karenleeav/react-weather-app">Open-source code</a> by Karen Avidar
        </footer>
        </div>
    </div>
  );
}