import { createSlice } from '@reduxjs/toolkit'
import * as XLSX from 'xlsx'
const initialState = {
    summary_balance_sheet: [],
    summary_income_statement: [],
    summary_ratios: []
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

            state.summary_balance_sheet = dataParser(workbook, 'Ozet_Bilanco')
            state.summary_income_statement = dataParser(workbook, 'Ozet_Gelir_Tablosu')
            state.summary_ratios = dataParser(workbook, 'Ozet_Oranlar')
        }
    }
})
export const { setData } = dataSlice.actions
export default dataSlice.reducer

function dataParser(workbook, sheetName) {
    const worksheet = workbook.Sheets[sheetName]
    return XLSX.utils.sheet_to_json(worksheet, { header: 1 })
}
