import InputName from "./components/InputName.tsx";
import InputAge from "./components/InputAge.tsx";
import SelectStatus from "./components/SelectStatus.tsx";
import EmployedStatus from "./components/EmployedStatus.tsx";
import InsertButton from "../../buttons/InsertButton.tsx";

const AddRowSection = () => {
    return (
        <div className='flex flex-col gap-[10px]'>
            <InputName />
            <InputAge />
            <SelectStatus />
            <EmployedStatus />
            <InsertButton />
        </div>
    )
}

export default AddRowSection