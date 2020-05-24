import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList.js'
import { getPokemons } from '../services.js';
import '../App.css';

export default function PokemonSearcher() {
	
	const [result, setResult] = useState([]);
	const [query, setQuery] = useState('');
	const [pokemons, setPokemons] = useState([]);
	const [searched, setSearched] = useState(false);
	var content;

	useEffect(() => {
		(async () => {
			const res = await getPokemons();
			setResult(res);
		})()
	}, []
	);

	function searchPokemon(){
		let pokemons = result.map( (pokemon, index) => {
			return ({
				name: pokemon.name,
				id: index+1
			});
		});

		let pokemonsFinded= pokemons.filter((pokemon) => 
			pokemon.name.includes(query.toLowerCase())
		)
		setPokemons(pokemonsFinded);
	}
	
	if(!pokemons.length && searched){
		content = 
			<div className = "container">
				<img src ={process.env.PUBLIC_URL + '/notFound.png'}/>
			</div>;
	}
	else{
		content = 
		<div className = "container">
			<PokemonList pokemons = { pokemons } />
		</div>;
	}

	return (
		<div>
			<div>
				<h1>Buscar Pokémon</h1>				
				<input
					type="text"
					placeholder="Ingrese un Pokémon"
					onChange={ (text) => setQuery(text.target.value) }
					className = "buscar-caja"/>
				<input
					type="submit"
					onClick={ () => {
							searchPokemon();
							setSearched(true);
						} 
					}
					className = "buscar-btn"
					value="Buscar"
				/>
			</div>
			{content}
		</div>
	);
}