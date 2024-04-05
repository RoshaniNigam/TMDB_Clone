import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movieObject }) {
  let { watchlist, handleAddtoWatchList, DeleteFromWatchList } =
    useContext(MovieContext);

  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true; // chnage button to cross
      }
    }
    return false; // added to my WatchList
  }

  return (
    
    <div
      className="h-[45vh] w-[250px]  bg-center bg-cover rounded-xl hover:scale-110 duration-300 flex flex-col justify-between " title="Click on Movie_Name for more info"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div
          onClick={() => DeleteFromWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 cursor-pointer" title="Remove from WatchList"
        >
          &#10060;
          {/* // code for cross */}
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 cursor-pointer" title="Add to WatchList"
        >
          &#128525;
        </div>
      )}
      <Link to={`/details/${movieObject.id}`}>
      <div className="text-white w-full text-center text-xl bg-gray-900/80 rounded-lg" title="Click for info">
        {movieObject.title}
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;
