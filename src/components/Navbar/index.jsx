import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearch } from 'react-icons/bi'
import './navbar.styles.css'


export default function Navbar() {

  const [search, setSearch] = useState('') //criando um state do tipo string vazio
  const navigate = useNavigate()   //useNavigate para redirecionar o usuário para outra página

  //função que ser usado no formulário, onde o user vai digitar o nome do filme
  const handleSubmit = (e) => {
    e.preventDefault()

    //verificação se não existe contéudo dentro de search
    if(!search) return 

    navigate(`/search?q=${search}`);  //caso tenha algum conteúdo, navigate vai redirecionar para pagina
    setSearch('');  //após ser enviado, o campo de search volta a ficar vazio;
  }


  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Cine Lib React
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" 
                placeholder="Busque um filme" 
                value={search} 
                onChange={e => setSearch(e.target.value)}/>
        <button type="submit" >
          <BiSearch />
        </button>
      </form>
    </nav>
  )
}
