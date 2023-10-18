import { Odor_Mean_Chey } from 'next/font/google';
import cls from 'classnames';
import { HTMLProps } from 'react';

const odor = Odor_Mean_Chey({ subsets: ['latin'], weight: '400' });

interface Prop {
  fill?: string;
  color?: HTMLProps<HTMLElement>['className'];
}
const HomeLogo = ({ fill = '#2B452B', color = 'text-rewards' }: Prop) => {
  return (
    <h3 className="text-white flex items-center">
      <svg
        width="55"
        height="26"
        viewBox="0 0 59 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.4757 0H15.2159C12.9393 0 10.8359 1.21024 9.69764 3.174L0.538286 20.062C-0.991174 22.7012 0.920772 26 3.97921 26H19.2941C22.7621 26 25.9622 24.1437 27.6745 21.1388L33.2585 11.2935L40.6007 22.0113C42.31 24.5065 45.1465 25.9995 48.1788 25.9995H53.7986L46.7151 16.5609H49.2291C52.5661 16.5609 55.653 14.798 57.3392 11.929C61.1955 5.36805 58.107 0 50.4757 0ZM47.5212 11.2198H33.3006L21.0857 11.2193C19.4938 11.2217 18.5794 12.0239 17.7893 13.3994L16.0877 16.4987H22.7418L21.9444 17.8472C21.297 18.9414 20.1176 19.613 18.843 19.613H10.7286L16.0311 9.99077C16.7357 8.76752 18.0243 7.96631 19.4402 7.96631L32.9321 7.89115L32.936 7.88489H48.2644C50.7465 7.90994 50.0303 11.2468 47.5212 11.2198Z"
          fill={fill}
        />
      </svg>
      <span
        className={cls(odor.className, 'inline-block text-[26px] ml-2 ', color)}
      >
        GreenReward
      </span>
    </h3>
  );
};

export default HomeLogo;
