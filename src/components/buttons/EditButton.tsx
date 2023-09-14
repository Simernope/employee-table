import {GlobalContext} from "../context/GlobalContext.tsx";
import {useContext} from "react";
import {RowData} from "../../types/types.ts";

const EditButton = () => {
    const {editRowFunction, name, age, isEmployed, selectedRow, subscription, setIsEditing, setSelectedRow} = useContext(GlobalContext)
    const handleButton = () => {
        if (name && age && (isEmployed !== undefined) && subscription && selectedRow && editRowFunction && setIsEditing && setSelectedRow) {
            const payload: RowData = {
                name,
                age: Number(age),
                employment: isEmployed ? 'Employed' : 'Unemployed',
                subscription: subscription,
                id: selectedRow
            }
            editRowFunction(payload)
            setSelectedRow(-1)
            setIsEditing(false)
        }
    }

    return (
        <button onClick={handleButton}
                className='w-full rounded h-[32px] bg-light-gray hover:bg-light-gray-hover dark:bg-dark-gray dark:hover:bg-dark-gray-hover'>
            Edit
        </button>
    )
}

export default EditButton;