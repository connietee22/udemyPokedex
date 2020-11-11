import React, { Component } from 'react';
import Pokedex from './Pokedex';
import PokeGame from './PokeGame'
import './App.css';


function App() {
  return (
    <div className="App wrapper">
      <div className="headerContainer animate__animated animate__zoomInDown">
        <a href="https://fontmeme.com/pokemon-font/">
          <img src="https://fontmeme.com/permalink/201111/d28472afb9a391904f9eab67724b5431.png" alt="pokemon-font" border="0" className="pokedex"/>
        </a>
      </div>
    
      <PokeGame />
      {/* <Pokecard id={4} name="Charmander" type="fire" base_experience={62}/> */}
    </div>
  );
}

export default App;
