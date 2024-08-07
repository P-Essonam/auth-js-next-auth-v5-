import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'


type Props = {
    message?: string | null


}
const FormError = ({ message } : Props) => {

    if (!message) return null

    return (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
            <FaExclamationTriangle className='w-4 h-4'/>
            <p>{message}</p>
        </div>
    )
}

export default FormError