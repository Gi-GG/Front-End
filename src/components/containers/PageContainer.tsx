import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <div className={`w-full min-h-screen overflow-y-scroll overflow-x-hidden`}>
      {children}
      <div className="mt-28"></div>
    </div>
  );
};

export default PageContainer;
