import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokemons from "../components/Pokemons";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "../services/api";
import { FavouriteProvider } from "../context/favouritesContext";
import Sort from "../components/Sort";

const localStorageKey = "favourite_pokemon";

function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(24, 24 * page);
      // console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
    } catch (err) {}
  };

  const loadFavouritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavourites(pokemons);
  };

  useEffect(() => {
    loadFavouritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const updatefavouritePokemons = (name) => {
    const updated = [...favourites];
    const isFavourite = updated.indexOf(name);

    if (isFavourite >= 0) {
      updated.splice(isFavourite, 1);
    } else {
      updated.push(name);
    }
    setFavourites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const ascendingEvent = () => {
    let sortedData = [...pokemons];
    //   console.log(sortedData);
    let result = sortedData.sort((a, b) => a.name.localeCompare(b.name));
    console.log(result);
    setPokemons(result);
  };

  const descendingEvent = () => {
    let sortedData = [...pokemons];
    //   console.log(sortedData);
    let result = sortedData.sort((a, b) => b.name.localeCompare(a.name));
    console.log(result);
    setPokemons(result);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
  };

  return (
    <div>
      <FavouriteProvider
        value={{
          favouritePokemons: favourites,
          updatefavouritePokemons: updatefavouritePokemons,
        }}
      >
        <div className="page-wrapper">
          <Navbar></Navbar>
          <div>
            <Sort
              ascendingEvent={ascendingEvent}
              descendingEvent={descendingEvent}
              fetchPokemons={fetchPokemons}
            ></Sort>
            <Searchbar onSearch={onSearchHandler} />
            {notFound ? (
              <h1 className="mt-5 d-flex justify-content-center align-center">
                There is no such Pokemon{" "}
              </h1>
            ) : (
              <Pokemons
                pokemons={pokemons}
                loading={loading}
                page={page}
                setPage={setPage}
                total={total}
              />
            )}
          </div>
        </div>
      </FavouriteProvider>
    </div>
  );
}

export default HomePage;
