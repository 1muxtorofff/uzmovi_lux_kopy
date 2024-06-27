import { createContext, useContext } from "react"

export const SearchContext = createContext("")

export default function SearchContextProvider({children}){
    return (
        <SearchContext.Provider value={{
            value,
            setValue
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearchContext(){
    const context = useContext(SearchContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}