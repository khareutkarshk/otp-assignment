import React, { useEffect, useRef, useState } from 'react';

const Input = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [visible, setVisible] = useState(new Array(length).fill(false));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const newVisible = [...visible];
    newVisible[index] = true;
    setVisible(newVisible);

    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
      console.log(e.target.nextSibling);

    }
  };

  const handleKeyUp = (index, e) => {
    if (e.key === 'Backspace') {
      console.log('Backspace pressed at index:', index);

      const newVisible = [...visible];
      newVisible[index] = false;
      setVisible(newVisible);
      console.log(e.target.nextSibling);
    }
  };

  return (
    <div className='flex gap-4 justify-center'>
      {otp.map((value, index) => (
        <div key={index} className="otpInputContainer">
          <input
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onKeyUp={(e) => handleKeyUp(index, e)}
            className="otpInput text-2xl font-semibold w-12 h-12 m-2 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{ color: 'transparent' }}
          />
          <span
            className={`otpInputValue text-center text-2xl font-semibold ${visible[index] ? 'fade-in visible' : 'fade-out hidden'}`}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Input;
