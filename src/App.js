import Movie from './components/Movie'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [inputHidden, setInputHidden] = useState(false)
  const [movieHidden, setMovieHidden] = useState(true)

  const handleChange = e => {
    setMovieTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setInputHidden(true)
    setMovieHidden(false)
  }

  return (
    <div>
    { !inputHidden && movieHidden &&
      <form onSubmit={handleSubmit}>
        <label>Search For A Movie:</label>
        <input id="title" name="title" onChange={handleChange} />
      </form>
    }
    {  inputHidden && !movieHidden &&
      <Movie title={movieTitle} />
    }
    </div>
  )
}
export default App
