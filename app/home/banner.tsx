import { Open_Sans, Playfair_Display, Titillium_Web } from 'next/font/google';
import cls from 'classnames';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });
const titilium = Titillium_Web({ subsets: ['latin'], weight: '400' });

const Banner = () => {
  return (
    <section className="text-center  lg:w-[700px] mx-auto">
      <h3
        className={cls(
          playfair.className,
          'text-rewards-black text-2xl lg:text-4xl font-bold mb-3 drop-shadow-lg'
        )}
      >
        Empower climate change and sustainable carbon reduction through
        recycling.
      </h3>
      <p
        className={cls(
          titilium.className,
          'drop-shadow-lg lg:text-lg my-4 text-rewards-black'
        )}
      >
        Trade recyclables on the blockchain, earn rewards, and power the green
        revolution with every sale and purchase
      </p>
    </section>
  );
};

export default Banner;
