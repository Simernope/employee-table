import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {useContext} from "react";

const InputAge = () => {
    const {age, setAge, inputStyles} = useContext(GlobalContext)

    return (
        setAge &&
        <div className='flex rounded'>
            <input
                className={`
                        ${inputStyles} 
                        dark:bg-bg-dark
                        rounded-l
                        focus:border-2
                        [appearance:textfield] 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none`
                }
                placeholder='Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type='number'/>
            <div className='flex  divide-x dark:divide-dark-gray-hover divide-light-gray-hover'>

                <button className='dark:bg-dark-gray bg-light-gray px-1 ' onClick={() => {
                    if (age && age !== '18') {
                        setAge((Number(age) - 1).toString())
                    } else {
                        setAge('18')
                    }
                }}
                >
                    <svg className='stroke-[#5D5D5D] dark:stroke-white' xmlns="http://www.w3.org/2000/svg"
                         width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1"/>
                    </svg>
                </button>
                <button className='dark:bg-dark-gray bg-light-gray px-1 rounded-r' onClick={() => {
                    age ? setAge((Number(age) + 1).toString())
                        : setAge('18')
                }}>
                    <svg className='stroke-[#5D5D5D] dark:stroke-white' xmlns="http://www.w3.org/2000/svg"
                         width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M11 6L6 1L1 6"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default InputAge