// Packages
import classNames from "classnames";

interface ReceiptItemProps {
  variant: "regular" | "discount" | "total";
  label: string;
  value: string;
}

const ReceiptItem = ({ variant, label, value }: ReceiptItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <p
        className={classNames({
          "text-sm": variant == "regular",
          "text-sm text-pink": variant == "discount",
          "font-semibold": variant == "total"
        })}
      >
        {label}
      </p>
      <p
        className={classNames("font-semibold", {
          "text-pink": variant == "discount",
          "text-2xl": variant == "total"
        })}
      >
        {value}
      </p>
    </div>
  );
};

export default ReceiptItem;
