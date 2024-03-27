import React from 'react'
import { ImSpinner11 } from "react-icons/im";
const Spinner = () => {
    return (
        <div className=' flex justify-center h-[110vh] items-center'>
            <div>
                <ImSpinner11 className='spinner text-3xl text-blue-800' />
            </div>
        </div>
    )
}

export default Spinner;
