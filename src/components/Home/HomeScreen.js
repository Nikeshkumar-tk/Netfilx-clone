import Banner from '../Banner/Banner'
import Nav from '../Navbar/Nav'
import Rows from '../Rows/Rows'
import './HomeScreen.css'
import '../../Requests'
import requests from '../../Requests'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>

      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Rows  title= 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchActionMovies}/>
      <Rows  title= 'TOP RATED' fetchUrl = {requests.fetchTopRated}/>
      <Rows  title= 'COMEDY MOVIES' fetchUrl = {requests.fetchComedyMovies}/>
      <Rows  title= 'HORROR MOVIES' fetchUrl = {requests.fetchHorrorMovies}/>
      <Rows  title= 'ROMANCE MOVIES' fetchUrl = {requests.fetchRomanceMovies}/>
      <Rows  title= 'THRILLERS' fetchUrl = {requests.fetchThrillerMovies}/>
 
      
    </div>
  )
}

export default HomeScreen