import React from "react";

interface IContainerProp{
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProp): JSX.Element => {
  return <div className="p-5 max-w-3xl mx-auto">{children}</div>;
};
