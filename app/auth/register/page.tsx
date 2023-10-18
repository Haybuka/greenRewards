'use client';

import Link from 'next/link';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import InputField from '../component/input';
import Checkbox from '../component/checkbox';
import Button from '../component/button';
import Header from '../component/header';
const RegisterPage = () => {
  const route = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    route.push('/auth/otp');
  };

  return (
    <aside className="p-3 lg:p-0">
      <Header text="create your account" />
      <form className="lg:w-[480px]" onSubmit={handleSubmit}>
        <InputField name="name" placeholder="e.g Devon Lane" type="text" />
        <InputField
          name="email"
          placeholder="e.g devonlane@gmail.com"
          type="email"
        />
        <InputField
          name="password"
          placeholder="password"
          type="password"
          icon
        />
        <Checkbox />
        <Button text="Continue" icon />
        <p>
          Already have an account?{' '}
          <Link href={'/auth/login'} className="text-rewards-200">
            Sign in
          </Link>
        </p>
      </form>
    </aside>
  );
};

export default RegisterPage;
