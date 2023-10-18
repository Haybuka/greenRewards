import React, { ReactNode } from 'react';

type Prop = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Prop) => {
  return (
    <main className="flex h-screen w-screen gap-10">
      <section className="w-1/2 h-full bg-red-500">{children}</section>
      <section className="w-1/2 h-full bg-rewards">
        <aside>
          <p className=" text-right">x</p>
          <h3>Green Rewards</h3>
          <p>
            Welcome to GreenRewards, the platform that rewards you for your
            dedication to a greener planet. By signing up, you&apos;re taking a
            step toward not only improving the environment but also getting
            recognized and rewarded for your sustainable efforts.
          </p>
        </aside>
      </section>
    </main>
  );
};

export default AuthLayout;
