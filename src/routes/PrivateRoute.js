import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'

export default function PrivateRoute() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} /> 
    </Routes>
  )
}
