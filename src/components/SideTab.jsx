import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'


const SideTab = () => {
  return (
    <div className='pt-2 h-[100vh] relative w-100 pr-10 bg-gray-800 sideTab flex flex-col gap-5'>
        <h3 className='text-white font-bold text-2xl text-center'>Utilities</h3>
        <div className="line"></div>
        <ul className='flex flex-col px-2 gap-3 '>
            <li>
                <Link to="/customers" className='text-white underline text-[17px]'>Customers</Link>
            </li>
            <li>
                <Link to="/customer" className='text-white underline text-[17px]'>Insert Customer</Link>
            </li>
            <li>
                <Link to="/month" className='text-white underline text-[17px]'>Customers By Month</Link>
            </li>
            <li>
              <Logout />
            </li>
        </ul>
    </div>
  )
}

export default SideTab