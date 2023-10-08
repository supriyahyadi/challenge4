import React, { useEffect } from "react";
import { NavbarHome } from "../assets/component/Header/NavbarHome";
import { useParams } from "react-router-dom";
import { useMovieDataQueryDetail } from "../services/get-data-movie-detail";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export const DetailMovie = () => {
  const { id } = useParams();
  const { data: dataMovie } = useMovieDataQueryDetail({ id });

  useEffect(() => {}, [dataMovie]);

  //handle genre pada detail movie
  const handleGenresMovie = (genres) => {
    return genres.map((genre) => genre.name).join(", ");
  };

  return (
    // Gambar Movie Detail Berdasarkan ID
    <div className="relative">
      {dataMovie && (
        <div
          className="h-[100vh] bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path})`,
          }}></div>)}

      {/* Detail Movie */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-48 z-1">
        {dataMovie && (
          <div className="absolute text-white drop-shadow-2xl">
            <h1 className="text-6xl font-bold w-[75%]">{dataMovie.title}</h1>
            <p className="text-lg mt-6 ">{handleGenresMovie(dataMovie.genres)}</p>
            <p className="mt-6 text-base w-[40%]">"{dataMovie.overview}"</p>
            <p className="mt-6 text-lg flex items-center gap-2"> <AiOutlineStar size={30} className="text-yellow-300"/>
            {dataMovie.vote_average.toFixed(1)} / 10.0</p>
            <button className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white rounded-full mt-6 border border-1 hover:bg-red-600">
              <FaPlayCircle size={30} />
              WATCH TRAILER
            </button>
          </div>
        )}
      </div>
      <NavbarHome style={{ zIndex: 2 }} />
    </div>
  );
};
