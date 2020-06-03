import React from 'react';
import '../App.css';

export default function PokemonList(props){
    return (
        props.pokemons.map(
            ( pokemon ) => {
                let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
                return(
                    <div className = "box" key = {pokemon.id}>
                        <div className = "col-md-3 col-sm-6">
                            <div className = "card" >
                                <div className="card-tittle" data-testid = "pokeName">Nombre: {pokemon.name}</div>
                                <img
                                    src = {imageUrl}
                                    className = "pokeImg"
                                    width = "175px"
                                    alt = {"pokemon " + pokemon.id}
                                />
                                <div className="card-text" data-testid = "pokeID">Id: {pokemon.id}</div>
                            </div>
                        </div>
                    </div>
                );
            })
    );
}
