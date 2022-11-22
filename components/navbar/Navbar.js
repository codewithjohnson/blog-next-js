import React from "react";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import menuBar from "../../public/asset/menu.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const currentRoute = router.route.split("/")[1];

  const navbarRef = useRef(null);

  //hide menu on window body click
  useEffect(() => {
    const hideMenu = (e) => {
      if (!navbarRef.current.contains(e.target) && showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", hideMenu);
    return () => window.removeEventListener("click", hideMenu);
  }, [showMenu]);

  // Hide or show menu at a certain min-width 600px
  useEffect(() => {
    const navBarLimit = window.matchMedia("(min-width:600px)");
    navBarLimit.addEventListener("change", () => {
      if (navBarLimit.matches) {
        setShowMenu(false);
      }
    });
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenuOnLinkClicked = () => {
    setShowMenu(false);
  };

  const handleNavBarClassName = `${styles.navbar} ${
    currentRoute === "posts"
      ? styles.postNavBg
      : currentRoute === "about"
      ? styles.aboutNavBg
      : ""
  }`;

  const handleNavMenuClassName = `${styles.navList} ${
    showMenu ? styles.menuActive : ""
  }`;

  return (
    <>
      <nav className={handleNavBarClassName} ref={navbarRef}>
        <div className={styles.logo}>
          <Link href="/" onClick={hideMenuOnLinkClicked}>
            genlab
          </Link>
        </div>
        <ul className={handleNavMenuClassName}>
          <li className={styles.navItem}>
            <Link href="/" onClick={hideMenuOnLinkClicked}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/posts" onClick={hideMenuOnLinkClicked}>
              Posts
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" onClick={hideMenuOnLinkClicked}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" onClick={hideMenuOnLinkClicked}>
              Case Studies
            </Link>
          </li>
          <li className={styles.navItem}>
            <button className={styles.contactBtn}>
              <Link href="/projects" onClick={hideMenuOnLinkClicked}>
                Contact
              </Link>
            </button>
          </li>
        </ul>
        <Image
          src={menuBar}
          alt="menu"
          width="28"
          height="28"
          className={styles.menuBar}
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
