import { useReducer } from 'react';
import styles from './Counter.module.css';

function countReducer(state, action) {
  //   ! То что мы передаем при клике на кнопку записывается в nextState/action, а то что в initialState -> идет в prevState/state
  //   return prevState + nextState;
  //   ! Обьект который мы передали называется действием

  switch (action.type) {
    case 'increment':
      return {
        // ! На всякий случай распыляем старое состояние, потому что в объкте может быть больше свойств !
        ...state,
        count: state.count + action.payload,
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}

// ! Функция init - для того, когда нужно initialState, которое где то вычисляется
function init(param) {
  // ! В param будет 2
  return param + 5;
}

export default function Counter() {
  //   const [count, setCount] = useState(0);

  //   ! "Функцию правильно называть dispatch если юзаем reducer"
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  //   ! В функцию init, параметром прокидывается initialState - (2)
  //   const [something, dispatchSecond] = useReducer(countReducer, 2, init);

  return (
    <div>
      <button
        className={styles.button}
        type="button"
        // ! Передаем объект с "действием"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Decrease
      </button>
      <button
        className={styles.button}
        type="button"
        // ! Передаем объект с "действием"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Increase
      </button>

      <p className={styles.count}>{state.count}</p>
    </div>
  );
}
