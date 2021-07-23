import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import apikey from "../secrets"
import axios from "axios"

const OMDB_URL = "http://www.omdbapi.com/"
    
const Movie = () => {
    const { title } = useParams()
    const [movieCollection, setMovieCollection] = useState([])

    useEffect(() => {
        const fetchMovie = async (searchTerm) => {
            try {
                let res = await axios.get(`${OMDB_URL}`, {
                    params: { apikey, s: searchTerm }
                })
                let collect = res.data.Search
                setMovieCollection(collect)
                console.log(collect)
            } 
            catch(err) {
                console.log(err)
            }
        }
        fetchMovie(title)
    }, [title])

    // let img = src ? <img src={src} alt={`Results for search term ${title}`} /> : <h3>Loading...</h3>
    return (
            <ul>
            {/* {img} */}
            {movieCollection.map((e, i) => (
                <li key={e.Id}>{e.Title} <img alt={`Poster art for ${e.Title}`} src={e.Poster}/></li>    
            )
            )}
            </ul>
    )
}

export default Movie