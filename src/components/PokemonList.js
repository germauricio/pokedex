import React from 'react';
import '../App.css';

class PokemonList extends  React.Component {

    render() {
        return (
            this.props.pokemons
                .map( ( pokemon ) => {
                    let imageUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
                    return(
                        <div class = "box">
				        	<div class = "col-md-3 col-sm-6">
						        <div class = "card">
                                    <div class="card-tittle">Nombre: {pokemon.name}</div>
                                    <img 
                                        src = {imageUrl}
                                        class = "pokeImg"
                                        width = "175px"
                                        alt="well... this is embarrassing"
                                    />
                                    <div class="card-text">Id: {pokemon.id}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
        );
    };
}

export default PokemonList;