import { createContext, useContext } from "react"

export const RegesContext = createContext("")

export default function RegesContextProvider({children}){
    return (
        <RegesContext.Provider value={{
            reges,
            setReges
        }}>
            {children}
        </RegesContext.Provider>
    )
}

export function useRegesContext(){
    const context = useContext(RegesContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}