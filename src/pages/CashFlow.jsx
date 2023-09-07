import * as React from 'react'
import { motion } from 'framer-motion'
import { TabsComponent } from './tabs'
export default function CashFlow() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <TabsComponent />
        </motion.div>
    )
}
