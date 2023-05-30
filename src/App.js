import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.monsters.map(({ name, id }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
