import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory} from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer}
        onEnter={() => store.dispatch(requestAllPokemon())}>
        <Route path="pokemon/:id" component={PokemonDetailContainer}
          onEnter={(nextState) => store.dispatch(requestPokemon(nextState.params.id))}>

        </Route>

      </Route>
    </Router>
  </Provider>
);

export default Root;
