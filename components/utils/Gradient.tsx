// Packages
import classNames from "classnames";

interface GradientProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  borderRadius: 24 | 40;
  blur?: boolean;
}

const radius = {
  24: "rounded-3xl",
  40: "rounded-[40px]"
};

const Gradient = ({ borderRadius, blur, ...props }: GradientProps) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classNames(
        `absolute inset-0 z-[-1] bg-linear-[91.81deg,#F276D3_8.13%,#5A91FF_34.6%,#3EF8FF_81.81%] ${radius[borderRadius]}`,
        {
          "blur-sm": blur,
          [`${className}`]: className
        }
      )}
      {...restProps}
    />
  );
};

export default Gradient;
