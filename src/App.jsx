import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './pages/Dashboard'
import Balance from './pages/Balance'
import IncomeStatement from './pages/IncomeStatement'
import Ratios from './pages/Ratios'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="bilanco" element={<Balance />} />
                <Route path="gelir-tablosu" element={<IncomeStatement />} />
                <Route path="rasyolar" element={<Ratios />} />

                <Route path="*" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App
// @Autor: Mustafa Tunahan TUNA
