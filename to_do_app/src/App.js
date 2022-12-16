import { Fragment, useState, useRef, useEffect } from "react";

import TodoList from "./Components/Todos/TodoList";
import Button from "./Components/UI/Button/Button";
import Input from "./Components/UI/Input/Input";
import Cart from "./Components/UI/Cart/Cart";
import styles from "./App.module.css";

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
      <header className={styles.header}>
        <h1>Aplikacja do robienia rzeczy</h1>
      </header>
      <main>
        <div className={styles.fragment}>
          <TodoList todosList={todosList} checkTodo={checkTodo} />

          <Input
            ref={todoRef}
            name="Write new task"
            input={{
              type: "text",
              default: "Do ...",
            }}
          />
          <Cart>
            <Button onClick={handleNewTodo}>Add new task!</Button>
            <Button onClick={handleClearCompletedTasks}>
              Clear Completed Tasks
            </Button>
          </Cart>
          <Cart>
            {todosList.filter((todo) => !todo.checked).length} left to do
          </Cart>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
