import './Banner.css'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import requests from '../../Requests'
const Banner = () => {
  const [movie, setMovie] = useState([])

  const truncate = (string, n) => {
    return string?.length > n ?string.substr(0, n-1) + "..." : string

  }

  useEffect(() => {
    const fetchData  = async() => {

      const request = await axios.get(requests.fetchActionMovies)
      console.log(request.data.results)
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
        )


    }
    fetchData()
  }, [])
  setTimeout(() => {
    console.log(movie)
  }, 3000);
 

  return (

    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize:"cover"}}>
            <div className='banner-contents'>
                <h1 className='banner-title'>
                   {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-btns'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h1 className='banner-description'>
                 { truncate(movie?.overview, 50)
                  
                 }
                 
                  </h1>
            </div>

            <div className='banner-fade-bottom' />
      
    </header>
  )
}

export default Banner