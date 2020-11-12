import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let handHeader;
        if (this.props.isWinner) {
            handHeader = <p className="winClass">WINNER!</p>;
        } else {
            handHeader = <p className="loseClass">LOSER!</p>;
        }
        return(
            <div className="Pokedex">
                <h2>Pokedex hand</h2>
                <div className="sumWinner">
                    <h4>Total: {this.props.experience}</h4>
                     {/*THIS IS TOO LONG - REPLACE WITH handHeader */}
                     {handHeader}
                    {/* <p className={this.props.isWinner ? "winClass" : "loseClass"}>{this.props.isWinner ? "WINNER!" : "LOSER!"} </p> */}
                </div>
                <div className="Pokedex-cards">
                    { this.props.pokemon.map(poke => (
                        <Pokecard id={poke.id} name={poke.name} type={poke.type} base_experience={poke.base_experience}/>
                    ))}
                </div>
            </div>
        )
    }

}

export default Pokedex;