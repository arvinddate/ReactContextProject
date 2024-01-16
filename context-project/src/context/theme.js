import { createContext, useContext } from "react";


export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
    
}); //can add defulat value

export const ThemeProvider =ThemeContext.Provider

//can make ass costome hook

export default function useTheme(){
    return useContext(ThemeContext);
}