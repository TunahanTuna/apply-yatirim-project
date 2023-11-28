import React from 'react'
import PdfMaker from '../widgets/PdfMaker'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'

export default function TestPage() {
    const comps = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == 'faaliyet-raporlari')?.subMenus?.map(
        (data) => data?.component
    )
    const test = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == 'faaliyet-raporlari')
        ?.subMenus?.find((data) => data.key == 'mali-analiz-raporu')
        ?.subMenus?.map((data) => data?.component)
    return (
        <div>
            <PdfMaker children={test} />
        </div>
    )
}
