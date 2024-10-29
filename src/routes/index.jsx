import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home, AddProduct} from '../pages'


function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add-product' element={<AddProduct/>}/>
    </Routes>
  )
}

export default CustomRoutes
