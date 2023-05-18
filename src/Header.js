import React from "react";
import styles from "./Header.module.css";
import "./App.css";
import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [menu, setMenu] = React.useState(false);

  function handleClickMenuMobile() {
    setMenu(!menu);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/" className={styles.nav__logo}>
          Apprenti
        </Link>
        <div
          className={
            menu ? `${styles.nav__links__active}` : `${styles.nav__links}`
          }
        >
          <ul>
            <li>
              <Link to="/listacursos" className={styles.links__item}>
                Lista de Cursos
              </Link>
            </li>

            <li>
              <Link to="/sobre" className={styles.links__item}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contato" className={styles.links__item}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={styles.nav__menu__mobile}
          onClick={handleClickMenuMobile}
        >
          <BiMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
