const URL = import.meta.env.VITE_REACT_APP_POKEAPI || 'https://pokeapi.co/api/v2/';

const getPokemons = async () => {
    const response  = await fetch(`${URL}pokemon?limit=100000&offset=0`);
    const data      = await response.json();
    const pokemons  = convertSimplePokemonIntoPokemons(data.results);
    return pokemons;
}

const convertSimplePokemonIntoPokemons = (simplePokemonList) =>{
    const pokemonList   = simplePokemonList.map(simplePokemon=>{
        const name      = simplePokemon.name;
        const id        = simplePokemon.url.split('/')[6];
        // const img       = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        const img       = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return {
            id,
            name,
            img
        }
    });
    return pokemonList;
}

export const getPokemonWithDetails = async (simplePokemon) => {
    const res = await fetch(simplePokemon.url);
    const data = await res.json();
    return data;
}

export {
    getPokemons
}