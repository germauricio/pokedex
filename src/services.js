import axios from 'axios'

const url = "https://pokeapi.co/api/v2/pokemon?limit=807/";

export async function getPokemones(){
    var pokemon = (await axios.get(url)).data.results;
    return pokemon;
}
