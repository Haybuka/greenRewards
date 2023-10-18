'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push('/home');
  }, []);
  return (
    <main className="">
      <h3>Hello world</h3>
    </main>
  );
}
