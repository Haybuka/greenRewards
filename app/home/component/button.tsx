'use client';
import { Open_Sans } from 'next/font/google';
import cls from 'classnames';
import { HTMLProps } from 'react';

const sans = Open_Sans({ subsets: ['latin'], weight: '600' });

interface Props {
  text: string;
  handleClick?: () => void;
  className?: HTMLProps<HTMLElement>['className'];
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  text,
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
        'py-3  lg:py-2 px-4 text-center bg-rewards-100 my-4 rounded-md w-full  flex items-center justify-center capitalize',
        className
      )}
    >
      <span>{text}</span>
    </button>
  );
};
export default Button;
