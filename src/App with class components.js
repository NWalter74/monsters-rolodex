import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  //constructor runs before anything in any class
  //the constructor initialises the state
  constructor(){
    //super calls the constructor from the extended class
    super();

    //all here we have access to in the whole component
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //componentDidMount runs after render()
  //mounting is the first time a component is placed on to the DOM
  //the moment my component gets placed on the DOM is when I want to make my API request
  //this function runs when the component did mount
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      }));
  }

  //here it only gets called and initialized once
  onSearchChange = (event)=> {
    //we have to convert all to lower case because includes is not casesensitive
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }

  //render runs after the constructor and determines what to show
  render(){
    //we have casted different methods and values to variables
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    //if monster.name includes the input string then return true and keep this monster.name
    //filteredMonsters is an array because .filter gives us back a new array
    const filteredMonsters = /*this.state.*/monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(/*this.state.*/searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler = {onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'/>
        <CardList 
          monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
