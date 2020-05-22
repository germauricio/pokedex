import React, {useState, useEffect} from 'react';
import ListarPokemon from './ListarPokemon.js'
import { getPokemones } from '../services.js';
import '../App.css';

export default function BuscarPokemon() {
	
	const [resultado, setResultado] = useState([]);
	const [query, setQuery] = useState('');
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await getPokemones();
			setResultado(res);
		})()
	}, []
	);

	function searchPokemon(){
		var pokemons = resultado.map( (pokemon, index) => {
			return ({
				name: pokemon.name,
				id: index+1
			});
		});

		var pokemonsFinded= pokemons.filter((pokemon) => 
			pokemon.name.includes(query.toLowerCase())
		)
		setPokemons(pokemonsFinded);
		console.log(pokemonsFinded);
	}

	return (
		<div>
			<h1 class="titulo">Buscar Pokémon</h1>				
			<label>
				<input
					type="text"
					placeholder="Ingrese un Pokémon"
					onChange={ (text) => setQuery(text.target.value) }
					class = "buscar-caja"/>
				<button
					type="submit"
					onClick={ () => {searchPokemon()} }
					class = "buscar-btn"
				>
					Buscar
				</button>
			</label>
			<div class = "container">
							<ListarPokemon 
								pokemons = { pokemons } 
							/>
			</div>
		</div>
	);
}