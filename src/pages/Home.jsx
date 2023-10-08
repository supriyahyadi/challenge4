import React from "react";
import { MoviePopular } from "../assets/component/Movie/MoviePopular";
import { HeaderHome } from "../assets/component/Header/HeaderHome";
import { Footer } from "../assets/component/Header/Footer";

export const Home = () => {
  return (
    <div>
      <HeaderHome/>
      <MoviePopular/>
      <Footer/>
    </div>
  )
}
