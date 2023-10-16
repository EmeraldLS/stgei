import React from 'react'
import SideTab from '../components/SideTab'
import SearchCustomer from '../components/SearchCustomer'

const Dashbaord = () => {
  
  return (
    
    <div className='flex flex-col md:flex-row'>
      <div className="md:block"> 
        <SideTab />
      </div>
       
        <SearchCustomer />
    </div>
  )
}

export default Dashbaord