import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './components/Dashboard'
import Oranlar from './components/Oranlar'
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="oranlar" element={<Oranlar />} />
            </Route>
        </Routes>
    )
}

export default App
// @Autor: Mustafa Tunahan TUNA
