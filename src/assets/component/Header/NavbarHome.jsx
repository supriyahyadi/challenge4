import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavbarHome = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // handle search dengan enter setelah input movie
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/Search?query=${search}`);
    }
  };  

  return (
    <div className="bg-transparent fixed top-0 flex justify-between items-center w-screen px-8 py-2 pr-16 pl-16">
      {/* Movie List Home */}
      <div className="px-2 py-3">
        <span
          className="text-red-600 text-3xl font-bold cursor-pointer underline underline-offset-1"
          onClick={() => {navigate("/");}}>Movie-List
        </span>
      </div>

      {/* Input Search */}
      <div>
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="text-center w-[25rem] py-2 rounded-3xl border-2 border-red-600 text-white bg-transparent cursor-pointer placeholder-white"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
      </div>

      {/* Button Login Register */}
      <div className="px-3 mx-3 space-x-3">
        <button
          type="button"
          className="px-6 py-2 bg-transparent text-red-500 border border-red-500 rounded-3xl hover:bg-red-600 hover:text-white">Login
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700">Register
        </button>
      </div>
    </div>
  );
};
