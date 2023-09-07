import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useSelector } from 'react-redux'
import ExcelTable from '../components/ExcelTable'
import { motion } from 'framer-motion'

export default function CashFlow() {
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
    console.log(cash_flow_gross_profit)
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box className="flex justify-center items-center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
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
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_revenue} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_gross_profit} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_gae} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="4">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_marketing_expenses} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="5">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_cos} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="6">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_ebitda} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="7">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_cf} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="8">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_oc} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="10">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_financial_liability} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="9">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-row gap-4 w-full">
                                <ExcelTable table_sheet={cash_flow_s_revolution_speeds} />
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </motion.div>
    )
}
