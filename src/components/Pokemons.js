import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokemons = (props) => {
  // console.log(props);
  const { pokemons, page, setPage, total } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div>
        <div className="d-flex justify-content-center mb-5 ">
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          ></Pagination>
        </div>

        <div className="">
          <div className="col-lg-4 pokemons-grid">
            {pokemons.map((pokemon, index) => {
              return <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
