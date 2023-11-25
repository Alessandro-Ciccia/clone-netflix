import axios from "axios";
import { useEffect, useState } from "react";
import lista from "../listaFilm.js";

const Header = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(lista.prova).then((res) => {
      setFilms(res.data.results);
    });
  }, []);

  const descCorta = (desc, length) => {
    if (desc?.length > length) {
      return desc.slice(0, length) + "...";
    } else {
      return desc;
    }
  };

  const film = films[Math.floor(Math.random() * films?.length)];

  console.log(film);

  return (
    <div className="w-full h-[800px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[800px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${film?.backdrop_path}`}
          alt={film?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{film?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Guarda
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Grada più tardi
            </button>
          </div>
          <p className="text-gray-400 text-sm">Anno: {film?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {descCorta(film?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
