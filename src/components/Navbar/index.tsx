import React from 'react';
import './styles.scss';
import Input from '../../components/Input';
import Menu from '../../assets/icons/menu.svg';

interface INavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: INavbarProps): JSX.Element {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <label>Chukwudi</label>
      </div>
      <Input />
      <img src={Menu} alt="" onClick={onMenuClick} />
    </div>
  );
}

export default Navbar;
