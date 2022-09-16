import React from 'react'

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
        {text}
    </button>
  )
}
