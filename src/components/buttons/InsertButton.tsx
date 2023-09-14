import {GlobalContext} from "../context/GlobalContext.tsx";
import {RowData} from "../../types/types.ts";
import {useContext} from "react";

const InsertButton = () => {
    const {
        name,
        age,
        isEmployed,
        subscription,
        insertFunction,
        setSelectedRow,
        setIsEditing,
        setName,
        setAge,
        setSubscription,
        setIsEmployed,
    } = useContext(GlobalContext)

    const handleButton = () => {
        if (name && age && (isEmployed !== undefined) && subscription && insertFunction) {
            const payload: RowData = {
                name,
                age: Number(age),
                employment: isEmployed ? 'Employed' : 'Unemployed',
                subscription: subscription,
                id: new Date().getTime()
            }
            insertFunction(payload)
            clearFields()
        }
    }

    const clearFields = () => {
        if (setName && setAge && setIsEmployed && setSubscription && setIsEditing && setSelectedRow) {
            setSelectedRow(-1)
            setIsEditing(false)
            setName('')
            setAge('')
            setIsEmployed(false)
            setSubscription('Subscribed')
            setIsEditing(false)
        }
    }

    return (
        <button onClick={handleButton}
                className='rounded h-[32px] bg-light-gray hover:bg-light-gray-hover dark:bg-dark-gray dark:hover:bg-dark-gray-hover'>
            Insert
        </button>
    )
}

export default InsertButton;