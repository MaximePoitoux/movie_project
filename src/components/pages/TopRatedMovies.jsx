import React from 'react'
import axios from 'axios'
import './TopRatedMovies.css'

class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    this.getAllTopRatedMovies()
  }

  // getTopRatedMovies = () => {
  //   const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=1'
  //   axios.get(url)
  //     .then(res => {
  //       console.log('data', res.data.results)
  //       this.setState({ movies: res.data.results })
  //     })
  //     .catch(e => {
  //       console.error(e)
  //     })
  // }

  getAllTopRatedMovies = () => {
    const url1 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=1'
    const url2 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=2'
    const url3 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=3'
    const url4 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=4'
    const url5 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=5'
    axios.all([
      axios.get(url1),
      axios.get(url2),
      axios.get(url3),
      axios.get(url4),
      axios.get(url5)
    ])
    .then(res => {
      const data1 = res[0].data.results
      const data2 = res[1].data.results
      const data3 = res[2].data.results
      const data4 = res[3].data.results
      const data5 = res[4].data.results
      const allData = data1.concat(data2, data3, data4, data5)
      console.log('movies', allData)
      this.setState({ movies: allData })
    })
    .catch(e => {
      console.error(e)
    })
  }

//   const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

  render() {
    const urlImage = 'https://image.tmdb.org/t/p/w1280'
    return(
      <div className='body'>
        <div className='body-listMovies'>
          <div className='div-listMovies'>
          <h1 className='title-topRatedFilms'>Top 100 Rated Films</h1>
            <div className='listMovies'>
              {this.state.movies.map(movie =>
              <div className='divInfoMovie' key={movie.id}>
                <p className='background-voteAverage'>{movie.vote_average}</p>
                <img className='img-movie' src={urlImage + movie.poster_path} alt={movie.id}/>
                <p className='p-movie-title'>{movie.title}</p>
                <p className='p-release_date'>{movie.release_date}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopRatedMovies