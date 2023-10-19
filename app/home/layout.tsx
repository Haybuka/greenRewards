import React, { ReactNode } from 'react';
import { Open_Sans, Titillium_Web } from 'next/font/google';
import NavLayout from './navLayout';
import FooterLayout from './footerLayout';
import styles from './layout.module.css';
import Banner from './banner';

type Prop = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Prop) => {
  return (
    <>
      <header className={styles.header}>
        <NavLayout />
        <Banner />
      </header>
      <main className="px-4 lg:px-14">{children}</main>
      <FooterLayout />
    </>
  );
};

export default HomeLayout;
