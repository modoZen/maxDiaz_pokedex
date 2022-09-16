import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'
import { Loader } from './components/Loader';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    getPokemons().then(pokemonsList=>{
      setPokemons(pokemonsList)
      setLoading(false)
    })
  },[])

  return (
    <div className="App">
      {loading && <Loader />}
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
