import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout.jsx'
import {
    Dashboard,
    Balance,
    IncomeStatement,
    Ratios,
    LiquidRatios,
    FinancialStructureRatios,
    RevolutionSpeed,
    ProfitabilityRatio,
    FinancialIndicators,
    CashFlow
} from './pages/index'
import { DASHBOARD_SIDEBAR_LINKS, BANK_SIDEBAR_LINKS } from './lib/constants/navigation'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import LoginPage from './pages/auth/login/LoginPage.jsx'

function App() {
    const { key } = useSelector((state) => state.keyReducer)
    return (
        <Routes>
            {key ? (
                <Route path="/" element={<Layout />}>
                    {DASHBOARD_SIDEBAR_LINKS.map((routes, key) =>
                        routes.key == 'bilanco' ? (
                            <Route index key={key} path={routes.path} element={routes.component} />
                        ) : (
                            <Route key={key} path={routes.path} element={routes?.component}>
                                {routes &&
                                    routes?.subMenus &&
                                    routes.subMenus.map((dt) => (
                                        <Route key={dt.key} path={dt.path} element={dt.component}>
                                            {dt &&
                                                dt.subMenus &&
                                                dt.subMenus.map((data) => (
                                                    <Route
                                                        key={data?.key}
                                                        path={data?.path}
                                                        element={data?.component}
                                                    />
                                                ))}
                                        </Route>
                                    ))}
                            </Route>
                        )
                    )}
                    {BANK_SIDEBAR_LINKS.map((routes, key) =>
                        routes.key == 'bilanco' ? (
                            <Route index key={key} path={routes.path} element={routes.component} />
                        ) : (
                            <Route key={key} path={routes.path} element={routes?.component}>
                                {routes &&
                                    routes?.subMenus &&
                                    routes.subMenus.map((dt) => (
                                        <Route key={dt.key} path={dt.path} element={dt.component}>
                                            {dt &&
                                                dt.subMenus &&
                                                dt.subMenus.map((data) => (
                                                    <Route
                                                        key={data?.key}
                                                        path={data?.path}
                                                        element={data?.component}
                                                    />
                                                ))}
                                        </Route>
                                    ))}
                            </Route>
                        )
                    )}
                    <Route path="*" element={<Dashboard />} />
                </Route>
            ) : (
                <Route index path="/" element={<LoginPage />}></Route>
            )}
        </Routes>
    )
}

export default App
// @Autor: Mustafa Tunahan TUNA
