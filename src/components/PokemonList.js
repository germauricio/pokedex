import React from 'react';
import '../App.css';

class PokemonList extends  React.Component {

    render() {
        return (
            this.props.pokemons
                .map( ( pokemon ) => {
                    let imageUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
                    return(
                        <div className = "box">
				        	<div className = "col-md-3 col-sm-6">
						        <div className = "card" >
                                    <div className="card-tittle" data-testid = "pokeName">Nombre: {pokemon.name}</div>
                                    <img 
                                        src = {imageUrl}
                                        className = "pokeImg"
                                        width = "175px"
                                        alt="well... this is embarrassing"
                                    />
                                    <div className="card-text" data-testid = "pokeID">Id: {pokemon.id}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
        );
    };
}

export default PokemonList;