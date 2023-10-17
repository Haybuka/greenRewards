import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/productCard';

export default function Home() {
  return (
    <main className="">
      <h3>Hello world</h3>
      <ProductCard />
      <Link href={'/users/'}>new page</Link>
    </main>
  );
}
