import { createContext, useContext } from "react"

export const FavoriteContext = createContext("")

export default function CartContextProvider({children}){
    return (
        <FavoriteContext.Provider value={{
            favorite,
            setFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavoriteContext(){
    const context = useContext(FavoriteContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}