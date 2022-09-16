import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'
import { Loader } from './components/Loader';

function App() {
  const [pokemons, setPokemons]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    getPokemons().then(pokemonsList=>{
      setPokemons(pokemonsList)
      setLoading(false)
    })
  },[]);

  const pokemonFiltered = pokemons.slice(currentPage, currentPage + 4);

  return (
    <div className="App">
      {loading && <Loader />}
      {pokemonFiltered.map(({ id, name, img})=>(
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
      <div>
        <button 
          onClick={()=>{setCurrentPage((value)=>value-5)}} 
        >
          Atras
        </button>
        <button 
          onClick={()=>{setCurrentPage((value)=>value+5)}}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default App
