import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'
import { Loader } from './components/Loader';

function App() {
  const [pokemons, setPokemons]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searched, setSearched] = useState('');

  useEffect(()=>{
    getPokemons().then(pokemonsList=>{
      setPokemons(pokemonsList)
      setLoading(false)
    })
  },[]);

  const pokemonsSearched = pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(searched.toLowerCase()));
  const pokemonsPaged = pokemonsSearched.slice(currentPage, currentPage + 4);
  
  const handlerSearch = (event)=>{
    setCurrentPage(0);
    setSearched(event.target.value);
  }

  console.log(pokemonsPaged);


  const nextPage = () => {
    setCurrentPage(currentPage + 4);
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 4);
  }

  return (
    <div className="App">
      <div>
        <input 
          type="text"
          value={searched}
          onChange={handlerSearch}
        />
      </div>
      <div>
        {loading && <Loader />}
        {pokemonsPaged.map(({ id, name, img})=>(
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
      <div>
        <button 
          onClick={prevPage}
          disabled={ currentPage === 0 } 
        >
          Atras
        </button>
        <button 
          onClick={nextPage}
          disabled={!(pokemonsSearched.length > currentPage + 4) }
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default App
