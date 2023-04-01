import React, { useEffect, useState, useRef } from 'react';

// ! Как пропустить useEffect при 1 рендере
export default function SkippEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  //   const [query, setQuery] = useState('');
  const isFirstRender = useRef(true);

  //   ! по дефолту useEffect происходит при 1 рендере (сразу)
  useEffect(() => {
    if (isFirstRender.current) {
      console.log(isFirstRender);
      //   ! Сэтим что после 1 рендера идет второй и третий отесть на false
      isFirstRender.current = false;
      return;
    }

    // ! и после 1 рендера выполнится этот код
    console.log('Use Effect - ' + Date.now());
  });

  //   ! Если делаю fetch
  //   useEffect(() => {
  //     if (query === '') {
  //       // ! Таким образом пропускаем запрос на 1 рендере и на всех где query - 1
  //       return;
  //     }
  //     fetch('');
  //   }, [query]);

  const handleBtnClick = () => setCount((count) => count + 1);

  return (
    <div>
      SkippEffectOnFirstRender
      <button onClick={handleBtnClick}>{count}</button>
    </div>
  );
}
