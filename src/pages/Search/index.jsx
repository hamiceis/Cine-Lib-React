import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom' //Com isso conseguimos pegar a query string da urL
import { MovieCard } from '../../components/MovieCard'
import axios from 'axios'
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import '../../components/MovieCard/movie.styles.css' //importando os mesmo estilos da outra pagina


export function Search() {

  const [searchParams] = useSearchParams(); //aqui vamos pegar os parametros que vem na URL
  const [movies, setMovies] = useState([])  //
  const query = searchParams.get('q') //na URL temos q=nomeDoFilme, ele vai pegar apenas o nome do filme.


  //aqui vamos puxar os dados da API
  const getSearchMovies = async (url) => {
    const { data } = await axios.get(url)
    setMovies(data.results)
  }

  //Vamos montar essa URL para buscar da API o filme que o usuário passou no params URL
  //Logo em seguida vai executar a função com a URL que criamos
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchMovies(searchWithQueryURL)
  }, [query]) //Aqui colocamos um valor para ficar monitorando, se tiver alteração ele executa novamente;

  return (
    <div className="container">
      <h2 className="title">
        Resultados para:   <span className="query_text">{query}</span>
      </h2>

      <div className="movies_container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie, id) => <MovieCard key={id} movie={movie} />)}
     
      </div>
    </div>
  )
}
