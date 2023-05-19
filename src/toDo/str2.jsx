import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

function STR2() {
  const [todos, setTodos] = useState([]);

  // получаем список todos из localStorage и устанавливаем его в состояние при загрузке компонента
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  // сохраняем todos в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = (index) => {
    // создаем новый массив todos без элемента, который мы хотим удалить
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(newTodos);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="message">
          <img className="person" src="../img/Person.svg" alt="person" />
          <div className="mess-item">
            <p className="mess-title">Сәлем, Ербол 👋🏽</p>
            <p className="exercise">{todos.length} тапсырма бар</p> 

          </div>
        </div>
        <h2 className="header-title">ZhaSa</h2>
        <Link to="/">
          <button className="btn-2">Шығу</button>
        </Link>
      </header>
      <main>
        <Link to="/str3" className="plus">
          <span className="round">
            <i className="fa-solid fa-plus"></i>
          </span>
          <span className="plus-text">Жаңа тапсырма қосу</span>
        </Link>
        <div className="list">
          {todos.map((todo, index) => (
            <div className="list-item" key={index}>
              <label>
                <input type="checkbox" className="checkbox" />
                <span className="fake"></span>
                <span className="span">{todo}</span>
              </label>
              <i className="fa-thin fa-pipe pipe"></i>
              <img
                src="../img/basket.svg"
                alt="basket"
                onClick={() => handleDeleteTodo(index)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default STR2;