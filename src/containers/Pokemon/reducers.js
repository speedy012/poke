import { createReducer } from "@reduxjs/toolkit"

const initialState = {
  pokemons : [],
  error: undefined,
  isLoading: false
}

const pokemonReducer = createReducer(initialState, {
  FETCH_POKEMON_REQUEST: (state, action) => {
    state.isLoading = true
  }
})

export default pokemonReducer