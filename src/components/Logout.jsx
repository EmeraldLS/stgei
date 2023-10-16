import React, { useContext } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../auth/AuthProvider'

const Logout = () => {
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)
    const ProcessLogout = async () => {
        try{
            await axios.put("/secured/logout", {}, {
                withCredentials: true
            })
            localStorage.removeItem("user")
            setAuth({})
            navigate("/", {replace: true})
        }catch(err) {
            if(err) {
                console.log(err)
            }
        }
    }
  return (
    <div>
        <button onClick={ProcessLogout} className='text-white underline text-2xl absolute bottom-10'>Logout</button>
    </div>
  )
}

export default Logout