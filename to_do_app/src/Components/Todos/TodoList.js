import React from "react";

import TodoCart from "./TodoCart";

export default function TodoList(props) {
  return (
    <div>
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
