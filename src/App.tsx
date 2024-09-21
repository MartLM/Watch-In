import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './GlobalStyles.css'
import { GenresProvider } from './context/GenresProvider.tsx'
import PageMovieDetails from './components/PageMovieDetails.tsx'
import PageHome from './components/PageHome.tsx'

function App() {
  return (
    <Router>
      <GenresProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path='/movie/:id' element={<PageMovieDetails/>}/>
        </Routes>
      </GenresProvider>
    </Router>
  )
}

export default App
