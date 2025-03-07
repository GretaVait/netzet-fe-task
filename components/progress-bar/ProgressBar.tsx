interface ProgressBarProps {
  backgroundColor: string;
}

const ProgressBar = ({ backgroundColor }: ProgressBarProps) => {
  return (
    <div className="rounded-2xl w-full h-3 bg-turquoise-600 relative overflow-hidden">
      <div
        className={`absolute inset-0 h-full w-2/3 rounded-2xl ${backgroundColor}`}
      />
    </div>
  );
};

export default ProgressBar;
