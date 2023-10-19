import { Open_Sans } from 'next/font/google';
import HomeLogo from './component/logo';
import cls from 'classnames';
import NavPopover from './component/navPopover';
import Button from './component/button';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });

const NavLayout = () => {
  return (
    <nav
      className={cls(
        sans.className,
        'flex py-8 justify-between lg:items-center flex-col lg:flex-row px-4 lg:px-14 mb-6 '
      )}
    >
      <aside>
        <HomeLogo />
      </aside>
      <ul className="lg:flex items-center">
        <li className="my-4 lg:mx-4 text-rewards font-bold">Home</li>
        <li className="my-4 lg:mx-4">Marketplace</li>
        <li className="my-4 lg:mx-4">About us</li>
      </ul>
      <ul className="lg:flex items-center">
        <li className="my-4 lg:mx-3 flex items-center cursor-pointer">
          <NavPopover />
        </li>
        <Button text="connect wallets" />
      </ul>
    </nav>
  );
};

export default NavLayout;
