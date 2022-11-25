import React, { createContext, useState } from 'react';

interface MouseContextPropsType {
  cursorType: string;
  cursorChangeHandler: (param: string) => void;
  children: React.ReactNode;
}

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: (params: string) => {},
});

const MouseContextProvider = ({
  cursorType,
  cursorChangeHandler,
  children,
}: MouseContextPropsType) => {
  const [type, setType] = useState('');

  const cursorHandler = (cursor: string) => {
    setType(cursor);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: type,
        cursorChangeHandler: cursorHandler,
      }}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
