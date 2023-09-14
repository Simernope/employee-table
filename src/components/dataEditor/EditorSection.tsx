import AddRowSection from "./addRow/AddRowSection.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Border from "../Border.tsx";
import DeleteButton from "../buttons/DeleteButton.tsx";
import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext.tsx";
import EditButton from "../buttons/EditButton.tsx";

const EditorSection = () => {
    const {isEditing} = useContext(GlobalContext)
    return (
        <fieldset
            className='h-fit border w-[202px] p-[5px] rounded box-content border-light-gray dark:border-dark-gray text-sm'>
            <legend className='text-sm '>Insert Row</legend>
            <AddRowSection/>
            <div className='my-[15px] flex flex-col '>
                <Border/>
                <ThemeSwitcher/>
            </div>
            {
                isEditing
                    ? <EditButton/>
                    : <DeleteButton/>

            }
        </fieldset>


    )
}

export default EditorSection