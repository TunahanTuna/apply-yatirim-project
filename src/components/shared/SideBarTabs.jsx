import React from 'react'
import { ConfigProvider, Tabs } from 'antd'
import DashboardSideBar from './DashboardSideBar'
import BankSideBar from './BankSideBarComponent'

export default function SideBarTabs() {
    const items = [
        {
            key: '1',
            label: 'Kokpit',
            children: <DashboardSideBar />
        },
        {
            key: '2',
            label: 'Banka',
            children: <BankSideBar />
        }
    ]
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FFFFFF',
                        colorText: '#FFFFFF',
                        fontSize: 'bold'
                    }
                }}
            >
                <Tabs centered items={items} animated={true} />
            </ConfigProvider>
        </div>
    )
}
