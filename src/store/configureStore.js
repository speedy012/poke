import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../containers/Pokemon/reducers';

const store = configureStore({
  reducer: {pokemons: pokemonReducer}
})

export default store
