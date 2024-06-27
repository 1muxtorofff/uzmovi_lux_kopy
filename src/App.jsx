import React, { Suspense, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Page/Home/index"
import Favorite from "./Page/Favorite films/index"
import { FavoriteContext } from './context/favorite'
import { SearchContext } from './context/search'
import notFound from "./Page/Not found/index"
import Serach from './Page/Search'
import Category from './Page/category filter/index'
import { FilterContext } from './context/filter'
import { SelectValueContext } from './context/category'
import Bittakino from './Page/bitta_kino'
import Signup from './Page/Signup'
import Login from './Page/Log_in'
import { RegesContext } from './context/regestr'
import LangContextProvider from './context/langContext'
import PrivateRoute from './Page/PrivateRoute'
import NotAuthorized from './Page/NotAuthorized'
import Loading from './Page/Loading'

function App() {
  const [favorite, setFavorite] = useState([])
  const [value, setValue] = useState([])
  const [lng, setLng] = useState(localStorage.getItem("lang")|| "uz")
  const [selectValue, setSelectValue] = useState([])
  const [reges, setReges] = useState(JSON.parse(localStorage.getItem("user"))||null)
  const [filter, setFilter] = useState({
    search: "",
    adult: false,
    language: "",
    year: "",
    category: "",
    flow: "asc"
});
console.log(filter)
  return (
   <Suspense fallback={<Loading/>}>
      <LangContextProvider value={{lng, setLng}}>
      <RegesContext.Provider value={{reges, setReges}}>
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
          <SearchContext.Provider value={{value, setValue}} >
            <FilterContext.Provider value={{filter, setFilter}} >
              <SelectValueContext.Provider value={{selectValue, setSelectValue}}>
                <Routes>
                  <Route path='/' Component={Layout}>
                    <Route path='/' Component={Home} />
                    <Route 
                      path='/favorite_films' 
                      element={
                        <PrivateRoute>
                          <Favorite />
                        </PrivateRoute>
                      }  
                    />
                    <Route path='*' Component={notFound} />
                    <Route path='/search' Component={Serach}/>
                    <Route 
                      path='/category' 
                      element={
                        <PrivateRoute>
                          <Category />
                        </PrivateRoute>
                      }  
                    />
                    <Route path='/not-auth' Component={NotAuthorized}/>
                    <Route path='/signup' Component={Signup}/>
                    <Route path='/login' Component={Login}/>
                    <Route 
                      path='/bittakino/:id' 
                      element={
                        <PrivateRoute>
                          <Bittakino />
                        </PrivateRoute>
                      }  
                    />
                  </Route>
                </Routes>
              </SelectValueContext.Provider>
            </FilterContext.Provider>
          </SearchContext.Provider>
        </FavoriteContext.Provider>
      </RegesContext.Provider>
      </LangContextProvider>
   </Suspense>
  )
}
export default App