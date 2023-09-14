import EditorSection from "./components/dataEditor/EditorSection.tsx";
import {GlobalContext} from "./components/context/GlobalContext.tsx";
import {useEffect, useState} from "react";
import {addRow, deleteRow, getTableRows} from "./localstorage/localStorage.ts";
import Table from "./components/table/Table.tsx";
import {RowData} from "./types/types.ts";

function App() {
    const [tableRows, setTableRows] = useState<Array<RowData> | []>()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isEmployed, setIsEmployed] = useState(false)
    const [subscription, setSubscription] = useState('subscribed')
    const [selectedRow, setSelectedRow] = useState<number | undefined>()
    const insertFunction = addRow
    const deleteFunction = deleteRow

    const inputStyles = ` w-full
                    border
                    p-1
                    dark:border-dark-gray
                    focus:dark:border-green
                    border-light-gray
                    placeholder:text-sm
                    placeholder:text-black
                    text-sm
                    dark:placeholder:text-white
                    focus:outline-none
                    focus:placeholder:text-transparent
                    dark:focus:placeholder:text-bg-dark
                    focus:border-green`


    const handleStorageChange = () => {
        console.log('Local Storage Updated')
        getData()
    };

    const getData = () => {
        getTableRows()
            .then((response) => {
                    setTableRows(response)
            })
    }

    useEffect(() => {
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return (
        <GlobalContext.Provider value={{
            name,
            setName,
            age,
            setAge,
            isEmployed,
            setIsEmployed,
            subscription,
            setSubscription,
            inputStyles,
            insertFunction,
            deleteFunction,
            selectedRow,
            setSelectedRow,
            rows: tableRows
        }}>
            <div className='min-w-fit  h-screen bg-gray-100 flex justify-center items-center '>
                <div
                    className='p-[5px] w-[675px] h-[345px] mx-auto bg-white dark:text-white dark:bg-bg-dark flex gap-[20px] justify-center items-center'>
                    <EditorSection/>
                    <Table/>

                </div>

            </div>
        </GlobalContext.Provider>

    )
}

export default App
