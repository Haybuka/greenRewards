'use client';
import { Open_Sans } from 'next/font/google';
import cls from 'classnames';
import Image from 'next/image';
import ChevronArrow from './chevronArrow';
import { HTMLProps } from 'react';

const sans = Open_Sans({ subsets: ['latin'], weight: '600' });

interface Props {
  text: string;
  icon?: boolean;
  handleClick?: () => void;
  className?: HTMLProps<HTMLElement>['className'];
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  text,
  icon,
  handleClick,
  className = 'text-white',
  type = 'button',
}: Props) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={cls(
        sans.className,
        'py-3 px-2 text-center bg-rewards-100 my-4 rounded-md w-full  flex items-center justify-center',
        className
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
