import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import Todoslist from "./components/Todoslist";
const App = () => {

  const intialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState(""); //useState hooks to track user enter input
  const [todos, setTodos] = useState(intialState); //useState hooks to track user ll the todos list item ,this will be assigned to empty array
  const [editTodo, setEditTodo] = useState(null);


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todoslist
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
