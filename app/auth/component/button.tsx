'use client';
import { Open_Sans } from 'next/font/google';
import cls from 'classnames';
import Image from 'next/image';
import ChevronArrow from './chevronArrow';

const sans = Open_Sans({ subsets: ['latin'], weight: '600' });

interface Props {
  text: string;
  icon?: boolean;
  handleClick?: () => void;
}

const Button = ({ text, icon, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={cls(
        sans.className,
        'py-3 px-2 text-center bg-rewards-100 my-4 rounded-md w-full text-white flex items-center justify-center'
      )}
    >
      <span>{text}</span>
      {icon && (
        <p className="mx-3 ">
          <ChevronArrow color="white" />
        </p>
      )}
    </button>
  );
};

export default Button;
