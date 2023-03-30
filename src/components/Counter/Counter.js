import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    // ! Если хочешь что-то обновить, делай что-то относительно предыдущего state
    setCounterA((prevState) => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    // ! Если хочешь что-то обновить, делай что-то относительно предыдущего state
    setCounterB((prevState) => prevState + 1);
  };

  // ! ----- В useEffect нужно обязательно передавать анонимную функцию -----

  //   ! Запускается каждый раз при изменении пропсов или стейта - значение по умолчанию
  //   useEffect(() => {
  //     console.log('UseEffect`s working');
  //   });

  //   ! [] - Указывают на то, что useEffect запустится только один раз при рендере елемента

  //   ! [a, b] - будет работать только при изменении этих двух параметров массива зависимостей
  useEffect(() => {
    console.log('UseEffect`s working', Date.now());
    const totalClicks = counterA + counterB;
    document.title = `Total clicks: ${totalClicks}`;
  }, [counterB, counterA]);

  return (
    <div>
      <button type="button" className={styles.button} onClick={handleCounterAIncrement}>
        Clicked counterA {counterA} times
      </button>

      <button type="button" className={styles.button} onClick={handleCounterBIncrement}>
        Clicked counterB {counterB} times
      </button>
    </div>
  );
}
