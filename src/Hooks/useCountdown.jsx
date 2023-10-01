import { useEffect, useState } from 'react';

const useCountdown = () => {
  const [countDown, setCountDown] = useState(2505600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown-1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / ( 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % ( 60 * 60 * 24)) / ( 60 * 60)
  );
  const minutes = Math.floor((countDown % ( 60 * 60)) / ( 60));
  const seconds = Math.floor((countDown % ( 60)));

  return [days, hours, minutes, seconds];
};

export { useCountdown };