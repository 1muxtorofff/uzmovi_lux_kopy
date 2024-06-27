import { createContext, useContext } from "react"

export const SelectValueContext = createContext("")

export default function SelectValueContextProvider({children}){
    return (
        <SelectValueContext.Provider value={{
            value,
            setValue
        }}>
            {children}
        </SelectValueContext.Provider>
    )
}

export function useSelectValueContext(){
    const context = useContext(SelectValueContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}