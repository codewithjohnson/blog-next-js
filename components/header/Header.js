import React from "react";
import Image from "next/image";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.heading}>AN EXCELLENT PRODUCT LAB</h2>
        <p className={styles.vision}>
          Building growth by developing sustainable digital products & services,
          faster.
        </p>
      </header>
     
    </>
  );
};

export default Header;
