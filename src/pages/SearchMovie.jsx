import React from "react";
import { NavbarHome } from "../assets/component/Header/NavbarHome";
import { useSearchMovieDataQuery } from "../services/get-data-search-movie";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("query");

  const { data: dataMovie } = useSearchMovieDataQuery({
    query: search,
  });

  return (
    <div className="bg-black">
      <div className="text-center px-20 border-b-2 border-red-500 pt-20 bg-black">
        <h1 className="text-red-600 text-5xl font-bold mb-4 pb-4">
          Search Results For: {search}
        </h1>
      </div>

      {/* menampilkan data berdasarkan inputan search */}
      {dataMovie && (
        <div className="flex flex-wrap justify-center items-center pb-6 pt-10">
          {dataMovie.results.map((movieSearch) => (
            <div
              className="w-[20rem] h-[37rem] bg-black m-3 border-2 border-red-500 rounded-lg hover:scale-90 hover:cursor-pointer"
              onClick={() => {
                navigate(`/Detail/${movieSearch.id}`)}}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieSearch.poster_path}`}
                alt=""
                className="border-b rounded"/>
              <span className="text-center text-xl text-white flex items-center justify-center p-4 pt-4">
                "{movieSearch.title}"
              </span>
            </div>
          ))}
        </div>
      )}
      <NavbarHome style={{ zIndex: 0 }} />
    </div>
  );
};
