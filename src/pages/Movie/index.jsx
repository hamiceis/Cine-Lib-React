import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { MovieCard } from '../../components/MovieCard'

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import './movie.style.css'

export function Movie() {
  const { id } = useParams() //pegamos o ID, quando o usuário clicar para ver detalhes.
  const [movie, setMovie] = useState('')

  // aqui vamos precisar de todos os dados
  const getMovie = async url => {
    const { data } = await axios.get(url)
    setMovie(data)
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  //Função para formatar  um number para string, para moeda local
  const formatNumber = number => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="movie_page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatNumber(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatNumber(movie.revenue)}</p>
          </div>

          <div className="info">
        <h3>
          <BsHourglassSplit /> Duração:
        </h3>
        <p>{movie.runtime} minutos</p>
      </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>

          </div>

        </>
      )}
    </div>
  )
}
