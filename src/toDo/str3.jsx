import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

function STR3() {
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

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoInput = event.target.elements.todoInput;
    const newTodo = todoInput.value;
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      todoInput.value = "";
    }
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
        <Link to="/str2">
          <button className="btn-2">Шығу</button>
        </Link>
      </header>
      <main>
        <form onSubmit={handleAddTodo}>
          <h3 className="title">Жаңа тапсырма</h3>
          <input
            type="text"
            placeholder="Тақырып"
            id="todoInput"
            className="input"
            name="todo"
            required
          />
          <label htmlFor="todoInput"></label>
          <div className="buttons">
            <button type="submit" className="btn">
              Қосу
            </button>
            <button type="reset" id="reset" className="btn-cancel">
              Қоспау
            </button>
          </div>
        </form>
        
      </main>
    </div>
  );
}

export default STR3;