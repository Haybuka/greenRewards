import Image from 'next/image';
import cls from 'classnames';
import { Odor_Mean_Chey } from 'next/font/google';
import GreenRewards from './auth/logo';

const odor = Odor_Mean_Chey({ subsets: ['latin'], weight: '400' });

const Loading = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <h3 className="flex items-center animate-pulse">
        <GreenRewards />
      </h3>
    </section>
  );
};

export default Loading;
