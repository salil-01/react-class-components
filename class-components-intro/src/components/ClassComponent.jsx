import React from "react";
import styles from "./ClassComponent.module.css";
class ClassComponent extends React.Component {
  render() {
    return <h1 className={styles.heading}>Hii from Class Component</h1>;
  }
}
export default ClassComponent;
