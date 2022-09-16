import { useEffect, useState } from 'react'
import { getPokemons } from './api'
import './App.css'
import { Loader } from './components/Loader';
import { usePagination } from './hooks/usePaginacion';

const usePokemons = () => {
  const [pokemons, setPokemons]       = useState([]);
  const [loading, setLoading]         = useState(true);
  useEffect(()=>{
    getPokemons().then(pokemonsList=>{
      setPokemons(pokemonsList)
      setLoading(false)
    })
  },[]);

  return {
    pokemons,
    loading
  }
}

function App() {

  const { pokemons, loading } = usePokemons();
  const { currentPage, prevPage, nextPage, setCurrentPage } = usePagination();

  const [searched, setSearched] = useState('');
  const handlerSearch = (event)=>{
    setCurrentPage(0);
    setSearched(event.target.value);
  }

  const pokemonsSearched = pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(searched.toLowerCase()));
  const pokemonsPaged = pokemonsSearched.slice(currentPage, currentPage + 4);
  
  console.log(pokemonsPaged);

  return (
    <div className="App">
      {loading && <Loader />}
      <div>
        Listado de Pokemon
      </div>
      <div>
        <input 
          type="text"
          value={searched}
          onChange={handlerSearch}
        />
      </div>
      <div>
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
