import AddRowSection from "./addRow/AddRowSection.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Border from "../Border.tsx";
import DeleteButton from "../buttons/DeleteButton.tsx";

const EditorSection = () => {
    return (
        <fieldset
            className='h-fit border w-[202px] p-[5px] rounded box-content border-light-gray dark:border-dark-gray text-sm'>
            <legend className='text-sm '>Insert Row</legend>
            <AddRowSection/>
            <div className='my-[15px] flex flex-col '>
                <Border/>
                <ThemeSwitcher/>
            </div>
            <DeleteButton/>
        </fieldset>


    )
}

export default EditorSection