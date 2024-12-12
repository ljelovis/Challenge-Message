import { createContext, useContext } from "react";
import { useTextReducer } from "../store";

export const TextContext = createContext()

export function TextProvider({ children }) {

    const textContext = useTextReducer()

    return (
        <TextContext.Provider value={textContext}>
            { children }
        </TextContext.Provider>
    )
}

export function useTextContext() {return useContext(TextContext)}