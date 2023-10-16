import React from 'react'
import { Link } from 'react-router-dom'
import Svg from './Svg'

const CustomerCard = ({bname, job_status, customer_code}) => {
  return (
    
    <div 
    className="max-w-sm p-6 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bname}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job Current Status: {job_status}</p>
        <Link to={`/customers/${customer_code}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More Info<Svg />
        </Link>
    </div>

  )
}

export default CustomerCard