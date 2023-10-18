import { Titillium_Web, Open_Sans } from 'next/font/google';
import cls from 'classnames';
import Image from 'next/image';
import InputField from '../component/input';
import Checkbox from '../component/checkbox';
import Button from '../component/button';
import Link from 'next/link';
import Header from '../component/header';
import ChevronArrow from '../component/chevronArrow';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });
const titilium = Titillium_Web({ subsets: ['latin'], weight: '700' });

const RegisterPage = () => {
  return (
    <aside className="p-6 lg:p-0 relative">
      <Header text="create your account" />
      <form className="lg:w-[480px]">
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
