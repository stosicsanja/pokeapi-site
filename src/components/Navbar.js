import React, { useContext } from "react";

const Navbar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className=" container d-flex justify-content-between">
      <nav>
        <img src={imgUrl} alt="pokeapiLogo"></img>
      </nav>
      <div className="mt-5">❤️</div>
    </div>
  );
};

export default Navbar;
