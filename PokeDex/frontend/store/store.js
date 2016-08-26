import {createStore} from 'redux';
import {pokemonReducer} from '../reducers/pokemon_reducer';
import FetchPokemon from '../middleware/pokemon_middleware';
import { applyMiddleware } from 'redux';

export const configureStore = () => (
  createStore(pokemonReducer, applyMiddleware(FetchPokemon))
);
