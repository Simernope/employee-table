import {GlobalContext} from "../context/GlobalContext.tsx";
import {useContext} from "react";

const Table = () => {
    const {selectedRow, setSelectedRow, rows} = useContext(GlobalContext)
    const tableHeadStyles = 'text-sm font-normal'

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
                        setSelectedRow && rows && rows.map(row => (
                            <tr key={row.id}
                                onClick={() => setSelectedRow(row.id)}
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