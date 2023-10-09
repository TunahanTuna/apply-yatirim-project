import React from 'react'
import { useSelector } from 'react-redux'

import CorpInfoCapitalPartnerShipContainer from '../components/corp_info_tables_components/CorpInfoCapitalPartnerShipContainer'
import CorpInfoShareRatioContainer from '../components/corp_info_tables_components/CorpInfoShareRatioContainer'

export default function BalanceSummaryTable() {
    const { corp_info } = useSelector((state) => state.dataReducer)

    return (
        <div className="flex xl:flex-row gap-2 m-2 flex-col">
            <div className="w-full">
                <CorpInfoCapitalPartnerShipContainer corp={corp_info} />
            </div>
            <div className="w-full h-full items-center justify-center">
                <CorpInfoShareRatioContainer corp={corp_info} />
            </div>
        </div>
    )
}
