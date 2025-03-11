// Packages
import classNames from "classnames";

interface RadioButtonProps {
  active: boolean;
}

const RadioButton = ({ active }: RadioButtonProps) => {
  return (
    <div
      className={classNames(
        "rounded-full size-5 flex items-center justify-center transition-colors",
        { "bg-sky": active, "bg-turquoise-200": !active }
      )}
      role="radio"
      aria-checked={active}
      tabIndex={0}
    >
      <div
        className={classNames(
          "rounded-full bg-white size-2 transition-opacity",
          { "opacity-100": active, "opacity-0": !active }
        )}
      ></div>
    </div>
  );
};

export default RadioButton;
