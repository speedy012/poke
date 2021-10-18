import { call, put, takeLatest } from 'redux-saga/effects';

import { actions } from './actions'
import { getPokemons } from '../../utils.js/api';

export default function* fetchPokemons() {
  try {
    const response = yield call(getPokemons);
    const pokemons = response.results

    if (pokemons.length > 0) {
      yield put(actions.fetchPokemonsSuccess(pokemons))
    }
  }
  catch (err){
    console.log(err)
  }
} 

export function* mySaga() {
  yield takeLatest(actions.fetchPokemons.type, fetchPokemons)
}