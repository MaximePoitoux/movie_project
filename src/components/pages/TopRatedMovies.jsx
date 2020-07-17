import React from 'react'
import axios from 'axios'


class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
    })
    .catch(e => {
      console.error(e)
    })
  }

  render() {
    return(
      <div>
        <h1>Movies</h1>
      </div>
    )
  }
}

export default TopRatedMovies