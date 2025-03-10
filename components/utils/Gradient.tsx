interface GradientProps {
  borderRadius: 24 | 40;
}

const radius = {
  24: "rounded-3xl",
  40: "rounded-[40px]"
};

const Gradient = ({ borderRadius }: GradientProps) => {
  return (
    <div
      className={`absolute inset-0 z-[-1] bg-linear-[91.81deg,#F276D3_8.13%,#5A91FF_34.6%,#3EF8FF_81.81%] blur-sm ${radius[borderRadius]}`}
    />
  );
};

export default Gradient;
