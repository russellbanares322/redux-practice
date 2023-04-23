import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const inputs = useSelector((state) => state.inputs);

  return (
    <div className={styles.header}>
      {inputs.name}
      <nav>
        <p className={styles.logo}>Logo</p>
        <div className={styles.web_ul}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.mobile_ul}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
