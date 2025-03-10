// Components
import StepItem from "./elements/StepItem";

const Steps = () => {
  return (
    <div className="relative flex justify-between isolate lg:px-10">
      <StepItem stage="done" label="Select plan" />

      <div className="bg-turquoise-500 w-[calc(50%-36px)] h-[3px] absolute top-1.5 left-9 z-[-1] lg:w-[calc(50%-74px)] lg:left-20" />

      <StepItem stage="progress" label="Payment" />

      <div className="bg-gray w-[calc(50%-36px)] h-[3px] absolute top-1.5 right-9 z-[-1] lg:w-[calc(50%-74px)] lg:right-20" />

      <StepItem stage="default" label="Receipt" />
    </div>
  );
};

export default Steps;
