import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Sidebar />
    {children}
    <Footer />
  </>
);

export default Layout;
