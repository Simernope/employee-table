import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {useContext} from "react";

const SelectStatus = () => {
    const {subscription, setSubscription, inputStyles} = useContext(GlobalContext)
    const optionStyles = 'text-sm bg-bg-dark text-white checked:bg-green hover:bg-green focus:bg-green active:bg-green'
    const selectStyles = `focus:border-1 focus:border-light-gray focus:dark:border-dark-gray z-20 bg-transparent appearance-none rounded [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none absolute text-sm`

    return (
        setSubscription &&
        <div className='flex rounded relative  h-[34px]'>
            <select
                id="dropdown"
                className={`${inputStyles} ${selectStyles}`}
                value={subscription}
                onChange={(e) =>
                    setSubscription(e.target.value)
                }
            >

                <option className={optionStyles} value="Subscribed">Subscribed</option>
                <option className={optionStyles} value="Not Subscribed">Not Subscribed</option>
                <option className={optionStyles} value="Other">Other</option>

            </select>
            <button className='z-10 absolute right-0 h-[30px] dark:bg-dark-gray bg-light-gray px-1 rounded-r'>
                <svg className='stroke-[#5D5D5D] dark:stroke-white' xmlns="http://www.w3.org/2000/svg"
                     width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1"/>
                </svg>
            </button>
        </div>
    )
}

export default SelectStatus