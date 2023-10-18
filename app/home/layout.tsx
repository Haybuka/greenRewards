import React, { ReactNode } from 'react';
import { Open_Sans, Titillium_Web } from 'next/font/google';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import cls from 'classnames';
import HomeLogo from './component/logo';
import NavPopover from './component/navPopover';

const titilium = Titillium_Web({ subsets: ['latin'], weight: '400' });
const sans = Open_Sans({ subsets: ['latin'], weight: '400' });

type Prop = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Prop) => {
  return (
    <>
      <header>
        <nav
          className={cls(
            sans.className,
            'flex my-8 justify-between flex-col lg:flex-row px-4 lg:px-14'
          )}
        >
          <aside>
            <HomeLogo />
          </aside>
          <ul className="lg:flex items-center">
            <li className="my-4 lg:mx-4">Home</li>
            <li className="my-4 lg:mx-4">Marketplace</li>
            <li className="my-4 lg:mx-4">About us</li>
          </ul>
          <ul className="lg:flex items-center">
            <li className="my-4 lg:mx-3 flex items-center cursor-pointer">
              <NavPopover />
            </li>
            <li className="capitalize bg-rewards-100 text-white rounded-md py-2 px-4">
              Connect wallet
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </header>
      <main className="px-4 lg:px-14">{children}</main>
      <footer className="bg-rewards-300 px-4 lg:px-14 py-6 text-white">
        <section className=" lg:flex flex-col items-end">
          <HomeLogo color="text-white" fill="#fff" />
          <p className="w-[300px] lg:text-right">
            Where environmental consciousness meets blockchain innovation
          </p>
        </section>
        <nav
          className={cls(
            sans.className,
            'flex flex-col lg:flex-row my-8 justify-between lg:px-14'
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
            <li className="mx-3">iG</li>
          </ul>
          {/* </div> */}
        </nav>
      </footer>
    </>
  );
};

export default HomeLayout;
