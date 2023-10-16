import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import CustomerCard from '../components/CustomerCard'

const Customers = () => {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false)
    const getAllCustomers = async () => {
        setLoading(true)
        try{
            
        const response = await axios.get("/secured/customer", {
            withCredentials: true
        })
        setCustomers(response?.data)
        setLoading(false)

        }catch(err) {
            if(err) {
                console.log(err)
                setLoading(false)
            }
        }
        
    }
    useEffect(() => getAllCustomers, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 px-5'>
        {
            loading ? <div>Loading....</div> : customers.map( customer => {
                return (
                    <CustomerCard
                    bname={customer?.bname}
                    job_status={customer?.job_status} 
                    key={customer?.customer_id}  
                    customer_code={customer?.customer_code}
                    />
                )
            })
        }
        
    </div>
  )
}

export default Customers