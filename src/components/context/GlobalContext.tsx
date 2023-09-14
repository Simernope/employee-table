import {createContext} from "react"
import {RowData} from "../../types/types.ts";

type GlobalContent = {
    name?: string
    setName?: (value: string) => void
    age?: string
    setAge?: (value: string) => void
    isEmployed?: boolean
    setIsEmployed?: (value: boolean) => void
    subscription?: string,
    setSubscription?: (value: string) => void
    inputStyles?: string
    insertFunction?: (row: RowData) => void
    deleteFunction?: (rowId: number) => void
    selectedRow?: number,
    setSelectedRow?: (rowId: number) => void
    rows?: Array<RowData>
    isEditing?: boolean
    setIsEditing?: (value: boolean) => void
    editRowFunction?: (row: RowData) => void
}

export const GlobalContext = createContext<GlobalContent>({})
