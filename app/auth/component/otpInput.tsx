'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

interface Prop {}

const Otp = () => {
  const [otp, setOtp] = useState('');

  return (
    <>
      <aside className="hidden lg:block">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="inline-block mx-4"></span>}
          containerStyle={{ margin: '20px 0' }}
          inputStyle={{
            padding: '10px 20px',
            borderRadius: '10px',
            width: '80px',
            background: 'white',
            border: '1px solid gray',
            outline: 'none',
          }}
          renderInput={(props) => <input {...props} />}
        />
      </aside>
      <aside className="block lg:hidden">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="inline-block mx-4"></span>}
          containerStyle={{ margin: '20px 0' }}
          inputStyle={{
            padding: '10px 20px',
            borderRadius: '10px',
            width: '60px',
            background: 'white',
            border: '1px solid gray',
            outline: 'none',
          }}
          renderInput={(props) => <input {...props} />}
        />
      </aside>
    </>
  );
};

export default Otp;
