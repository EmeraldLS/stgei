import React, { useState } from 'react'
import axios from '../api/axios'
// import CustomerCard from './CustomerCard'

const CustomerInAMonth = () => {
    const [month, setMonth] = useState("_")
    const[customers, setCustomers]= useState([])
    // const [loading, setLoading] = useState(false)
    // const [err, setErr] = useState("")

    // const handleMonth = (e) => {
    //     e.preventDefault()
    //     setMonth(e.target.value)
    // }

    const getCustomers = async (e) => {
        setMonth(e.target.value)
        try{
            const response = await axios.get("/secured/month/"+month, {
                withCredentials: true
            })
            setCustomers(response?.data)
            console.log(customers)            
        }catch(err) {
            if(err) {
                
            }
        }
    }
    
  return (
    <div>
        <form className='px-5 pt-10 w-[100%] flex flex-col'>
            <label htmlFor="month" className='pb-3'>Please Select Month: </label>
            <select  id="month" className='py-5 rounded text-center' value={month} onChange={getCustomers}>
                <option value="_" disabled>Select Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
            </select>

            {/* <button onClick={getCustomers} className='bg-yellow-500'>Submit</button> */}
        </form>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 px-5'>
        {
            // loading ? <div>Loading....</div> : customers.map( customer => {
            //     return (
            //         <CustomerCard
            //         bname={customer?.bname}
            //         job_status={customer?.job_status} 
            //         key={customer?.customer_id}  
            //         customer_code={customer?.customer_code}
            //         />
            //     )
            // })
        }
        
    </div>
        
    </div>
  )
}

export default CustomerInAMonth