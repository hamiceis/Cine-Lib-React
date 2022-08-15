import { useState, useEffect } from 'react'
import axios from 'axios'
import { MovieCard } from '../../components/MovieCard'

const moviesURL = import.meta.env.VITE_API //URL da api que está no arquivo .env
const apiKey = import.meta.env.VITE_API_KEY //Key da api

export function Home() {
  const [topMovies, setTopMovies] = useState([])

  //Função para pegar os dados da API e setando no setTopMovies
  const getDataToMovies = async(url) => {
    const { data } = await axios.get(url)
    setTopMovies(data.results)
  }

  useEffect(() => {
    //useEffect para executar essa função, quando o site iniciar.
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`
    getDataToMovies(topRateUrl)
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies_container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {/*Aqui poderia ser um Loading */}
        {topMovies.length > 0 &&
          topMovies.map((movie, id) => (
            <MovieCard key={id} movie={movie} />
          ))}
        {/*Renderiza o card com as informações da API */}
      </div>
    </div>
  )
}
