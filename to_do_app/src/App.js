import { Fragment, useState, useRef, useEffect } from "react";

import TodoList from "./Components/Todos/TodoList";
import Button from "./Components/UI/Button/Button";

const LOCAL_STORAGE = "ToDoApplicationStorage";

function App() {
  const [todosList, setTodosList] = useState([]);

  const todoRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE));

    if (storedItems) {
      setTodosList([...storedItems]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todosList));
  }, [todosList]);

  const checkTodo = (id) => {
    const existingTodoId = todosList.findIndex((todo) => todo.id === id);
    const todo = todosList[existingTodoId];
    const updatedItem = {
      ...todo,
      checked: !todo.checked,
    };
    const newTodos = [...todosList];
    newTodos[existingTodoId] = updatedItem;
    setTodosList(newTodos);
  };

  const handleNewTodo = () => {
    const newTodo = todoRef.current.value;

    setTodosList((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random().toString(), description: newTodo, checked: false },
      ];
    });
    todoRef.current.value = null;
  };

  const handleClearCompletedTasks = () => {
    const newTodos = todosList.filter((todo) => !todo.checked);
    setTodosList(newTodos);
  };

  return (
    <Fragment>
      <TodoList todosList={todosList} checkTodo={checkTodo} />
      <input ref={todoRef} type="text" />
      <Button onClick={handleNewTodo}>Add new task!</Button>
      <Button onClick={handleClearCompletedTasks}>Clear Completed Tasks</Button>
      <div>{todosList.filter((todo) => !todo.checked).length} left to do</div>
    </Fragment>
  );
}

export default App;
