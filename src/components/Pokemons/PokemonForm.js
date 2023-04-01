import React, { useState } from 'react';

import { AiOutlineGoogle } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = (e) => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Enter pokemon name');

      // ! Выходим из функции
      return;
    }
    // ! Вытягиваем значение формы (имя) из локального стейта и отправляем App
    onSubmit(pokemonName);

    setPokemonName('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="PokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <AiOutlineGoogle style={{ marginRight: 8 }} />
          Find
        </button>
      </form>
    </div>
  );
}
