import React, { Component } from 'react';
import './App.css';
import { FaReact } from "react-icons/fa"

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="AppPaper">
          <h2>React Demo Apps</h2>
	        <FaReact className="SplashIcon"/>
        </div>
      </div>
    );
  }
}

export default App;
