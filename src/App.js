import { useState, useEffect } from 'react'; 
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  //this code runs the first time the app mounts. After this the code only runs if the values
  //in the array have been changed. But we don't want to fetch the data again so we do not put
  //any variables in the array
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    //newFilteredMonsters is an array because .filter gives us back a new array
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField]);

  //here it only gets called and initialized once
  const onSearchChange = (event)=> {
    //we have to convert all to lower case because includes is not casesensitive
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
          onChangeHandler = {onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'/>
      <CardList monsters = {filteredMonsters}/>
    </div>
  )
}

export default App;
