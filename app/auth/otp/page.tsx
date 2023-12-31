'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import cls from 'classnames';

import Header from '../component/header';
import Button from '../component/button';
import Link from 'next/link';
import Otp from '../component/otpInput';
import AuthModal from '../component/modal';
import ModalCheck from '../component/modalCheck';
import { Titillium_Web } from 'next/font/google';

const titilium = Titillium_Web({ subsets: ['latin'], weight: ['400', '700'] });

const OtpPage = () => {
  const [visible, setVisible] = useState(false);
  const routes = useRouter();
  const handleModalToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <aside className="p-3 lg:p-0 relative">
        <Header text="verify your account" />
        <form className="lg:w-[480px]">
          <p className=" text-rewards-black">
            We sent a 4-digit code to{' '}
            <span className="text-rewards-200">devonlane@gmail.com</span> Code
            expires in 10 minutes
          </p>
          <Otp />
          <p className="text-sm">
            Didn&apos;t get a code?{' '}
            <Link href={'/auth/login'} className="text-rewards-200">
              Resend Code
            </Link>
          </p>
          <Button
            type="button"
            text="Verify"
            icon
            handleClick={handleModalToggle}
          />
        </form>
      </aside>
      <AuthModal visible={visible}>
        <div
          onClick={handleModalToggle}
          className="absolute right-10 top-10 text-xl cursor-pointer text-white"
        >
          x
        </div>
        <section className="text-center text-white">
          <h3
            className={cls(
              titilium.className,
              'my-4 text-2xl md:text-[40px] font-bold'
            )}
          >
            Registration successful
          </h3>
          <p className="my-4">Connecting your wallet</p>
          <section className="h-[150px] w-[150px] mx-auto my-4">
            <ModalCheck />
          </section>
          <Button
            text="connect wallet"
            type="button"
            className=" bg-white text-rewards-black"
            handleClick={() => routes.push('/home')}
          />
        </section>
      </AuthModal>
    </>
  );
};

export default OtpPage;
