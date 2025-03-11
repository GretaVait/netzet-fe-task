// Packages
import parse from "html-react-parser";

interface StatisticItemProps {
  percentage: number;
  description: string;
}

const StatisticItem = ({ percentage, description }: StatisticItemProps) => {
  return (
    <div className="text-center lg:text-left">
      <p className="text-6xl font-extrabold bg-linear-[91.81deg,#F276D3_8.13%,#5A91FF_34.6%,#3EF8FF_81.81%] inline-block text-transparent bg-clip-text mb-6">
        {percentage}%
      </p>

      <p className="text-lg font-medium text-white">{parse(description)}</p>
    </div>
  );
};

export default StatisticItem;
