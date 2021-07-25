// import Movie from './components/Movie'
import './App.css'
import MovieNav from './components/MovieNav'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'
import Counter from './components/Counter'

const App = () => {
  // const [movieTitle, setMovieTitle] = useState("")
  // const [inputHidden, setInputHidden] = useState(false)
  // const [movieHidden, setMovieHidden] = useState(true)

  // const handleChange = e => {
  //   setMovieTitle(e.target.value)
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   setInputHidden(true)
  //   setMovieHidden(false) }


  return (
    <div>
      <MovieNav  />
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
      <Counter />
    </div>
  )
}
export default App
