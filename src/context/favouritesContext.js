import React from "react";

const FavouriteContext = React.createContext({
  favouritePokemons: [],
  updatefavouritePokemons: (id) => null,
});

export const FavouriteProvider = FavouriteContext.Provider;
export default FavouriteContext;
