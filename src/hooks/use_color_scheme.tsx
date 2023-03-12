import React, {
  useCallback,
  useMemo,
  useState,
  createContext,
  useContext
} from "react";

function getPreferredColorScheme() {
  const storageScheme =
    "window" in global
      ? window.localStorage?.getItem("color-scheme")
      : undefined;

  return storageScheme === "dark" || storageScheme == "light"
    ? storageScheme
    : "window" in global &&
      window?.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const ColorSchemeContext = createContext<{
  toogleColorScheme: () => void;
  colorScheme: "light" | "dark";
} | null>(null);

export const ColorSchemeProvider: React.FC = ({ children }) => {
  const colorScheme = useMemo(() => getPreferredColorScheme(), []);
  const [state, setState] = useState<"light" | "dark">(colorScheme);

  const toogleColorScheme = useCallback(() => {
    setState(s => {
      const newState = s === "dark" ? "light" : "dark";
      localStorage.setItem("color-scheme", newState);

      return newState;
    });
  }, []);

  return (
    <ColorSchemeContext.Provider
      value={{
        toogleColorScheme,
        colorScheme: state
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export function useColorScheme() {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error("Need to configure ColorSchemeProvider");
  }

  return ctx;
}
