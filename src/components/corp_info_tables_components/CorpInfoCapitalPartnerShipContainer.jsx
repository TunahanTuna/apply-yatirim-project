import React from 'react'
import CorpInfoTablesCapitalPartnership from './CorpInfoTablesCapitalPartnership'
import CorpInfoDonutChart from './CorpInfoDonutChart'

export default function CorpInfoCapitalPartnerShipContainer({ corp }) {
    const corpInfoTitle = corp && corp?.[0]
    const corpInfoCapitalPartnerShipTitle = corp && corp?.find((dt) => dt[0] == 50000)

    const BalanceValues = corp && corp?.filter((dt) => dt[0] == 50001 || dt[0] == 50002 || dt[0] == 50003)

    const BalanceText = corp && corp?.find((dt) => dt[0] == 50008)
    const BalanceText2 = corp && corp?.find((dt) => dt[0] == 50009)
    return (
        <div className="grid grid-cols-2 w-full z-10 ">
            <div className="w-full ">
                <div className="pt-2 px-1 pb-5 text-red-700  text-2xl ">
                    <strong>{corpInfoTitle && corpInfoTitle[1]}</strong>
                </div>
                <div className="m-2 gap-2 flex flex-col w-full ">
                    <span className="text-md font-semibold text-justify">{BalanceText && BalanceText[1]}</span>
                    <span className="text-sm  text-justify">{BalanceText2 && BalanceText2[1]}</span>
                </div>

                <div className="w-full">
                    <CorpInfoTablesCapitalPartnership title={corpInfoCapitalPartnerShipTitle} data={BalanceValues} />
                </div>
            </div>

            <div className="flex w-full items-center justify-center z-0">
                <CorpInfoDonutChart
                    title={corpInfoCapitalPartnerShipTitle}
                    data={BalanceValues}
                    mainTitle={corpInfoTitle}
                />
            </div>
        </div>
    )
}
