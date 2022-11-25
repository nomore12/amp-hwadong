import React from 'react';

interface PropsType {
  title: String;
  children: React.ReactNode;
}

const ContentWrapper = ({ title, children }: PropsType) => {
  return (
    <div className="w-2/3 flex gap-8">
      <div>{title}</div>
      <div className="justify-self-end w-full">{children}</div>
    </div>
  );
};

export default ContentWrapper;
