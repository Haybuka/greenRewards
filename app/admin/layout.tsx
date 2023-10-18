import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <section>another node {children}</section>;
};

export default Layout;
