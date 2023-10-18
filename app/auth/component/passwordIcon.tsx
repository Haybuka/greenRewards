'use client';
import Image from 'next/image';
import React from 'react';

interface Prop {
  icon: boolean | undefined;
}
const PasswordIcon = ({ icon }: Prop) => {
  return (
    <>
      {icon && (
        <p
          className="absolute right-2 z-10"
          onClick={() => console.log('trigger clicked')}
        >
          <Image src={'/Hide.svg'} height={14} width={20} alt="" />
        </p>
      )}
    </>
  );
};

export default PasswordIcon;
