import React from 'react';

const SearchBar = ({ recherche, setRecherche }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={recherche}
      onChange={(e) => setRecherche(e.target.value)}
      className="form-control"
    />
  );
};

export default SearchBar;
