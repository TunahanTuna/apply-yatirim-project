import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'
import { motion } from 'framer-motion'
import {
    CashFlowRevenue,
    CashFlowGrossProfit,
    CashFlowGae,
    CashFlowMarketingExpense,
    CashFlowCos,
    CashFlowEbitda,
    CashFlowCf,
    CashFlowOc,
    CashFlowFinancialLiability,
    CashFlowRevolutionSpeeds
} from './index'
import { ThemeProvider, createTheme } from '@mui/material'
export default function TabsComponent() {
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const {
        cash_flow_revenue,
        cash_flow_gross_profit,
        cash_flow_gae,
        cash_flow_marketing_expenses,
        cash_flow_cos,
        cash_flow_ebitda,
        cash_flow_cf,
        cash_flow_oc,
        cash_flow_financial_liability,
        cash_flow_s_revolution_speeds
    } = useSelector((state) => state.dataReducer)
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })
    return (
        <div className="w-full">
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box
                            className="flex justify-center items-center"
                            sx={{ borderBottom: 1, borderColor: 'divider' }}
                        >
                            <TabList
                                sx={{
                                    '.Mui-selected': {
                                        color: `#dc2626`
                                    }
                                }}
                                TabIndicatorProps={{ style: { background: '#dc2626' } }}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <Tab label={cash_flow_revenue[0][1]} value="1" />
                                <Tab label={cash_flow_gross_profit[0][1]} value="2" />
                                <Tab label={cash_flow_gae[0][1]} value="3" />
                                <Tab label={cash_flow_marketing_expenses[0][1]} value="4" />
                                <Tab label={cash_flow_cos && cash_flow_cos[0][1]} value="5" />
                                <Tab
                                    label={cash_flow_ebitda[0][1] != undefined ? cash_flow_ebitda[0][1] : 'EBİTDA'}
                                    value="6"
                                />
                                <Tab label={cash_flow_cf[0][1]} value="7" />
                                <Tab label={cash_flow_oc[0][1]} value="8" />
                                <Tab label={cash_flow_financial_liability[0][1]} value="10" />
                                <Tab label={cash_flow_s_revolution_speeds[0][1]} value="9" />
                            </TabList>
                        </Box>
                        {/* TODO! Component haline getirilecek hepsi */}
                        <TabPanel value="1">
                            <CashFlowRevenue />
                        </TabPanel>
                        <TabPanel value="2">
                            <CashFlowGrossProfit />
                        </TabPanel>
                        <TabPanel value="3">
                            <CashFlowGae />
                        </TabPanel>
                        <TabPanel value="4">
                            <CashFlowMarketingExpense />
                        </TabPanel>
                        <TabPanel value="5">
                            <CashFlowCos />
                        </TabPanel>
                        <TabPanel value="6">
                            <CashFlowEbitda />
                        </TabPanel>
                        <TabPanel value="7">
                            <CashFlowCf />
                        </TabPanel>
                        <TabPanel value="8">
                            <CashFlowOc />
                        </TabPanel>
                        <TabPanel value="10">
                            <CashFlowFinancialLiability />
                        </TabPanel>
                        <TabPanel value="9">
                            <CashFlowRevolutionSpeeds />
                        </TabPanel>
                    </TabContext>
                </Box>
            </ThemeProvider>
        </div>
    )
}
