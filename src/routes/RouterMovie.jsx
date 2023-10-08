import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SearchMovie } from '../pages/SearchMovie'
import { DetailMovie } from '../pages/DetailMovie'

export const RouterMovie = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Search' element={<SearchMovie/>}/>
        <Route path='/Detail/:id' element={<DetailMovie/>}/>
      </Routes>
    </BrowserRouter>
  )
}
