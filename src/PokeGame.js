import React, { Component } from 'react';
import Pokedex from './Pokedex';

class PokeGame extends Component {

    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 113, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };
    render() {
        let hand1 = [];
        // filling this hand with this.props
        let hand2 = [...this.props.pokemon];

        while(hand1.length < hand2.length) {
            let idx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(idx, 1)[0]; // only one element at index number // removing from hand2 and putting in hand1
            hand1.push(randomPokemon);
        }
       
        // let sum1 = hand1.reduce((experience, pokemon) => experience + pokemon.base_experience, 0); // starting the total at 0 
        // console.log(sum1);
        
        // let sum2 = hand2.reduce((experience, pokemon) => experience + pokemon.base_experience, 0); // starting the total at 0 
        // console.log(sum2);

        function reducer(hand) {
            return hand.reduce((experience, pokemon) => 
                experience + pokemon.base_experience, 0);
        }

        let sum1 = reducer(hand1);
        let sum2 = reducer(hand2);

        return(
            <div> 
                <Pokedex pokemon={hand1} experience={sum1} isWinner={sum1 > sum2}/> 
                {/* the isWinner results in a boolean true or false value */}
                <Pokedex pokemon={hand2}experience={sum2} isWinner={sum2 > sum1}/>

            </div>
        )
    }
}
export default PokeGame;