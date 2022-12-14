import React from 'react';
import axios from 'axios';

import './App.css';

import Nav from './Componentes/Nav';
import Search from './Componentes/Search'
import Ranking from './Componentes/Ranking';
import Movie from './Componentes/Movie';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
    console.log(movies)
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {

    const { isLoading } = this.state

    return (
      <div className="App">

        <Nav/>

        <Search/>

        <img src="/main.png" alt="main" className="main-bg"/>

        <Ranking/>

        <h1 className='category'>이런 영화는 어떠세여</h1>
        <div>{ isLoading ? "로딩중임..." : this.state.movies.map(movie => {
          return(
            <Movie
              key={movie.id}
              id={movie.id}
              url={movie.url}
              year={movie.year}
              title={movie.title}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              genres={movie.genres}
              large_cover_image={movie.large_cover_image}
              background_image_original={movie.background_image_original}
            />
          )
        }) }</div>
      </div>
    );
  }
}

export default App;
