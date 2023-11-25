import Categoria from "../components/Categoria";
import Header from "../components/Header";
import lista from "../listaFilm";

const Home = () => {
  return (
    <div>
      <Header />
      <Categoria categoria="Popolari" url={lista.popolari} />
      <Categoria categoria="Più votati" url={lista.top} />
      <Categoria categoria="In tendenza" url={lista.trend} />
      <Categoria categoria="Horror" url={lista.horror} />
      <Categoria categoria="In Arrivo" url={lista.inArrivo} />
    </div>
  );
};

export default Home;
