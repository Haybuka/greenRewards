import React, { ReactNode } from 'react';
import { Odor_Mean_Chey } from 'next/font/google';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <section>another node {children}</section>;
};

export default Layout;
