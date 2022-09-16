import React from 'react'
import './styles.sass'

export const CardPokemon = ({ id, name, img, onClick }) => {
  return (
    <div className='cardPokemon' key={id} onClick={()=>{onClick(id)}} >
        <div className='cardPokemon__imgSection'>
          <img 
            src={ img }
            alt={ name }
            className='cardPokemon__img'
          />
        </div>
        <div className='cardPokemon__id'># {id}</div>
        <div className='cardPokemon__name'>{name}</div>
    </div>
  )
}
