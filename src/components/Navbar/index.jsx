import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearch}  from 'react-icons/bi'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>
          <Link to="/">
            <BiCameraMovie />
            Movie Lib
          </Link>
        </h1>
         
         <form >
          <input type="text"
                 placeholder="Busque um filme"
                />

          <button type="submit">
            <BiSearch />
          </button>
         </form>
      </nav>
  )
}
