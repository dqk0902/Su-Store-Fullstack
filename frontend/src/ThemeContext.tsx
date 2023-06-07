import React, { createContext, useState } from "react";

type Theme = {
  mode: "light" | "dark";
};

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export const defaultTheme: Theme = {
  mode: "light",
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      mode: prevTheme.mode === "light" ? "dark" : "light",
    }));
  };

  const contextValue: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
