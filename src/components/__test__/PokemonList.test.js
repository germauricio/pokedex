import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from '../PokemonList';
import { render, cleanup, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

//this is the pokemon ill use for testing the component
const pikachu = {
    name: 'pikachu',
    id: 25
};

it('renders fine', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonList pokemons={[]} />, div);
});

it('renders a pokemon', () => {
    const {getByTestId} = render(<PokemonList pokemons={[pikachu]}/>);
    expect(getByTestId('pokeID')).toHaveTextContent('25');
    expect(getByTestId('pokeName')).toHaveTextContent('pikachu');
});

