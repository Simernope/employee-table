import {GlobalContext} from "../context/GlobalContext.tsx";
import {useContext} from "react";

const DeleteButton = () => {
    const {deleteFunction, selectedRow, setSelectedRow, setIsEditing} = useContext(GlobalContext)
    const handleButton = () => {
        if (selectedRow && deleteFunction && selectedRow && setIsEditing && setSelectedRow) {
            deleteFunction(selectedRow)
            setSelectedRow(-1)
            setIsEditing(false)
        }
    }

    return (
        <button onClick={handleButton}
                className='w-full rounded h-[32px] bg-light-gray hover:bg-light-gray-hover dark:bg-dark-gray dark:hover:bg-dark-gray-hover'>
            Delete
        </button>
    )
}

export default DeleteButton;