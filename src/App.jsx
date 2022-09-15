import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'

function App() {
  useEffect(()=>{
    getPokemons().then(data=>{console.info(data)})
  },[])

  return (
    <div className="App">
      pokemon
    </div>
  )
}

export default App
