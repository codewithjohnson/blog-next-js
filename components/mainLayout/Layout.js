import React from "react";
import styles from "../../styles/layout.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
