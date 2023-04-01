import React, { useEffect, useState, useRef } from 'react';

// let renderCount = 0;

export default function UseRef() {
  const [value, setValue] = useState('initial');
  //   ! Сохраняем что-то между рендерами, но не вызываем рендер
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    // ! Считаем кол-во рендеров
    // ! К нащей переменной булем добавлять 1 при каждом обновлении стэйта или пропсов нашего компонента
    renderCount.current++;
    // console.log(inputRef.current);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      UseRef
      <h1>Кол-во рендеров: {renderCount.current}</h1>
      <h2>Previous state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <button onClick={focus}>Set focus</button>
      <p>{value}</p>
    </div>
  );
}
