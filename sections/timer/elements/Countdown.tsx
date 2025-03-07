// Components
import CountdownItem from "./CountdownItem";

const Countdown = () => {
  return (
    <div className="flex items-center gap-x-1">
      <CountdownItem time={9} label="min" />
      <p className="text-white font-medium text-xs">:</p>
      <CountdownItem time={59} label="sec" />
    </div>
  );
};

export default Countdown;
