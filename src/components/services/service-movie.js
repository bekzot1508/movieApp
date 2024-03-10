class ServiceMovie {
   __apiBase = "https://api.themoviedb.org/3"
   __apiLng = "language=en-US"
   __apikey = "api_key=e19833ec2447a1b92eea735d7be29b0c"
   __apiImg = "https://image.tmdb.org/t/p/original"
   __page = 1


    getResource = async (url) => {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Could not  fetch ${url}, Status: ${response.status}`)
        }

        return await response.json()
    }

    getPopularMovies = async () => {  // service 1
        return this.getResource(`${this.__apiBase}/movie/popular?${this.__apiLng}&page=1&${this.__apikey}`)
    }

    getTrandingMovies = async (page = this.__page) => {  // service 1
        const response = await this.getResource(`${this.__apiBase}/movie/top_rated?${this.__apiLng}S&page=${page}&${this.__apikey}`)
        const movies = response.results
        return movies.map(movie => this._transformMovie(movie))
    }

    getDetailedMovie = async (id) => {  //service 2
        const movie = await this.getResource(`${this.__apiBase}/movie/${id}?&${this.__apiLng}&${this.__apikey}`)
        return this._transformMovie(movie)
    }

    getRandomMovie = async () => {
        const res = await this.getPopularMovies()
        const movie = res.results[Math.floor(Math.random() * res.results.length)]
        return this._transformMovie(movie)
    }

    _transformMovie = (movie) => {
        return {
            name: movie.original_title,
            description: movie.overview,
            backdrop_path: `${this.__apiImg}${movie.backdrop_path}`,
            poster_path: `${this.__apiImg}${movie.poster_path}`,                
            id: movie.id,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
        }
    }
}

export default ServiceMovie