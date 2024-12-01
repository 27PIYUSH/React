import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    return (
        <div className='text-center text-3xl bg-orange-300 text-gray-700 p-4'>User: {userid} </div>
    )
}

export default User
