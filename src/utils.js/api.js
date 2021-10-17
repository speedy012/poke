export const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(json => json)
  .catch(error => console.log(error))
}