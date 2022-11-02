import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label>{props.name}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
