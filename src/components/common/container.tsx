import React, {HTMLAttributes} from "react";

interface IContainerProp extends HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...rest }: IContainerProp): JSX.Element => {
  return <div className={`container max-w-4xl mx-auto ${className}`} {...rest}>{children}</div>;
};

export const FlexContainer = ({children, className, ...rest}: IContainerProp): JSX.Element => {
  return <div className={`${className ? 'flex ' + className : 'flex'}`} {...rest}>{children}</div>
}