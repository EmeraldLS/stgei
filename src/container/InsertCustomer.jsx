import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const InsertCustomer = () => {
    const [loading, setLoading] = useState(false)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [bname, setBname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState(false)
    const [setup_fee, setSetupfee] = useState("")
    const [annual_fee, setAnnualFee] = useState("")
    // const imageRef = useRef(null)
    // const [image, setImage] = useState(null)

    const ProcessCustomer = async(e) => {
        e.preventDefault()
        setLoading(true)
        const phoneInt = Number(phone)
        const setupFeeInt = Number(setup_fee)
        const annualFeeInt = Number(annual_fee)
        const data = {
            fname,
            lname,
            bname,
            phone: phoneInt,
            email,
            location,
            setup_fee: setupFeeInt,
            annual_fee: annualFeeInt
        }
        // const formData = new FormData()
        // formData.append("image", image)
        try{
            await axios.post("/secured/customer", data, {
                withCredentials: true
            })
            setFname("")
            setLname("")
            setBname("")
            setEmail("")
            setAnnualFee("")
            setSetupfee("")
            setLocation("")
            setPhone("")
            setSuccess(true)
            setLoading(false)
        }catch(err) {
            if(err) {
                const errorCatched = err.response.data.message
                console.log(err)
                setErr(errorCatched)
                setLoading(false)
                setSuccess(false)
            }
        }
    }

    useEffect(() => {
        setErr("")
    }, [fname, lname, bname, phone, email, setup_fee, annual_fee, location])
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
        <div></div>
        <div>
        {err ? 
            <div className="flex flex-col bg-red-500 items-center justify-center rounded py-5">
                <h5 className='w-full text-1xl text-white text-center ' style={{textTransform: 'capitalize'}}>{err}</h5>
            </div> :
            ""    
        }
        {success ? 
            <div className="flex flex-col bg-green-500  items-center justify-center rounded py-5">
                <h5 className='w-full text-1xl text-white text-center ' style={{textTransform: 'capitalize'}}>Customer Registered Successful</h5>
            </div> :
            ""    
        }
        <form onSubmit={ProcessCustomer} className='pb-5' >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="mt-4">
                    <label
                        htmlFor="fname"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Firstname:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="fname"
                            className="w-full"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                </div>    
                <div className="mt-4">
                    <label
                        htmlFor="lname"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Lastname:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="lname"
                            className="w-full"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                </div>    
            </div>
            <div className="mt-4">
                <label
                    htmlFor="bname"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Business Name
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="bname"
                        className="w-full"
                        value={bname}
                        onChange={(e) => setBname(e.target.value)}
                    />
                </div>
            </div>    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="mt-4">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Phone number:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="number"
                            name="phone"
                            className="w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            min={0}
                        />
                    </div>
                </div>    
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="email"
                            name="email"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>    
            </div>   
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="mt-4">
                    <label
                        htmlFor="setup_fee"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Setup Fee:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="number"
                            name="setup_fee"
                            className="w-full"
                            value={setup_fee}
                            onChange={(e) => setSetupfee(e.target.value)}
                            min={0}
                        />
                    </div>
                </div>    
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Annual Fee:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="number"
                            name="annual_fee"
                            className="w-full"
                            value={annual_fee}
                            onChange={(e) => setAnnualFee(e.target.value)}
                            min={0}
                        />
                    </div>
                </div>    
            </div>  
            <div className="mt-4">
                <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Business Location
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="location"
                        className="w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>   
            {/* <div className='mt-4'>
            <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                >
                    Select Image
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="file"
                        name="image"
                        className="w-full"
                        ref={imageRef}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
            </div>                */}
            <div className="flex items-center justify-center w-full mt-4">
                <button
                    disabled={loading? true: false}
                    type="submit"
                    className="bg-black text-white w-full py-[15px] rounded"
                >
                    {loading ? "Processing": "Register Customer"}
                </button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default InsertCustomer