import React from 'react';
import HomeLogo from './component/logo';
import { Open_Sans } from 'next/font/google';
import cls from 'classnames';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });

const FooterLayout = () => {
  return (
    <footer className="bg-rewards-300 px-4 lg:px-14 py-6 text-white">
      <section className=" lg:flex flex-col  items-end">
        <HomeLogo color="text-white" fill="#fff" />
        <p className="w-[300px] text-[14px] lg:text-base lg:text-right">
          Where environmental consciousness meets blockchain innovation
        </p>
      </section>
      <nav
        className={cls(
          sans.className,
          'flex flex-col lg:flex-row my-8 justify-between lg:items-center lg:px-14'
        )}
      >
        <p> &copy; 2023 Greenreward</p>

        <ul className="lg:flex items-center">
          <li className="my-4 lg:mx-4">Privacy Policy</li>
          <li className="my-4 lg:mx-4">Terms of Use</li>
          <li className="my-4 lg:mx-4">Contact us</li>
        </ul>
        <ul className="flex items-center">
          <li className="">fb</li>
          <li className="mx-3">tw</li>
          <li className="mx-3"></li>
        </ul>
      </nav>
    </footer>
  );
};

export default FooterLayout;
