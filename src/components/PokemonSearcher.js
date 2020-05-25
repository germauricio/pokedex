import React, { useState, useEffect } from 'react';
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
		/*this makes a list with pokemons objects, taking advantage on the way we recieve 
					the data to give each one their corresponding id*/
		let pokemons = result.map( (pokemon, index) => {
			return ({
				name: pokemon.name,
				id: index+1
			});
		});

		/*here i use the query to get the coincidant pokemon. It will get the ones that 
				includes the query on its name, but it can easily change by using
					the function startsWith() instead of includes()*/
		let pokemonsFinded= pokemons.filter((pokemon) => 
			pokemon.name.includes(query.toLowerCase())
		)
		setPokemons(pokemonsFinded);
	}
	/*checking the pokemons getted after querying, if we searched with a query that
		doesn't matches with any pokemon's name, we get adviced of that*/
	if(!pokemons.length && searched){
		content = 
			<div className = "container">
				<img data-testid = "notFoundImg" alt ="no pokemon found" src ={process.env.PUBLIC_URL + '/notFound.png'}/>
			</div>;
	}
		/*otherwise we get our list*/
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
					data-testid="searchBox"
					onChange={ (text) => setQuery(text.target.value) }
					className = "search-box"/>
				<input
					type="submit"
					data-testid="searchBtn"
					onClick={ () => {
							searchPokemon();
							setSearched(true);
						} 
					}
					className = "search-btn"
					value="Buscar"
				/>
			</div>
			{content}
		</div>
	);
}