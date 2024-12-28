import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { BiStats } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import styles from './Navigation.module.css'; // Modül CSS

const Navigation = () => {
  return (
    <nav className={styles.NavContainer}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <div className={styles.IconTitleContainer}>
            <TiHome className={styles.Icon} />
              <p className={styles.NavTitle}>Home</p>
            </div>
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <div className={styles.IconTitleContainer}>
            <BiStats className={styles.Icon} />
              <p className={styles.NavTitle}>Statistics</p>
            </div>
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            to="/currency"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <div className={styles.IconTitleContainer}>
            <FaDollarSign className={styles.CurrencyIcon} />
              <p className={styles.NavCurrencyTitle}>Currency</p>
            </div>
            
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;