import React, { useState } from 'react';
import PokemonForm from './components/Pokemons/PokemonForm';
// import './base.css';
import PokemonInfo from './components/Pokemons/PokemonInfo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}
