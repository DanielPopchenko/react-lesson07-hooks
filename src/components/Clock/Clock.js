import { useEffect, useState, useRef } from 'react';
import './Clock.css';

export default function Clock() {
  // линивая иннициализация - если значение стэйта зависит от выражения
  const [time, setTime] = useState(() => new Date());

  // ! useRef - вызывается только при 1 рендере и будет хранить значение с 1 рендера
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Интревал каждые 2ms: ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Это функция очистки перед следущим вызовом useEffect');
    };
  });

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <div className="ClockFace">{time.toLocaleTimeString()}</div>
      <button type="button" onClick={stop}>
        Stop Clock
      </button>
    </div>
  );
}
