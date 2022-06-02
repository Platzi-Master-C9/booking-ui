import React from 'react';
import './TextBox.css';

export function TextBox() {
  return (
    <main className="principal_chart">
      <div className="main_box">
        <input className="text_box" type="text" name="textbox" placeholder="Escribe un mensaje..." />
        <input className="btn_box" type="button" name="btn" value="Enviar" />
        <img className="btn_box-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBndK9DYMwFARgEymRkip1lCpjpIQxqChYggGgYw9K1qCkp6UAJuBHxxUgkDCYx0lfebL9/JS6EgA/JQ1LA6Vkk3W21GJJTj69TKUY2zQU0nev9KYK+nSU0F9X9KjHcTJy6bEufiigwlAub6sDrcm5CK93nwdRQzII7I88wsHIdZ/7NL1nXiMHgjWSL+yVjN3bWr6r6AW7AAAAAElFTkSuQmCC" alt="send" />
      </div>
    </main>
  );
}

export default TextBox;
