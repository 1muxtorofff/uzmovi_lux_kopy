import { createContext, useContext } from "react"

export const FilterContext = createContext("")

export default function FilterContextProvider({children}){
    return (
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterContext(){
    const context = useContext(FilterContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}