const key = "09a5d076f2f408fa95422b4fc052a4c3";

const lista = {
  prova: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=it-IT&page=1`,
  popolari: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=it-IT&page=1`,
  top: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=it-IT&page=1`,
  trend: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=it-IT&page=2`,
  horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  inArrivo: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default lista;
