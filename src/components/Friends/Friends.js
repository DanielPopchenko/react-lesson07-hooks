import React, { useState, useMemo } from 'react';

const InitialFriends = [
  'Alex',
  'Anton',
  'Tatyana',
  'Alyona',
  'Daniel',
  'Alina',
  'Dan',
  'Nastya',
  'Katya',
  'Nikita',
  'Poul',
  'Linda',
  'Mirolyb2',
  'Alex2',
  'Anton2',
  'Tatyana2',
  'Alyona2',
  'Daniel2',
  'Alina2',
  'Dan2',
  'Nastya2',
  'Katya2',
  'Nikita2',
  'Poul2',
  'Linda2',
  'Mirolyb2',
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(InitialFriends);
  const [filter, setFilter] = useState('');

  //   ! Используем для того чтобы при изменении стэйта count не срабатывала функция visibleFriends
  //   ! и не сортировала массив друзей, а вызывалась только при изменении фильтра (значния инпута)
  //   ! почему не UseEffect ? - потому что UseEffect вычисляет и запускает код при изменении кого-то стэйта или пременной

  const visibleFriends = useMemo(() => {
    console.log('Filter`s working');
    return friends.filter((friend) => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  //   const visibleFriends = friends.filter((friend) =>
  //     friend.toLowerCase().includes(filter),
  //   );

  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        {count}
      </button>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      />

      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
