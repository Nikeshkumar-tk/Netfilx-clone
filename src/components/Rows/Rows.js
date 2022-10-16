import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Rows.css'

const Rows = ({title, fetchUrl, isLargeRow = false}) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {

        const fetchData = async() => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request

        }
        fetchData()

    },[fetchUrl])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>

        {movies.map((movie) => {
            return(
                <img src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} className = {`row-poster ${isLargeRow && "row-posterLarge"}`} alt={movie?.name}></img>
                )
            })}
            </div>

    </div>
  )
}

export default Rows