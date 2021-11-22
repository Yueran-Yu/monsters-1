import React, {useState, useEffect} from 'react';
import {CardList} from "./components/card-list.component";
import {SearchBox} from "./components/search-box.component";
import './App.css';
import axios from "axios";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state is a object, we can't directly put the value into the this.state, we need use KEY===VALUE pair
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({monsters: users}))
//   }
//
//   onChange = (e) => {
//     this.setState({searchField: e.target.value})
//   }
//
//   render() {
//     const {monsters, searchField} = this.state;
//     const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
//
//     return (
//       <div className="App">
//         <h1>Monsters Rolodex</h1>
//         <SearchBox placeholder='search monsters' handleChange={this.onChange}/>
//         <CardList monsters={filterMonsters}/>
//       </div>
//     )
//   }
// }
//
// export default App;
// JSX is try to mimic what html does

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      setMonsters(result.data)
    }
    fetchData()
  }, [])

  const onChange = (e) => {
    setSearchField({searchField: e.target.value})
  }

  const filterMonsters = () => {
    return monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  }

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={onChange}/>
      <CardList monsters={filterMonsters()}/>
    </div>
  )
}

export default App;