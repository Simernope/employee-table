import {RowData} from "../types/types.ts";

export const setDefaultTableRows = async (rows: Array<RowData>) => {
    await localStorage.setItem('rows', JSON.stringify(rows))
}

export const getTableRows = async (): Promise<Array<RowData> | []> => {
    const rows = await localStorage.getItem('rows')
    if (rows) {
        return JSON.parse(rows)
    } else {
        return []
    }
}

export const deleteRow = async (id: number) => {
    const filteredData = await getTableRows().then(
        (response) => response.filter(row => row.id !== id))
    console.log(filteredData)
    if(filteredData){
        await localStorage.setItem('rows', JSON.stringify(filteredData))
        window.dispatchEvent(new Event('storage'));

    }else{
        await localStorage.setItem('rows', JSON.stringify(filteredData))
        window.dispatchEvent(new Event('storage'));

    }
}

export const addRow = async (row: RowData) => {
    const rows = await localStorage.getItem('rows')
    if (rows) {
        console.log(row)
        const data: Array<RowData> = JSON.parse(rows)
        data.push(row)
        await localStorage.setItem('rows', JSON.stringify(data))
    }else{
        console.log(row)
        await localStorage.setItem('rows', JSON.stringify([row]))
    }
    window.dispatchEvent(new Event('storage'));
}