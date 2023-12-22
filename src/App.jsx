/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create/>} />
        <Route path='/:id' element={<Profile/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;