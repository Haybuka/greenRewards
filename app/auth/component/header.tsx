import { Titillium_Web } from 'next/font/google';
import Image from 'next/image';
import cls from 'classnames';

const titilium = Titillium_Web({ subsets: ['latin'], weight: '700' });

const Header = ({ text }: { text: string }) => {
  return (
    <h3
      className={cls(
        titilium.className,
        'uppercase text-2xl text-black text-center flex flex-col justify-center items-center mb-6'
      )}
    >
      <span className="block capitalize"> {text}</span>

      <Image src={'/arrow_underline.svg'} height={7} width={80} alt="" />
    </h3>
  );
};

export default Header;
