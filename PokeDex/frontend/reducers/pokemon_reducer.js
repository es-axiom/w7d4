import {receiveAllPokemon} from '../actions/pokemon_actions';
import {merge} from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case "RECEIVE_ALL_POKEMON":
      newState = {};
      action.data.forEach((pokemon) => {
        newState[pokemon.id] = pokemon;
      });
      return newState;
    case "RECEIVE_POKEMON":
      newState = merge({},state);
      newState[action.data.id] = action.data;
      return newState;
    default:
      return state;
  }
};
