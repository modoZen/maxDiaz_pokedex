import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    getPokemons().then(pokemonsList=>{setPokemons(pokemonsList)})
  },[])

  return (
    <div className="App">
      {pokemons.map(({ id, name, img})=>(
        <div key={id}>
          <div>
            <img 
              src={ img }
              alt={ name }
              style={{ height: 75 }}
            />
          </div>
          <div>{id}</div>
          <div>{name}</div>
        </div>
      ))}
    </div>
  )
}

export default App
