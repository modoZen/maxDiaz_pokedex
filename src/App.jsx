import { useState } from 'react'
import { Loader } from './components/Loader';
import { CardPokemon } from './components/CardPokemon';
import { Button } from './components/Button';
import { CardPokemonSelected } from './components/CardPokemonSelected';
import { usePagination } from './hooks/usePaginacion';
import { usePokemons } from './hooks/usePokemons';
import lupa from './assets/search.svg'
import './App.sass'

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

  const [pokemonSelectedId, setPokemonSelectedId] = useState(1)

  const handlerPokemonSelected = (id) => {
    setPokemonSelectedId(id)
  }
  
  return (
    <div className="App">
      {loading && <Loader />}
      <div className='App__title'>
        Listado de Pokemon
      </div>
      <div className='App__search'>
        <img className='App__searchIcon' src={lupa} alt="lupa" />
        <input 
          type="text"
          value={searched}
          onChange={handlerSearch}
          placeholder='Buscar'
          className='App__searchInput'
        />
      </div>
      <div className='App__cardPokemonSection'>
        <div className='App__cardPokemonList'>
          {pokemonsPaged.map(({ id, name, img})=>(
            <CardPokemon key={id} id={id} name={name} img={img} onClick={handlerPokemonSelected} />
          ))}
        </div>
        <CardPokemonSelected id={pokemonSelectedId} />
      </div>
      <div className='App__footer'>
        <Button   
          onClick={prevPage} 
          disabled={ currentPage === 0 } 
        >
          Atras
        </Button>
        <Button 
          onClick={nextPage} 
          disabled={!(pokemonsSearched.length > currentPage + 4) } 
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}

export default App
