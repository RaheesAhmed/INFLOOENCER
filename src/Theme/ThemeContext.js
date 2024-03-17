import React, { createContext, useContext } from 'react';
// import { useColorScheme } from "react-native";
import { light, dark } from './colorPallet';
import { mystyles } from './GlobalTheme';

const ThemeContext = createContext({
  dark: true,
  theme: light,
  setScheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // const colorScheme = useColorScheme();
  const [darkTheme, setDarkTheme] = React.useState(false);

  // React.useEffect(() => {
  //   setDarkTheme(colorScheme === "dark");
  // }, [colorScheme]);

  const defaultTheme = {
    dark: darkTheme,
    theme: darkTheme ? dark : light,
    globalStyles: mystyles(darkTheme ? dark : light),
    setScheme: () => {
      setDarkTheme(!darkTheme);
    },
  };

  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
