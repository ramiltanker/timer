import React, { createContext, Dispatch, FC, SetStateAction } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IContext {
  type: "light" | "dark";
  setType: TypeSetState<string>;
}

interface IThemeProvider {
  children: React.ReactNode;
}

const useValue = () => {
  const [type, setType] = React.useState<string>("light");

  return {
    type,
    setType,
  };
};

export const ThemeContext = createContext({} as ReturnType<typeof useValue>);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return (
    <ThemeContext.Provider value={useValue()}>{children}</ThemeContext.Provider>
  );
};
