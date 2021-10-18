import { createReducer } from "@reduxjs/toolkit"

export const initialState = {
  pokemons : [],
  error: undefined,
  isLoading: false
}

const pokemonReducer = createReducer(initialState, {

  FETCH_POKEMON_REQUEST: (state, action) => {
    state.isLoading = true
  },
  FETCH_POKEMON_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.pokemons = action.payload.pokemons
  }
})

export default pokemonReducer