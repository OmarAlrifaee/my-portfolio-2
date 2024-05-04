import { createContext, useState } from "react";
import { DarkModeProviderProps, DarkModeContextType } from "../Types";
const initState: DarkModeContextType = {
  dark: true,
  setDark: () => {},
};
export const DarkModeContext = createContext<DarkModeContextType>(initState);
export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [dark, setDark] = useState(true);
  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}