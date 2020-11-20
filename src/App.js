import logo from './logo.svg';
import React, {useEffect ,useState} from 'react';
import axios from 'axios'; //lets install axios
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';


function App() {
  
  const [pokemon, setPokemon] = useState([
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
  ])
  
  //we got 20 pokemons  
  const get20Pokemon = () => {
    axios.get('http://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      //console.log(response);
      setPokemon(response.data.results);
    })
    .catch((err) => {
      console.log(err)
    })
  } 

  useEffect (() => {
    get20Pokemon();
  })

  
  return (
    <div className="App">
      <h1> Pokemon Axios Intro</h1>
      <DisplayPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
