import React, { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavouriteContext from "../context/favouritesContext";

const Navbar = () => {
  const { favouritePokemons } = useContext(FavouriteContext);
  console.log(favouritePokemons);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className=" container d-flex justify-content-between">
      <nav>
        <img src={imgUrl} alt="pokeapiLogo"></img>
      </nav>
      <div className="mt-5">
        ❤️
        {favouritePokemons.length}
      </div>
    </div>
  );
};

export default Navbar;
