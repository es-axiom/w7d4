import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


const PokemonIndex = ({pokemon, children}) => {
  let pokemonz = Object.keys(pokemon).map((id) => (pokemon[id]));
  let pIdx = pokemonz.map((pokeman) => {
    return(
      <PokemonIndexItem
        id={pokeman.id}
        img_url={pokeman.image_url}
        name={pokeman.name}
        key={pokeman.id}
        />
    );
  });
  return(
    <div>
    <ul>{pIdx}</ul>
    {children}
    </div>
  );
};



export default PokemonIndex;
