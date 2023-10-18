'use client';

import Header from '../component/header';
import Button from '../component/button';
import Link from 'next/link';
import OTPInput from 'react-otp-input';
import Otp from '../component/otpInput';

const OtpPage = () => {
  return (
    <aside className="p-6 lg:p-0 relative">
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
        <Button text="Verify" icon />
      </form>
    </aside>
  );
};

export default OtpPage;
