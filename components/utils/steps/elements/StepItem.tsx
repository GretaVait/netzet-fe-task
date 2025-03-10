// Packages
import classNames from "classnames";

interface StepItemProps {
  stage: "done" | "progress" | "default";
  label: string;
}

const StepItem = ({ stage, label }: StepItemProps) => {
  return (
    <div className="flex flex-col items-center gap-y-3 w-17">
      <div
        className={classNames("size-3.5 rounded-full", {
          "bg-turquoise-500": stage == "done",
          "bg-white border-2 border-turquoise-500": stage == "progress",
          "bg-white border-2 border-gray": stage == "default"
        })}
      />

      <p className="text-xs font-semibold text-center">{label}</p>
    </div>
  );
};

export default StepItem;
