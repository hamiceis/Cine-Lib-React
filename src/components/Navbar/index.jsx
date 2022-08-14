import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearch } from 'react-icons/bi'
import './navbar.styles.css'

export default function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Movie Lib
        </Link>
      </h2>

      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </nav>
  )
}
