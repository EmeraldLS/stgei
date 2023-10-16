import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'

const CustomerDetails = () => {
    const {customer_code} = useParams()
    const [loading, setLoading] = useState(false)
    const [customer, setCustomer] = useState({})
    const navigate = useNavigate()
    const getCustomerDetails = async () => {
        setLoading(true)
        try{
            const response = await axios.get(`/secured/customer/${customer_code}`, {
                withCredentials: true
            })
            setCustomer(response.data)
            setLoading(false)
        }catch(err) {
            if(err) {
                console.log(err)
                setLoading(false)
            }
        }
    }



    const GoBack = () => {
        navigate(-1)
    }

    useEffect(() => getCustomerDetails, [])


  return (
    <div className='py-5 ml-5'>
        {loading 
        ? "Loading..." 
        : <div>
            <button className='bg-yellow-500 text-black px-5 py-2 mb-3' onClick={GoBack}>Go back</button>
            <ul>
                <li className=''>Business Name:<span className='font-bold'>{customer?.bname}</span> </li>
                <li>Firstname: <span className='font-bold'> {customer?.fname}</span></li>
                <li>Lastname: <span className='font-bold'>{customer?.lname}</span></li>
                <li>Email: <span className='font-bold'>{customer?.email}</span></li>
                <li>Joined Date: <span className='font-bold'>{customer?.join_date}</span></li>
                <li>Joined Year: <span className='font-bold'>{customer?.join_year}</span></li>
                <li>Job Current Status: <span className='font-bold'>{customer?.job_status}</span></li>
                <li>Job Location: <span className='font-bold'>{customer?.location}</span></li>
                <li>Setup Fee: <span className="font-bold">{customer?.setup_fee}</span></li>
                <li>Annual Fee: <span className="font-bold">{customer?.annual_fee}</span></li>
                <li>Renewal Date: <span className="font-bold">{customer?.renewal_date}</span></li>
                <li>Renewal Month: <span className="font-bold">{customer?.renewal_month}</span></li>
                <li>Last Update: <span className="font-bold">{customer?.updated_at}</span></li>
            </ul>
        </div>
        }
    </div>
  )
}

export default CustomerDetails