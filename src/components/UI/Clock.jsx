import { useEffect, useState } from 'react';
import ClockItem from './ClockItem';

const initialTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

const Clock = () => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const destination = new Date('10-10-2023').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (seconds < 0 && minutes < 0) {
        setTime(initialTime);
        clearInterval(interval);
        return;
      }
      setTime({
        days,
        hours,
        minutes,
        seconds
      });
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center justify-content-center gap-3">
      <ClockItem time={time.days} label="Days" />
      <ClockItem time={time.hours} label="Hours" />
      <ClockItem time={time.minutes} label="Minutes" />
      <ClockItem time={time.seconds} label="Seconds" withColon={false} />
    </div>
  );
};

export default Clock;
