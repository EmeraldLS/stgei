import React, { Suspense, useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from './AuthProvider'
const Protected = () => {
    const {auth} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)
    const ProcessLogout = () => {
      localStorage.removeItem("user")
      setAuth({})
      navigate("/", {replace: true})
    }
    useEffect(() => {
      if(auth?.exp * 1000  < Date.now()) {
        return ProcessLogout()
      }
    }, [location.pathname])
    
    if(!auth) {
        return <Navigate to="/login" replace state={{path: location.pathname}} />
    }
    
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      
    </>
   
  )
}

export default Protected