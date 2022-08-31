import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMONS, GET_POKEMON } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';
import axios from "axios";
import { Card } from '../components/Card';
import { useState, useEffect } from "react";
export function PokemonsContainer() {


  let gql1Variables = {
    limit: 20,
    offset: 1, 
  };

  let gql2Variables = {}

//   const { data: {pokemons = {} } = {} } = useQuery(GET_POKEMONS, {
//     variables: gqlVariables,
//   });

  const [ getPokemons, {data: {pokemons = {} } = {} }] = useLazyQuery(GET_POKEMONS, {
    variables: gql1Variables,
  });

  const [ getPokemon, { data: {pokemon = {} } = {} } ]= useLazyQuery(GET_POKEMON, {
    variables: gql2Variables,
  });
  
  let check = true;

  useEffect(()=>{
    if(check) {
      check = false;
      getPokemons();
    }
  }, [])

  return (
    <>
      <div className="container">
        {console.log(pokemons)}
        {pokemons && pokemons?.results
          ? pokemons.results.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))
          : null}
      </div>
    </>
  );

}