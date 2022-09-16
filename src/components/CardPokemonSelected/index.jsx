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
            <div className='cardPokemonSelected__typeScetion'>
                <div className='cardPokemonSelected__typeTitle'>Types</div>
                <div className='cardPokemonSelected__typeList'>
                    {pokemonSelected?.types?.map(type=>(
                        <div>{type.type.name}</div>
                    ))}
                </div>
            </div>
            <div>
                <div className='cardPokemonSelected__weitghTitle'>Peso</div>
                <div>
                    {pokemonSelected?.weight}
                </div>
            </div>
            <div>
                <div className='cardPokemonSelected__spriteTitle'>Sprites</div>
                <div className='cardPokemonSelected__spriteList'>
                    <div className='cardPokemonSelected__spriteElement'>
                        <img className='cardPokemonSelected__spriteImg' src={pokemonSelected.sprites?.front_default} />
                    </div>
                    <div className='cardPokemonSelected__spriteElement'>
                        <img className='cardPokemonSelected__spriteImg' src={pokemonSelected.sprites?.back_default} />
                    </div>
                    <div className='cardPokemonSelected__spriteElement'>
                        <img className='cardPokemonSelected__spriteImg' src={pokemonSelected.sprites?.front_shiny} />
                    </div>
                    <div className='cardPokemonSelected__spriteElement'>
                        <img className='cardPokemonSelected__spriteImg' src={pokemonSelected.sprites?.back_shiny} />
                    </div>
                </div>
            </div>
            <div>
                <div className='cardPokemonSelected__moveTitle'>Movimientos</div>
                <div className='cardPokemonSelected__moveList'>
                    {pokemonSelected?.moves?.slice(0,4).map(move=>(
                        <div>{move.move.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
