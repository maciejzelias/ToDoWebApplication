import React from "react";

import styles from "./Cart.module.css";

export default function Cart(props) {
  return <div className={styles.cart}>{props.children}</div>;
}
