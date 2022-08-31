import React from 'react';

export function Pokemon({ pokemon }) {




  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  )
}
