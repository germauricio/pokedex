import React from 'react';
import ReactDOM from 'react-dom';
import PokemonSearcher from '../PokemonSearcher';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders fine', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonSearcher/>, div);
});

it('renders image when no pokemon found', () => {
    const{ getByTestId } = render(<PokemonSearcher/>);
    fireEvent.change((getByTestId('searchBox')), { target: { value: '*****' } })
    fireEvent.click(getByTestId('searchBtn'));
    expect(getByTestId('notFoundImg')).toBeInTheDocument()
})

it('matches with snapshot', () => {
    const pokeJson = renderer.create(<PokemonSearcher/>);
    expect(pokeJson).toMatchSnapshot();
});