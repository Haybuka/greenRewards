import { Open_Sans, Playfair_Display, Titillium_Web } from 'next/font/google';
import cls from 'classnames';
import Button from './component/button';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });
const titilium = Titillium_Web({ subsets: ['latin'], weight: '400' });

const Banner = () => {
  return (
    <section className="text-center flex flex-col-reverse lg:flex-col lg:w-[700px] mx-auto px-4 lg:px-14">
      <div>
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
        <aside className="flex justify-center items-center w-[300px] mx-auto gap-4 my-4">
          <Button text="sell products" />

          <Button
            text="buy products"
            className=" border-rewards-100 border bg-white text-rewards-100"
          />
        </aside>
      </div>
      <aside className="flex items-end gap-6 mb-6 justify-center">
        <Image src={'/home/banner_one.png'} alt="" height={350} width={340} />
        <Image
          src={'/home/banner_two.png'}
          className="hidden lg:inline-block"
          alt=""
          height={450}
          width={480}
        />
      </aside>
    </section>
  );
};

export default Banner;
