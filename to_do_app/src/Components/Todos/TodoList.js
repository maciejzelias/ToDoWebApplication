import React from "react";

import styles from "./TodoList.module.css";

import TodoCart from "./TodoCart";

export default function TodoList(props) {
  return (
    <div className={styles.list}>
      {props.todosList.map((todo) => {
        return (
          <TodoCart
            key={todo.id}
            todo={todo}
            onChangeCheckbox={props.checkTodo}
          />
        );
      })}
    </div>
  );
}
