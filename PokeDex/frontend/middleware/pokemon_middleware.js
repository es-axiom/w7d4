import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import { requestAllPokemon, receiveAllPokemon,
   requestPokemon, receivePokemon } from '../actions/pokemon_actions';

export default ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case "REQUEST_ALL_POKEMON":
      success = (data) => dispatch(receiveAllPokemon(data));
      fetchAllPokemon(success);
      break;
    case "REQUEST_POKEMON":
      success = (data) => dispatch(receivePokemon(data));
      fetchPokemon(action.id, success);
      break;
    default:
      return next(action);
  }
};
