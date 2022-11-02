import React from "react";

import styles from "./TodoCart.module.css";

export default function TodoCart(props) {
  const changeCheckboxClick = () => {
    props.onChangeCheckbox(props.todo.id);
  };

  return (
    <div className={styles.cart}>
      <label>{props.todo.description}</label>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={changeCheckboxClick}
      ></input>
    </div>
  );
}
