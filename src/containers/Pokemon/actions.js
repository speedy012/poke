import { createAction } from '@reduxjs/toolkit'

const fetchPokemons = createAction('FETCH_POKEMONS_REQUEST')

const fetchPokemonsSuccess = createAction(
  'FETCH_POKEMON_SUCCESS',
  pokemons => {
    return {
      payload: {
        pokemons,
      },
    };
  }
);


export const actions = {
  fetchPokemons,
  fetchPokemonsSuccess
}