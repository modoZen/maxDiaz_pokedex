import React from 'react'
import './styles.sass'

export const Button = ({ onClick, disabled = false, children }) => {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}
