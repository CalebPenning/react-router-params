import React, { useState, useEffect } from "react"
import axios from "axios"

const OMDB_URL = "http://www.omdbapi.com/"
    
const Movie = ({ title }) => {
    const [src, setSrc] = useState(null)

    useEffect(() => {
        const fetchMovie = async (searchTerm) => {
            try {
                let res = await axios.get(`${OMDB_URL}`, {
                    params: { apikey: "f4b4cbdc", s: searchTerm }
                })
                setSrc(res.data.Search[0].Poster)
                // set src for movie poster
            } 
            catch(err) {
                console.log(err)
            }
        }
        fetchMovie(title)
    }, [title])

    let img = src ? <img src={src} alt={`Results for search term ${title}`} /> : null
    return (
        <div>
            <h1>Results for {`${title}`}</h1>
            {img}
        </div>
    )
}

export default Movie