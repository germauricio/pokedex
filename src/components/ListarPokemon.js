import React from 'react';
import '../App.css';

class ListarPokemon extends  React.Component {

    render() {
        return (
            this.props.pokemons
                .map( ( pokemon ) => {
                    return(
                        <div class = "box">
				        	<div class = "col-md-3 col-sm-6">
						        <div class = "card">
                                    <div class="card-tittle">Nombre: {pokemon.name}</div>
                                    <img 
                                        src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                        class = "pokeImg"
                                        width = "175px"
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

export default ListarPokemon;