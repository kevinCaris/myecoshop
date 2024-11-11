import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageNotification from './PageNotification';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <PageNotification /> Notification affichée ici */}
      <main>{children}</main>  {/* Main content to display other pages */}
      <Footer />
    </div>
  );
};

export default Layout;
