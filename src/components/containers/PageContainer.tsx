import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return <div className={`w-full h-screen overflow-y-scroll`}>{children}</div>;
};

export default PageContainer;
