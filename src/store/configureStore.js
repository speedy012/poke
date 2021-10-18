import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import mySaga from '../containers/Pokemon/saga.js'
import pokemonReducer from '../containers/Pokemon/reducers';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  reducer: pokemonReducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

})

sagaMiddleware.run(mySaga)

export default store
