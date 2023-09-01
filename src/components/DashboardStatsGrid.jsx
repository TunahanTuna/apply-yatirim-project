import React from 'react'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'
import BoxWrapper from '../widgets/ButtonWrapper'
export default function DashboardStatsGrid() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper bg="sky" title="Total Sales" value="$3425.60" diff="+234">
                <IoBagHandle className="text-2xl text-white" />
            </BoxWrapper>
            <BoxWrapper bg="orange" title="Total Sales" value="$3425.60" diff="+234">
                <IoPieChart className="text-2xl text-white" />
            </BoxWrapper>
            <BoxWrapper bg="yellow" title="Total Sales" value="$3425.60" diff="+234">
                <IoPeople className="text-2xl text-white" />
            </BoxWrapper>
            <BoxWrapper bg="green" title="Total Sales" value="$3425.60" diff="+234">
                <IoCart className="text-2xl text-white" />
            </BoxWrapper>
        </div>
    )
}
