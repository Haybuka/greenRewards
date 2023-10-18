import React, { ReactNode } from 'react';
import { Open_Sans, Titillium_Web } from 'next/font/google';
import NavLayout from './navLayout';
import FooterLayout from './footerLayout';

type Prop = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Prop) => {
  return (
    <>
      <header>
        <NavLayout />
      </header>
      <main className="px-4 lg:px-14">{children}</main>
      <FooterLayout />
    </>
  );
};

export default HomeLayout;
