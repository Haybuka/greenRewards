import { Open_Sans } from 'next/font/google';
import cls from 'classnames';

const sans = Open_Sans({ subsets: ['latin'], weight: '400' });

const Checkbox = () => {
  return (
    <aside className="flex">
      <p>
        <input
          type="checkbox"
          name="agree"
          id="agree"
          className="bg-white mr-1 border-gray-200"
        />
      </p>
      <p className={cls(sans.className, 'text-rewards-200 text-sm')}>
        I agree to the GreenReward&apos;s{' '}
        <span className="text-rewards">Terms of Service</span> and{' '}
        <span className="text-rewards">Privacy Policy</span>
      </p>
    </aside>
  );
};

export default Checkbox;
