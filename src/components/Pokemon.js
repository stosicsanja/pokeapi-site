import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavouriteContext from "../context/favouritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  //  console.log(pokemon);
  const { favouritePokemons, updatefavouritePokemons } =
    useContext(FavouriteContext);

  const emptyHeart = "🤍";
  const fillHeart = "❤️";
  const heart = favouritePokemons.includes(pokemon.name)
    ? fillHeart
    : emptyHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updatefavouritePokemons(pokemon.name);
  };

  return (
    <div className="d-flex">
      <div className="card justify-content-center align-items-center">
        <img
          className="card-img-top"
          src={pokemon.sprites.front_default}
          alt="Card image cap"
        ></img>
        <div className="card-body align-center">
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">#{pokemon.id}</p>
          </div>
          <div className="mt-2 d-flex gap-3 justify-content-between align-items-center">
            <Link to={`/pokemon/${pokemon.name}`} className=" btn btn-primary">
              View Details
            </Link>

            <div onClick={clickHeart} className="">
              {heart}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
