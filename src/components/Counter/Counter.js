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

  //   ! Запускается каждый раз при изменении пропсов или стейта
  useEffect(() => {
    console.log('UseEffect`s working');
  });

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
