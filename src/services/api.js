import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {}
};

export const getPokemons = async (limit = 24, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {}
};
