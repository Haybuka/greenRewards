import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import cls from 'classnames';
import PasswordIcon from './passwordIcon';

const sans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });

interface Props {
  name: string;
  placeholder: string;
  type: 'email' | 'text' | 'password';
  icon?: boolean;
}

const InputField = ({ name, placeholder, type, icon }: Props) => {
  return (
    <aside className="w-full mb-6">
      <p
        className={cls(
          sans.className,
          'capitalize my-2 text-rewards-black font-semibold'
        )}
      >
        {name}
      </p>
      <label
        htmlFor={name}
        className={cls(
          sans.className,
          ' border border-text-rewards-black rounded-lg flex justify-between items-center gap-2 overflow-hidden w-full bg-white relative'
        )}
      >
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full outline-none h-full py-3 px-2  text-rewards-black bg-transparent"
        />
        <PasswordIcon icon={icon} />
      </label>
    </aside>
  );
};

export default InputField;
