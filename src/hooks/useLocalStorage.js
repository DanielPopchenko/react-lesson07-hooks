import { useState, useEffect } from 'react';

// Этот хук можно использовать для всех компонентов в нашем проектах

export default function useLocalStorage(
  key,
  defaultValue,
  // может быть такое, что нужно юзать отличные от JSON.stringify/parse функции
  serialize = JSON.stringify,
  desirialize = JSON.parse,
) {
  const [state, setState] = useState(() => {
    return desirialize(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);

  // Заменяем email/setEmail || password/setPassword
  return [state, setState];
}
