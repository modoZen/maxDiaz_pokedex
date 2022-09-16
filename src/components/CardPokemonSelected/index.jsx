import React, { useEffect, useState } from 'react'
import { getPokemonWithDetails } from '../../api';
import './styles.sass'

export const CardPokemonSelected = ({id}) => {
    const [pokemonSelected, setPokemonSelected] = useState({});

    useEffect(()=>{
        getPokemonWithDetails(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(pkmn=>{setPokemonSelected(pkmn)})
    },[id])

    console.log(pokemonSelected)

    return (
        <div className='cardPokemonSelected'>
            <img 
                src={ pokemonSelected.sprites?.other.home.front_default }
                alt={ pokemonSelected.name }
                className='cardPokemonSelected__mainImg'
            />
            <div className='cardPokemonSelected__id'># {pokemonSelected?.id}</div>
            <div className='cardPokemonSelected__name'>{pokemonSelected?.name}</div>
            <div>
                <div>Types</div>
                <div>
                    {pokemonSelected?.types?.map(type=>type.type.name)}
                </div>
            </div>
            <div>
                <div>Peso</div>
                <div>
                    {pokemonSelected?.weight}
                </div>
            </div>
            <div>
                <div>Sprites</div>
                <div>
                    <img src={pokemonSelected.sprites?.front_default} />
                    <img src={pokemonSelected.sprites?.back_default} />
                    <img src={pokemonSelected.sprites?.front_shiny} />
                    <img src={pokemonSelected.sprites?.back_shiny} />
                </div>
            </div>
            <div>
                <div>Movimientos</div>
                <div>
                    {pokemonSelected?.moves?.slice(0,4).map(move=>move.move.name)}
                </div>
            </div>
        </div>
    )
}
