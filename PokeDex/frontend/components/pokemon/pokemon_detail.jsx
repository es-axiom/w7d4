import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


const PokemonDetail = ({pokemonz, params}) => {

  let pokemon = pokemonz[params.id];
   ;
  return(
    <section className="pokemon-detail">
  <ul>
    <img src={pokemon.image_url}/>
      <li><h2>{pokemon.name}</h2></li>
      <li>Type: {pokemon.poke_type}</li>
      <li>Attack: {pokemon.attack}</li>
      <li>Defense: {pokemon.defense}</li>
      <li>Moves: &#34;{pokemon.moves}&#34;</li>
    <section className="toys">
        <h3>Toys</h3>
      <ul className="toy-list">
        <li>toys</li>
      </ul>
    </section>
  </ul>
</section>
  );
};



export default PokemonDetail;
