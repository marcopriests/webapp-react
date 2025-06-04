import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import DefaultLayout from '../layouts/DefaultLayout'
import MoviePage from '../pages/MoviePage'
import MovieDetail from '../pages/MovieDetail'
import AddMovie from '../pages/AddMovie'
import NotFoundPage from '../pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={MoviePage} />
            <Route path=':id' Component={MovieDetail} />
            <Route path='movies/create' Component={AddMovie} />
            <Route path='*' Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
