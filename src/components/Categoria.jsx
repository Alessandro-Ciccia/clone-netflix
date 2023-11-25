import { useEffect, useState } from "react";
import axios from "axios";
import Film from "./Film";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Categoria = ({ categoria, url }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setFilms(res.data.results);
    });
  }, [url]);

  const slideSinistra = () => {
    var slider = document.getElementById("slider" + categoria);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideDestra = () => {
    var slider = document.getElementById("slider" + categoria);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{categoria}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideSinistra}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + categoria}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((film, id) => (
            <Film key={id} film={film} />
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

export default Categoria;
