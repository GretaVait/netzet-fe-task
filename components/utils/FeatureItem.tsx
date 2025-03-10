// Base
import Image from "next/image";

// Packages
import parse from "html-react-parser";
import classNames from "classnames";

interface FeatureItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: string;
  description: string;
}

const FeatureItem = ({ icon, description, ...props }: FeatureItemProps) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classNames("flex items-start gap-x-4", {
        [`${className}`]: className
      })}
      {...restProps}
    >
      <Image
        src={`/assets/icons/${icon}.svg`}
        width={48}
        height={48}
        alt={`Illustration of ${icon}`}
      />

      <p className="font-medium">{parse(description)}</p>
    </div>
  );
};

export default FeatureItem;
