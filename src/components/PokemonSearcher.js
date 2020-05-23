import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList.js'
import { getPokemons } from '../services.js';
import '../App.css';

export default function PokemonSearcher() {
	
	const [result, setResult] = useState([]);
	const [query, setQuery] = useState('');
	const [pokemons, setPokemons] = useState([]);

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

	return (
		<div>
			<h1>Buscar Pokémon</h1>				
			<label>
				<input
					type="text"
					placeholder="Ingrese un Pokémon"
					onChange={ (text) => setQuery(text.target.value) }
					className = "buscar-caja"/>
				<button
					type="submit"
					onClick={ () => {searchPokemon()} }
					className = "buscar-btn"
				>
					Buscar
				</button>
			</label>
			<div className = "container">
				<PokemonList pokemons = { pokemons } />
			</div>
		</div>
	);
}