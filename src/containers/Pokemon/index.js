import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from './actions'

// import { selectPokemons } from './selectors'

export default function Pokemons() {

  const pokemons = useSelector(state => console.log(state.reducer.pokemons))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchPokemons())
  }, [dispatch])

console.log(pokemons)
  return (
    <div>
      <h2>Pokemons</h2>
    </div>
  )
}
