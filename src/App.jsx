import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './pages/Dashboard'
import Balance from './pages/Balance'
import IncomeStatement from './pages/IncomeStatement'
import Ratios from './pages/Ratios'
import LiquidRatios from './pages/LiquidRatios'
import FinancialStructureRatios from './pages/FinancialStructureRatios'
import RevolutionSpeed from './pages/RevolutionSpeed'
import ProfitabilityRatio from './pages/ProfitabilityRatio'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="bilanco" element={<Balance />} />
                <Route path="gelir-tablosu" element={<IncomeStatement />} />
                <Route path="rasyolar" element={<Ratios />} />
                <Route path="likidite-oranlari" element={<LiquidRatios />} />
                <Route path="finansal-yapi-oranlari" element={<FinancialStructureRatios />} />
                <Route path="devir-hizlari" element={<RevolutionSpeed />} />
                <Route path="karlilik-oranlari" element={<ProfitabilityRatio />} />
                <Route path="*" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App
// @Autor: Mustafa Tunahan TUNA
