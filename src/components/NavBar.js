import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end>Trang chủ</NavLink>
      <NavLink to="/expenses">Danh sách</NavLink>
      <NavLink to="/expenses/new">Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;