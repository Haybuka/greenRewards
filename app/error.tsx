'use client';
import Error from 'next/error';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  // the error page is made client compoentn because of cases where we need to retry an action
  return <div>Error has occured</div>;
};

export default ErrorPage;
