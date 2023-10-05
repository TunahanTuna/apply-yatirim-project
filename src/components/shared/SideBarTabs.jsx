import React from 'react'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'

import Box from '@mui/material/Box'
import { TabContext, TabList } from '@mui/lab'
export default function SideBarTabs() {
    const theme = useTheme()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }
    return (
        <div className="w-full flex items-center justify-center">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box className="flex justify-center items-center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label={'test'} value="1" />
                            <Tab label={'test'} value="2" />
                        </TabList>
                    </Box>
                    {/* TODO! Component haline getirilecek hepsi */}
                    <TabPanel value="1">
                        <div>test</div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div>test</div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    }
}
