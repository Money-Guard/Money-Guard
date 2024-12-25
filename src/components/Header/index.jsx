import React from 'react';
import './Header.module.css';
import { IoLogOutOutline } from "react-icons/io5";
import logo from '../../assets/images/MoneyGuardLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';





 const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const username = email.split('@')[0]; // Kullanıcı adını email'den al

  const handleClick = () => {
    dispatch(logout()); // Çıkış işlemi
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
        <span className="header__logo-text">Money Guard</span>
      </div>
      <div className="header__user-section">
        <span className="header__username">{username}</span>
        <button className="header__exit-button" onClick={handleClick}>
          <IoLogOutOutline />
          Exit
        </button>
      </div>
    </header>
  );
};



export default Header;
