import { createSlice } from '@reduxjs/toolkit'
import * as XLSX from 'xlsx'
const initialState = {
    summary_balance_sheet: [],
    summary_income_statement: [],
    summary_ratios: [],
    liquid_ratios: [],
    financial_structure_ratios: [],
    revolution_speeds: [],
    profitability_ratios: []
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            const workbook = XLSX.read(action.payload, { type: 'binary' })
            const worksheet = workbook.Sheets['Ozet_Bilanco']
            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
            console.log(dataParser(workbook, 'Ozet_Gelir_Tablosu'))
            state.summary_balance_sheet = dataParser(workbook, 'Ozet_Bilanco')
            state.summary_income_statement = dataParser(workbook, 'Ozet_Gelir_Tablosu')
            state.summary_ratios = dataParser(workbook, 'Ozet_Oranlar')
            state.liquid_ratios = dataParser(workbook, 'likidite_oranlari_yazilim')
            state.financial_structure_ratios = dataParser(workbook, 'finansal_yapi_oranlari_yazilim')
            state.revolution_speeds = dataParser(workbook, 'devir_hizlari_yazilim')
            state.profitability_ratios = dataParser(workbook, 'karlilik_oranlari_yazilim')

            console.log('state', state.revolution_speeds)
        }
    }
})
export const { setData } = dataSlice.actions
export default dataSlice.reducer

function dataParser(workbook, sheetName) {
    const worksheet = workbook.Sheets[sheetName]

    return XLSX.utils.sheet_to_json(worksheet, { header: 1 }).map((dt) => {
        return dt.map((d) => {
            return typeof d != 'string' && Number.isInteger(d) != true ? d.toFixed(2) : d
        })
    })
}
