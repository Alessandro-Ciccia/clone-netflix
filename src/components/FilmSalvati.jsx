import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const FilmSalvati = () => {
  const [films, setFilms] = useState([]);
  const { user } = UserAuth();

  const slideSinistra = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideDestra = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setFilms(doc.data()?.film);
    });
  }, [user?.email]);

  const filmRef = doc(db, "users", `${user?.email}`);
  const eliminaFilm = async (filmID) => {
    try {
      const result = films.filter((item) => item.id !== filmID);
      await updateDoc(filmRef, {
        film: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Film Preferiti</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideSinistra}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((film) => (
            <div
              key={film.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${film?.backdrop_path}`}
                alt={film?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {film?.title}
                </p>
                <p
                  onClick={() => eliminaFilm(film.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideDestra}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default FilmSalvati;
