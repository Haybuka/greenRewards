import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Odor_Mean_Chey, Titillium_Web } from 'next/font/google';
import cls from 'classnames';
import styles from './layout.module.css';
import ChevronArrow from './component/chevronArrow';

const odor = Odor_Mean_Chey({ subsets: ['latin'], weight: '400' });
const titilium = Titillium_Web({ subsets: ['latin'], weight: '400' });

type Prop = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Prop) => {
  return (
    <main className="flex h-screen w-screen bg-white relative">
      <section className="w-full lg:w-3/4 h-full flex justify-center items-center ">
        {children}
      </section>
      <section className="hidden lg:block lg:w-2/4 h-full ">
        <aside className={styles.aside}>
          <div>
            <h3 className="text-white flex items-center">
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={53.67}
                height={23.65}
              />
              <span
                className={cls(odor.className, 'inline-block text-[30px] ml-3')}
              >
                GreenRewards
              </span>
            </h3>
            <p className={cls(titilium.className, 'my-4 text-white text-lg')}>
              Welcome to GreenRewards, the platform that rewards you for your
              dedication to a greener planet. By signing up, you&apos;re taking
              a step toward not only improving the environment but also getting
              recognized and rewarded for your sustainable efforts.
            </p>
          </div>
          <div className="mb-10">
            <Image alt="" src={'/recycle.svg'} height={150} width={150} />
          </div>
        </aside>
      </section>
      <p className="absolute -scale-100 top-6 left-6 lg:top-10 lg:left-10 cursor-pointer">
        <ChevronArrow color="#000" />
      </p>
    </main>
  );
};

export default AuthLayout;
