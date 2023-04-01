import React, { useEffect, useState } from 'react';

export default function TodosPostsPractice() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   Users, todos, posts
  useEffect(() => {
    console.log('Type - UseEffect');
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      // ! Тут может быть код очистки (к примеру)
      console.log('type cleaner');
    };
  }, [type]);

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  //   Position
  useEffect(() => {
    console.log('Position ComponentDidMount');
    window.addEventListener('mousemove', handleMouseMove);

    // ! Чистим за собой
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Type: {type}</h2>

      <button type="button" onClick={() => setType('users')}>
        Users
      </button>
      <button type="button" onClick={() => setType('todos')}>
        Todos
      </button>
      <button type="button" onClick={() => setType('posts')}>
        Posts
      </button>

      <pre>{JSON.stringify(position, null, 2)}</pre>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
