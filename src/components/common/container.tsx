interface ContainerProp {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProp): JSX.Element => {
  return <div className="p-5 max-w-3xl mx-auto">{children}</div>;
};
