import React from 'react';
import './Header.css';
import { IoLogOutOutline } from "react-icons/io5";
import logo from '../../assets/images/MoneyGuardLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const username = email ? email.split('@')[0] : 'Name'; // Kullanıcı adını email'den al veya 'Guest' göster

  const handleClick = () => {
    dispatch(logout()); // Redux logout işlemini tetikleme
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
      </div>
      <div className="header__user-section">
        <span className="header__username">{username}</span>
        <IoLogOutOutline
          className="header__exit-icon"
          onClick={handleClick}
          style={{ cursor: 'pointer', fontSize: '1.5rem' }} // İkon tıklanabilir ve görsel olarak belirgin olsun
          title="Exit" // Tooltip için
        />
      </div>
    </header>
  );
};

export default Header;
