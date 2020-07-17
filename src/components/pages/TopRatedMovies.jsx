import React from 'react'
import axios from 'axios'


class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ec645879aa99a871f6ba0cfa5299287&language=en-US&page=1'
    axios.get(url)
      .then(res => res.data)
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