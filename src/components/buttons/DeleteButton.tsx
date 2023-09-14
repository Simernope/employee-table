import {GlobalContext} from "../context/GlobalContext.tsx";
import {useContext} from "react";

const DeleteButton = () => {
    const {
        deleteFunction,
        selectedRow,
        setSelectedRow,
    } = useContext(GlobalContext)

    const handleButton = () => {
        if (deleteFunction && selectedRow ) {
            deleteFunction(selectedRow)
            clearFields()
        }
    }

    const clearFields = () => {
        if (setSelectedRow) {
            setSelectedRow(-1)
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