import { Titillium_Web, Open_Sans } from 'next/font/google';
import cls from 'classnames';
import Image from 'next/image';
// import InputField from '../component/input';
import Checkbox from '../component/checkbox';
// import Button from '../component/button';
import Link from 'next/link';
import InputField from '../component/input';
import Button from '../component/button';
import Header from '../component/header';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });
const titilium = Titillium_Web({ subsets: ['latin'], weight: '700' });

const Login = () => {
  return (
    <aside className="p-6 lg:p-0">
      <Header text="Welcome back GreenHero" />
      <form className="lg:w-[480px]">
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
          Don&apos;t have an account yet?{' '}
          <Link href={'/auth/register'} className="text-rewards-200">
            Sign up
          </Link>
        </p>
      </form>
    </aside>
  );
};

export default Login;
