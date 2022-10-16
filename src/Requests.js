const API_KEY = "3cec8a508319ab4cfd2680c0d0efc771"


const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/movie/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchCrimeMovies:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
}

export default requests