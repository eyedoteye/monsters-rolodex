import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
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
            return { monsters: users, filteredMonsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input
          className="Search-Box"
          type="search"
          placeholder="search monsters"
          onChange={event => {
            const value = event.target.value;
            console.log(value);
            const filteredMonsters = this.state.monsters.filter(monster =>
              monster.name.toLowerCase().includes(value.toLowerCase())
            );
            this.setState(() => ({
              filteredMonsters: filteredMonsters,
            }));
          }}
        />
        {this.state.filteredMonsters.map(({ name, id }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
