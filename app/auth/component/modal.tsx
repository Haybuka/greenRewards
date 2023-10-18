import { ReactNode } from 'react';
import { Titillium_Web } from 'next/font/google';
import cls from 'classnames';

interface Prop {
  children: ReactNode;
  visible: boolean;
}

const titilium = Titillium_Web({ subsets: ['latin'], weight: ['400', '700'] });

const AuthModal = ({ children, visible }: Prop) => {
  return (
    visible && (
      <div
        className={cls(
          titilium.className,
          'absolute overflow-hidden top-1/2 flex justify-center flex-col items-center left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-[#0F160FB2] z-20'
        )}
      >
        {children}
      </div>
    )
  );
};

export default AuthModal;
