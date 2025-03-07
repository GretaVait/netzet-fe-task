// Packages
import classNames from "classnames";

const buttonVariants = {
  primary: "h-[67px] rounded-3xl",
  secondary: "h-12 rounded-lg text-sm"
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: "primary" | "secondary";
  full?: boolean;
}

const Button = ({ children, variant, full = false, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        `w-full bg-linear-[91.81deg,#F175B9_8.13%,#5A91FF_35.04%,#3DF7FF_79.6%] text-white uppercase cursor-pointer font-semibold ${buttonVariants[variant]}`,
        {
          "lg:max-w-[480px]": variant == "primary" && !full,
          "lg:max-w-[240px]": variant == "secondary" && !full
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
