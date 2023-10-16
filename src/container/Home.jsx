import React from 'react'
import Navbar from '../components/Navbar'

export const Home = () => {
  return (
    <div>
       <Navbar/>
       <div className='w-full flex items-center justify-center h-[100vh]'>
        <h1 className='text-3xl'>Very Bad UI</h1>
       </div>
    </div>
  )
}

export default Home