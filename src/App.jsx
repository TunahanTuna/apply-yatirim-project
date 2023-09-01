import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './pages/Dashboard'
import Oranlar from './pages/Oranlar'
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="oranlar" element={<Oranlar />} />
                <Route path="*" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App
// @Autor: Mustafa Tunahan TUNA
