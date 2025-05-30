import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import DefaultLayout from '../layouts/DefaultLayout'
import Homepage from '../pages/Homepage'
import MoviePage from '../pages/MoviePage'
import MovieDetail from '../pages/MovieDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path='/movies' Component={MoviePage}>
              <Route path='/movies/:id' Component={MovieDetail} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
