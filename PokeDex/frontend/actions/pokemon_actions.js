export const receiveAllPokemon = (data) => ({
    type: "RECEIVE_ALL_POKEMON",
    data
});

export const requestAllPokemon = () => ({
  type: "REQUEST_ALL_POKEMON"
});
export const receivePokemon = (data) => ({
    type: "RECEIVE_POKEMON",
    data
});

export const requestPokemon = (id) => ({
  type: "REQUEST_POKEMON",
  id
});
