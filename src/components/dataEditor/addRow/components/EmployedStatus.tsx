import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {useContext} from "react";

const EmployedStatus = () => {
    const {isEmployed, setIsEmployed} = useContext(GlobalContext)

    return (
        setIsEmployed &&
        <div className='flex gap-[6px] items-center my-[4px]' onClick={() => setIsEmployed(!isEmployed)}>
            <div
                className={`flex items-center justify-center  w-[20px] h-[20px] rounded border border-green ${isEmployed ? 'bg-green' : 'dark:bg-bg-dark bg-white'}`}
            >
                {
                    isEmployed &&
                    <svg className='stroke-white dark:stroke-bg-dark' xmlns="http://www.w3.org/2000/svg" width="14"
                         height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M1 5L5 9L13 1" strokeWidth="2"/>
                    </svg>
                }
            </div>
            <span className='text-sm'>Employed</span>
        </div>

    )
}

export default EmployedStatus