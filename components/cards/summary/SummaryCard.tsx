// Components
import ProgressBar from "@/components/utils/progress-bar/ProgressBar";

const levels = {
  high: {
    text: "text-pink",
    backgroundColor: "bg-pink",
    border: "border-pink"
  },
  moderate: {
    text: "text-cyan",
    backgroundColor: "bg-cyan",
    border: "border-cyan"
  }
};

interface SummaryCardProps {
  title: string;
  level: "high" | "moderate";
  description: string;
}

const SummaryCard = ({ title, level, description }: SummaryCardProps) => {
  return (
    <div
      className={`bg-turquoise-800 rounded-3xl p-6 lg:px-10 border ${levels[level].border}`}
    >
      <h2 className="text-xl mb-2 text-white font-bold lg:text-2xl">{title}</h2>

      <p
        className={`text-xl mb-2 font-extrabold uppercase ${levels[level].text}`}
      >
        {level}
      </p>

      <p className="text-lg mb-6 text-white font-medium">{description}</p>

      <ProgressBar backgroundColor={levels[level].backgroundColor} />
    </div>
  );
};

export default SummaryCard;
