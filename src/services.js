import axios from 'axios'

const url = "https://pokeapi.co/api/v2/pokemon?limit=807/";

export async function getPokemones(){
    return (await axios.get(url)).data.results;
}
