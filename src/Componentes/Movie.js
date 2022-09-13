import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';

import "../Movies.scss";

function Component(e) {
  if (e.length > 200) {
    return <p className="text">{e.slice(0, 180)}...</p>;
  } else {
    return <p className="text">{e}</p>
  }
}

function Movie({ id, year, title, rating, runtime, summary, genres, large_cover_image, background_image_original }) {

  return(
    <div className="movie_card" key={id}>
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={large_cover_image} alt={title}/>
            <h1>{title} ({year})</h1>
            <h4>{rating} / 10.0</h4>
            <span className="mivutes">{runtime} Min</span>
            <ul className="type">
              {
                genres.map(genres => <li className="genres_list">- {genres}</li>)
              }
            </ul>
            <div className="movie_desc">
              <p className="text">{Component(summary)}</p>
            </div>
            {/* <div className="movie_social">
              <ul>
                <li><i className="material-icons">Share</i></li>
                <li><i className="material-icons">♥︎</i></li>
                <li><i className="material-icons">chat_bubble</i></li>
              </ul>
            </div> */}
          </div>
          {/* <div className="blur_back movie_back"></div> */}
        </div>
        <MovieBack className="blur_back movie_back"/>
    </div>
  );
};

const MovieBack = styled.div`
  background: url("https://img.yts.mx/assets/images/movies/the_scarlet_hour_1956/background.jpg");
`

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  runtime: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
  large_cover_image: propTypes.string.isRequired,
  background_image_original: propTypes.string.isRequired
}

export default Movie;