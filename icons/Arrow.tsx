interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const Arrow = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={16 * 0.6875}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.94792 0.923993C1.53841 0.342945 2.48812 0.350597 3.06917 0.941084L7.92104 5.87177L12.9478 0.92413C13.5382 0.343005 14.4879 0.350534 15.069 0.940945C15.6501 1.53136 15.6426 2.48107 15.0522 3.0622L7.88713 10.1146L0.930829 3.04524C0.349781 2.45476 0.357433 1.50504 0.94792 0.923993Z"
        fill={color}
      />
    </svg>
  );
};
