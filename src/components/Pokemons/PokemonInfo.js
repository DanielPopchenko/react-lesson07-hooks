import { useState, useEffect } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  //  ! Можно использовать useReducer, чтобы не делать несколько useState, но в этой ситуации лучше делать useState-ом

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  // ! Заменили ComponentDidUpdate на это
  useEffect(() => {
    // ! Изначально pokemonName - пустая строка
    // ! у нас делается объект покемона по пустой строке, поэтому ничего не рабоатет
    // ! Тут мы говорим что елси pokemonName - пустая строка, то ничего не делаем !!
    if (!pokemonName) {
      // console.log('pokemonName пустая строка, не делаем fetch');
      return;
    }

    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        // ! Порядок операций важен в ассинхронных операциях, если мы сначала засэтим статус в резолвед,
        // !  у нас все упадет потому, что компонент перерисуется, а покемона то нету
        // ✅
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);

        // ❌
        // setStatus(Status.RESOLVED);
        // setPokemon(pokemon);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // ! в объекте зависимостей именно pokemonName потому что это динамическое значение (пропс), оно изменяется!!!
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter pokemon name!</div>;
  }
  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
