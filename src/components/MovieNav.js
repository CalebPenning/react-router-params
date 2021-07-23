import { NavLink } from "react-router-dom"

const MovieNav = ({ movies = [] }) => {
    return (
        <nav>
            {movies.map(e => (
                <NavLink exact path={`${e}`} />
            ))}
                
        </nav>
    )
}

export default MovieNav