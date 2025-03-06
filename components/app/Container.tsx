interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="lg:container mx-auto px-6">{children}</div>;
};

export default Container;
