import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  //   Диструктуризируем текущий обьект и вытягиваем лэйбл
  const { label } = options[activeOptionIdx];

  const makeOptionClassName = (index) => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Color Picker</h2>
        <p className={styles.chosenColor}>Выбран цвет: {label}</p>
      </div>

      <div className={styles.colorsRows}>
        {options.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              aria-label={label}
              type="button"
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
