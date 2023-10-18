import { Open_Sans } from 'next/font/google';
import HomeLogo from './component/logo';
import cls from 'classnames';
import NavPopover from './component/navPopover';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });

const NavLayout = () => {
  return (
    <nav
      className={cls(
        sans.className,
        'flex my-8 justify-between lg:items-center flex-col lg:flex-row px-4 lg:px-14 mb-6 '
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
        <li className="capitalize bg-rewards-100 text-white rounded-md py-3 lg:py-2 px-4">
          Connect wallet
        </li>
      </ul>
    </nav>
  );
};

export default NavLayout;
