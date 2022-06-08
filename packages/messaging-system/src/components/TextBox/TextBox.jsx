/* eslint-disable react/prop-types */
// External dependencies
import React from 'react';

// Internal dependencies
import styles from './TextBox.module.scss';

function TextBox({
  value = '',
  onChange = () => {},
  disabled = false,
  loading = false,
  onSubmit = () => {},
}) {
  const onTextChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <main className={styles.principal_chart}>
      <div className={styles.main_box}>
        <input
          className={styles.text_box}
          type="text"
          name="textbox"
          placeholder="Escribe un mensaje..."
          disabled={disabled || loading}
          onChange={onTextChange}
          value={value}
        />

        <button
          // className={`btn_box ${loading ? 'btn_box-loading' : ''}`}
          className={`${styles.btn_box} ${loading ? styles['btn_box-loading'] : ''}`}
          type="button"
          onClick={onSubmit}
          disabled={disabled || loading}
        >
          {
            loading ? (
              <div className={styles['btn_box-loader']}>
                <div />
                <div />
                <div />
                <div />
              </div>
            ) : (
              <>
                <span>Enviar</span>
                <img className={styles['btn_box-icon']} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBndK9DYMwFARgEymRkip1lCpjpIQxqChYggGgYw9K1qCkp6UAJuBHxxUgkDCYx0lfebL9/JS6EgA/JQ1LA6Vkk3W21GJJTj69TKUY2zQU0nev9KYK+nSU0F9X9KjHcTJy6bEufiigwlAub6sDrcm5CK93nwdRQzII7I88wsHIdZ/7NL1nXiMHgjWSL+yVjN3bWr6r6AW7AAAAAElFTkSuQmCC" alt="send" />
              </>
            )
          }
        </button>
      </div>
    </main>
  );
}

export default TextBox;
