import React from "react";

export default function TodoCart(props) {
  const changeCheckboxClick = () => {
    props.onChangeCheckbox(props.todo.id);
  };

  return (
    <div>
      <label>{props.todo.description}</label>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={changeCheckboxClick}
      ></input>
    </div>
  );
}
