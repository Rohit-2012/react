import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import style from "./MovieList.module.css";
import Loader from "../loader/Loader";

const MovieList = () => {
  const { movieList, isLoading } = useContext(Context);
  return (
    <>
      <div className={style.movie_container}>
        {movieList.map((movie) => {
          return (
            <div key={movie.imdbID} className={style.movie_card}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <span>Year: {movie.Year}</span>
              <span>Type: {movie.Type}</span>
            </div>
          );
        })}
      </div>
      {isLoading && <div className={style.loader_container}>
        <Loader />
      </div>}
      
    </>
  );
};

export default MovieList;
