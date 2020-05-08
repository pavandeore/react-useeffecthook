import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {

    const [growth, setGrowth] = useState(0);

    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
