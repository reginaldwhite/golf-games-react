import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const HomePage = () => (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
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

        <Link to="about">Learn more</Link>
    </div>
);

export default HomePage;
