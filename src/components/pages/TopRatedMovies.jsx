import React, { Fragment } from 'react'
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
  //       console.log('data', res.data)
  //     })
  //     .catch(e => {
  //       console.error(e)
  //     })
  // }

  getAllTopRatedMovies = () => {
    const url1 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=1'
    const url2 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=2'
    axios.all([
      axios.get(url1),
      axios.get(url2)
    ])
    .then(res => {
      console.log('data1', res[0].data.results)
      console.log('data2', res[1].data.results)
      const data1 = res[0].data.results
      const data2 = res[1].data.results
      const data3 = data1.concat(data2)
      this.setState({ movies: data3})
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
      <div className='listMovies'>
        {this.state.movies.map(movie =>
        <Fragment key={movie.id}>
          <img className='img-movie' src={urlImage + movie.poster_path} alt={movie.id}/>
          <p>{movie.title}</p>
          <p>{movie.vote_average}</p>
        </Fragment>
        )}
      </div>
    )
  }
}

export default TopRatedMovies