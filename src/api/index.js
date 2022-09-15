const URL = import.meta.env.VITE_REACT_APP_POKEAPI || 'https://pokeapi.co/api/v2/';

const getPokemons = async () => {
    const response  = await fetch(`${URL}pokemon?limit=100000&offset=0`);
    const data      = await response.json();
    const pokemons  = data.results
    return pokemons;
}

export {
    getPokemons
}