import React, { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchField);

  const onSearchChange = event => {
    setSearchField(event.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  return (
    // const { monsters, searchField } = this.state;
    // const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField)
    // );

    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };

//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = event => {
//     this.setState(() => ({
//       searchField: event.target.value.toLowerCase(),
//     }));
//   };

//   render() {

//   }
// }

export default App;
