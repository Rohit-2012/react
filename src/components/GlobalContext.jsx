import { createContext, useEffect, useState } from "react";

export const Context = createContext({
  searchParams: "",
  handleInputChange: () => {},
  handleSearch: () => {},
  isLoading: false,
  movieList: [],
});

const GlobalContext = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovieList(movies);
  }, []);

  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    if (data.Response === 'True') {
      setMovieList(data.Search);
      localStorage.setItem("movies", JSON.stringify(data.Search));
    } else {
      alert(data.Error)
    }
  };

  const handleInputChange = (e) => {
    setSearchParams(e.target.value);
  };

  const handleSearch = () => {
    if (searchParams.trim()) {
      setIsLoading(true);
      getMovies(
        `https://www.omdbapi.com/?i=tt3896198&apikey=4e54231d&s=${searchParams}`
      );
    } else {
      alert("Enter text to search");
    }
    setSearchParams("");
  };
  const contextValue = {
    searchParams,
    handleInputChange,
    handleSearch,
    isLoading,
    movieList,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default GlobalContext;
