import { useEffect, useState } from "react";
import { getPokemons } from "../api";

const usePokemons = () => {
    const [pokemons, setPokemons]       = useState([]);
    const [loading, setLoading]         = useState(true);
    useEffect(()=>{
        getPokemons().then(pokemonsList=>{
            setPokemons(pokemonsList)
            setLoading(false)
        })
    },[]);

    return {
    pokemons,
    loading
    }
}

export { usePokemons }