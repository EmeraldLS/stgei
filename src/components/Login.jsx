import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import AuthContext from '../auth/AuthProvider'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const [loading, setLoading]  = useState(false)
    const {setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const ProcessLogin  = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            email,
            password
        }
        try{
            const response = await axios.post("/login", data, {
                withCredentials: true,
            })
            
            setAuth(response.data)
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/dashboard", {replace: true})

        }catch(err) {
            if(err) {
                const errorCatched = err.response.data.message
                setErr(errorCatched)
                setLoading(false)
            }
        }
    }
    useEffect(() => {
        setErr("")
    }, [email, password])
  return (
    <div>
        <Navbar />
        <div className='login_content grid grid-cols-1 md:grid-cols-2 h-screen w-100'>
            <div className='flex items-center justify-center'>
                <h1 className='text-3xl'>Emerald Is Coming...</h1>
            </div>
            <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-black">
                        Login
                        
                    </h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <div className="mt-4">
                            {err ? 
                                <div className="flex flex-col bg-red-500 items-center justify-center rounded py-5">
                                    <h5 className='w-full text-1xl text-white text-center ' style={{textTransform: 'capitalize'}}>{err}</h5>
                                </div> :
                                ""    
                        }
                            
                        </div>
                    <form onSubmit={ProcessLogin}>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
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
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-4">
                            <button
                                disabled={loading? true: false}
                                type="submit"
                                className="bg-black text-white w-full py-[15px] rounded"
                            >
                                {loading ? "Processing": "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>        </div>
    </div>
  )
}

export default Login