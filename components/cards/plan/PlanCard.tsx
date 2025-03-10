// Packages
import classNames from "classnames";

// Components
import RadioButton from "@/components/utils/RadioButton";

interface PlanCardProps {
  active: boolean;
  setActive: () => void;
  topChoice?: boolean;
  interval: number;
  price: {
    regular: number;
    discounted: number;
  };
}

const PlanCard = ({
  active,
  setActive,
  topChoice,
  interval,
  price
}: PlanCardProps) => {
  const displayTwoDecimals = (number: number) => {
    return Math.floor(number * 100) / 100;
  };

  return (
    <div
      className={classNames("relative isolate transition-all", {
        "bg-sky rounded-3xl pt-3": topChoice
      })}
    >
      <p
        className={classNames(
          "text-sm font-bold text-white uppercase mb-3 text-center",
          {
            hidden: !topChoice
          }
        )}
      >
        Top Choice for Beginners
      </p>

      <div
        className={classNames(
          "absolute z-[-1] -top-1 -left-1 rounded-3xl w-full h-full bg-sky/60 blur-sm m-1 transition-opacity",
          {
            "opacity-100": active,
            "opacity-0": !active
          }
        )}
      />

      <div
        className={classNames(
          "bg-white flex justify-between rounded-3xl px-4 cursor-pointer transition-all",
          {
            "py-8": topChoice,
            "py-6": !topChoice,
            "bg-linear-[290.8deg,#D7EEEB_0%,#FFFFFF_76.77%]": !active,
            "scale-x-[0.98] -translate-y-1": active && topChoice
          }
        )}
        onClick={setActive}
      >
        <div className="flex gap-x-4">
          <RadioButton active={active} />

          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-bold">{interval}-month plan</p>

            <p className="text-xs">Billed every {interval} month</p>

            <p className="text-xs">
              <span className="text-pink line-through">
                USD {price.regular}
              </span>{" "}
              <span className="font-bold">USD {price.discounted}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 items-end">
          <div className="flex gap-x-1">
            <p className="text-sm font-semibold">USD</p>
            <p className="text-3.5xl font-bold">
              {displayTwoDecimals(price.discounted / (interval * 30))}
            </p>
          </div>

          <p className="text-sm text-pink line-through">
            USD {displayTwoDecimals(price.regular / (interval * 30)) - 0.01} per
            day
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
