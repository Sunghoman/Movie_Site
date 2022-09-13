import React from "react";
import propTypes from 'prop-types';

import "../Movies.scss";

function Component(e) {
  if (e.length > 200) {
    return <p className="text">{e.slice(0, 180)}...</p>;
  } else {
    return <p className="text">{e}</p>
  }
}

function Movie({ id, url, year, title, rating, runtime, summary, genres, large_cover_image, background_image_original }) {

  return(
    <div className="movie_card" key={id}>
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={large_cover_image} alt={title}/>
          <h1>{title} ({year})</h1>
          <h4>{rating} / 10.0</h4>
          <span className="minutes">{runtime} Min</span>
            <ul className="type">
              {
                genres.map(genres => <li className="genres_list"> -{genres} </li>)
              }
            </ul>
          <div className="movie_desc">
            <p className="text">{Component(summary)}</p>
          </div>
        </div>
        <a href={url} target="_blank" rel="noreferrer"><div className="play">▶︎</div></a>
      </div>
      <img className="blur_back movie_back" src={background_image_original} alt={title}/>
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
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