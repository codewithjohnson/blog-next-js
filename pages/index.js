import React from "react";
import HomeStyles from "../styles/Home.module.css";
import Header from "../components/header/Header";

const index = () => {
  return (
    <>
      <div className={HomeStyles.home}>
        <div className={HomeStyles.header}>
          <Header />
        </div>
      </div>
    </>
  );
};

export default index;
