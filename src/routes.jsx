import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Search } from './pages/Search'

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />}/>
      <Route path="Search" element={<Search />}/>
    </Routes>
  )
}