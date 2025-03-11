// Components
import CountdownItem from "./CountdownItem";

interface CountdownProps {
  minutes: number;
  seconds: number;
}

const Countdown = ({ minutes, seconds }: CountdownProps) => {
  return (
    <div className="flex items-center gap-x-1">
      <CountdownItem time={minutes} label="min" />
      <p className="text-white font-medium text-xs">:</p>
      <CountdownItem time={seconds} label="sec" />
    </div>
  );
};

export default Countdown;
