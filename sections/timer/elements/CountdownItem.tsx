// Helpers
import { formatTime } from "@/helpers/formatTime";

interface CountdownItemProps {
  time: number;
  label: string;
}

const CountdownItem = ({ time, label }: CountdownItemProps) => {
  return (
    <div className="bg-turquoise-600 rounded-sm flex flex-col items-center justify-center size-10 lg:size-12">
      <p className="text-white w-8 text-center font-bold lg:text-xl">
        {formatTime(time)}
      </p>
      <p className="text-white text-xs text-center -mt-1">{label}</p>
    </div>
  );
};

export default CountdownItem;
