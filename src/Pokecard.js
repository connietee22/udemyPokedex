import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" // get the base url and then append any changes after using the props

class Pokecard extends Component {
    
    render() {
        const { id, name, type, base_experience} = this.props;
        
        let paddedId = id.toString().padStart(3, '0');
        let imgSrc = `${POKE_API}${paddedId}.png`;
            
        return(
                <div className="Pokecard-card">
                    <h2 className="Pokecard-title">{name}</h2>
                   {/* { id.length < 3 ? id.padStart(3, '0') : true } */}
                    <img src={imgSrc} className="Pokecard-img" alt={name}/>
                    <span className="Pokecard-data">Type: <strong>{type}</strong></span>
                    <span className="Pokecard-data">Base Experience: <strong>{base_experience}</strong></span>
                </div>
        )
    }

}

export default Pokecard;