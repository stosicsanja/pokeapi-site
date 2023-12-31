import React from "react";
import { CgPokemon } from "react-icons/cg";

const Sort = (props) => {
  const { ascendingEvent, descendingEvent, fetchPokemons } = props;

  return (
    <div className="d-flex justify-content-center gap-3 mt-4">
      <p className="d-flex justify-content-center mt-3">
        If you want to sort{"   "}
        <span className="mx-2">
          <CgPokemon></CgPokemon>
        </span>
        {"   "}
        alphabetically, select one of the options:{" "}
      </p>
      <div className="sort d-flex justify-content-between gap-2 p-2">
        <div
          className="btn border border-success rounded p-2"
          onClick={ascendingEvent}
        >
          A-Z
        </div>
        <div
          className="btn border border-success rounded p-2"
          onClick={descendingEvent}
        >
          Z-A
        </div>
        <div
          className="btn border border-success rounded p-2"
          onClick={fetchPokemons}
        >
          Default sort
        </div>
      </div>
    </div>
  );
};

export default Sort;
