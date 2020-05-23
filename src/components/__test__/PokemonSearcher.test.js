import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from '../PokemonList';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonList pokemons={[]}/>, div);
});

