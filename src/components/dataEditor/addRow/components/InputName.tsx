import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {useContext} from "react";

const InputName = () => {
    const {name, setName, inputStyles} = useContext(GlobalContext)
    return (
        setName &&
        <input
            className={`${inputStyles} rounded focus:border-2 dark:bg-bg-dark`}
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    )
}

export default InputName