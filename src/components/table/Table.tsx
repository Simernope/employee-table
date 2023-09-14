import {GlobalContext} from "../context/GlobalContext.tsx";
import {useContext} from "react";
import {RowData} from "../../types/types.ts";

const Table = () => {
    const {
        selectedRow,
        setSelectedRow,
        rows,
        setName,
        setAge,
        setSubscription,
        setIsEmployed,
        setIsEditing,
        isEditing
    } = useContext(GlobalContext)
    const tableHeadStyles = 'text-sm font-normal'

    const handleData = (row: RowData) => {
        if (row) {
            if (setSelectedRow) {
                setSelectedRow(row.id)
            }
            if (setName && setAge && setIsEmployed && setSubscription && setIsEditing) {
                setName(row.name)
                setAge((row.age).toString())
                setIsEmployed(row.employment === 'Employed')
                setSubscription(row.subscription)
                setIsEditing(!isEditing)
            }
        }
    }

    return (
        <div
            className='overflow-y-scroll h-[327px] border  border-light-gray dark:border-dark-gray text-sm box-content rounded'>
            <div
                className=' w-[410px]   p-[5px]  '>
                <table className="table-fixed">
                    <thead className='text-sm font-normal'>
                    <tr className='bg-light-gray dark:bg-dark-gray'>
                        <th className={`w-[120px] ${tableHeadStyles}`}>Name</th>
                        <th className={`w-[65px] ${tableHeadStyles}`}>Age</th>
                        <th className={`w-[116px] ${tableHeadStyles}`}>Subscription</th>
                        <th className={`w-[110px] ${tableHeadStyles}`}>Employment</th>
                    </tr>
                    </thead>
                    <tbody className='text-sm'>
                    {
                        setIsEditing && setSelectedRow && rows && rows.map(row => (
                            <tr key={row.id}
                                onClick={() => {
                                    setIsEditing(false)
                                    setSelectedRow(row.id)
                                }}
                                onDoubleClick={() => handleData(row)}
                                className={`${selectedRow === row.id && 'bg-green text-white '}`}>
                                <td className='px-[4px]'>{row.name} </td>
                                <td>{row.age}</td>
                                <td>{row.subscription}</td>
                                <td>{row.employment}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table