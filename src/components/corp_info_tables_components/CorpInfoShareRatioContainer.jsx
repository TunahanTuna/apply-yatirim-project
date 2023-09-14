import React from 'react'
import CorpInfoTablesShareRatios from './CorpInfoTablesShareRatios'
import CorpInfoDonutChart from './CorpInfoDonutChart'

export default function CorpInfoShareRatioContainer({ corp }) {
    const corpInfoShareRatioTitle = corp && corp?.find((dt) => dt[0] == 50005)

    const ShareRatioValues = corp && corp?.filter((dt) => dt[0] == 50006 || dt[0] == 50007 || dt[0] == 500010)
    const firstDonut = corp && corp?.find((dt) => dt[0] == 50006)
    const secondDonut = corp && corp?.find((dt) => dt[0] == 50007)

    return (
        <div className="flex flex-wrap ew-full z-10 gap-10 ">
            <div className="flex flex-col w-full gap-10 justify-center items-center">
                <CorpInfoTablesShareRatios title={corpInfoShareRatioTitle} data={ShareRatioValues} />
            </div>
            <div className="flex flex-row w-full items-center justify-center z-0 gap-20 pt-10">
                <CorpInfoDonutChart title={corpInfoShareRatioTitle} data={firstDonut} type="other" />
                <CorpInfoDonutChart title={corpInfoShareRatioTitle} data={secondDonut} type="other" />
            </div>
        </div>
    )
}
