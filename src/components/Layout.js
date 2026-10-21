import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  const location = useLocation();
  const isDetailRoute = location.pathname.startsWith('/expenses/') && location.pathname !== '/expenses/new';

  return (
    <div>
      {!isDetailRoute && <NavBar />}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
