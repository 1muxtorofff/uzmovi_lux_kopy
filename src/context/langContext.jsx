import { createContext, useContext, useState } from "react"

export const Lang = createContext("")

export default function LangContextProvider({children}){
    const [lng, setLng] = useState(null)
    return (
        <Lang.Provider value={{
            lng,
            setLng
        }}>
            {children}
        </Lang.Provider>
    )
}

export function useLangContext(){
    const context = useContext(Lang)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}