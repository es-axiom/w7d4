export const fetchAllPokemon = (success, error) => {
  $.ajax ({
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchPokemon = (id, success, error) => {
  $.ajax ({
    url: `api/pokemon/${id}`,
    success,
    error
  });
};
