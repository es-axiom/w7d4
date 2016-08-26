import { connect } from 'react-redux';
import {requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
// import React from 'react';



const mapStateToProps = state => ({
  pokemonz: state
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

const PokemonDetailContainer =  connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
export default PokemonDetailContainer;
