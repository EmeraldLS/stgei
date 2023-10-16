import React, { useState } from 'react'
import axios from '../api/axios'
import CustomerCard from './CustomerCard'

const SearchCustomer = () => {
    const [business_name, setBusinessName] = useState("")
    const [businesses, setBusinessness] = useState([])
    const [loading, setLoading] = useState(false)
    const searchCustomer = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const response = await axios.get("/secured/customer/search_customer?s="+business_name, {
        withCredentials: true
      })
      setLoading(false)
      setBusinessness(response.data)
      
    }catch(err) {
      if(err) {
        setLoading(false)
        console.log(err)
      }
    }
  }
  return (
    <div>
        <div className='w-[100%] pl-5 pt-5'>
          <h3 className='text-2xl'>Search Customer</h3>
          <form onSubmit={searchCustomer} className='flex flex-col w-full items-start gap-2 '>
            <label htmlFor="search_customer" >Business Name</label>
            <input type="text" value={business_name} name='business_name'  onChange={(e) => setBusinessName(e.target.value)} />
            <button className='bg-green-300 px-5 py-2 rounded '>Submit</button>
          </form>
          <div className='py-5 flex gap-3 flex-wrap justify-start'>
                { loading ? "Loading..." :  businesses != null ? businesses.map(business => {
                    return <CustomerCard bname={business.bname} job_status={business.job_status} customer_code={business.customer_code} key={business.customer_id} />
                    
                }) : business_name === "" ? "" : <div className='bg-red-500 text-white px-5 py-3'> No Matching Business  </div>
            }
          </div>
        </div>

        {/* <div className='mt-10 ml-4 bg-gray-800 text-white p-5'>
            <h3>Code Splitting tutorials</h3>
            <div>
              <button className='px-5 py-2 bg-red-800 mt-5' onClick={() => 
              import("../code_splitting_e.g/Sum").then(module => {
                alert(module.Sum(2, 5))
              })
                
              }>Click me</button>
            </div>
        </div> */}
    </div>
  )
}

export default SearchCustomer