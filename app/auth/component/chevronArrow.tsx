'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Prop {
  color: string;
}

const ChevronArrow = ({ color = '#fff' }: Prop) => {
  const route = useRouter();

  const routeBack = () => {
    route.back();
  };

  return (
    <svg
      onClick={routeBack}
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 7H15.5M15.5 7L9.5 1M15.5 7L9.5 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronArrow;
