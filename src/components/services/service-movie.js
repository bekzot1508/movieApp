import { useHttp } from "../../hooks/use-http"

const useServiceMovie = () => {
   const {request, error, loading, clearError} = useHttp()

   const __apiBase = "https://api.themoviedb.org/3"
   const __apiLng = "language=en-US"
   const __apikey = "api_key=e19833ec2447a1b92eea735d7be29b0c"
   const __apiImg = "https://image.tmdb.org/t/p/original"
   const __page = 1


   const getPopularMovies = async (page = __page) => {  // service 1
        const response = await request(`${__apiBase}/movie/popular?${__apiLng}&page=${page}&${__apikey}`)
        const movies = response.results
        return movies.map(movie => _transformMovie(movie))
    }

    const getTrandingMovies = async (page = __page) => {  // service 1
        const response = await request(`${__apiBase}/movie/top_rated?${__apiLng}S&page=${page}&${__apikey}`)
        const movies = response.results
        return movies.map(movie => _transformMovie(movie))
    }

    const getDetailedMovie = async (id) => {  //service 2
        const movie = await request(`${__apiBase}/movie/${id}?&${__apiLng}&${__apikey}`)
        return _transformMovie(movie)
    }

    const getRandomMovie = async () => {
        const res = await getPopularMovies()
        const movie = res[Math.floor(Math.random() * res.length)]
        return movie
    }

    const _transformMovie = (movie) => {
        return {
            name: movie.original_title,
            description: movie.overview,
            backdrop_path: `${__apiImg}${movie.backdrop_path}`,
            poster_path: `${__apiImg}${movie.poster_path}`,                
            id: movie.id,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
        }
    }
    return {
        getTrandingMovies, 
        getDetailedMovie, 
        getRandomMovie,
        getPopularMovies,
        error, 
        loading, 
        clearError
    }
}

export default useServiceMovie