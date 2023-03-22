import React from 'react'
import { FaUser } from 'react-icons/fa'
import FormImage from '../assets/CardImage.jpg'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='bg-white rounded-3xl w-11/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 flex duration-500 hover:shadow-2xl'>
        <img src={FormImage} alt=""  className='w-2/5 rounded-3xl hidden xl:block lg:block md:block sm:hidden'/>
        <form action="" className='w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full flex flex-col gap-2 p-8 rounded-3xl'>
            <div className='w-full flex justify-center items-center'>
                <div className='rounded-full border border-slate-800 overflow-hidden'>
                    <FaUser className='text-9xl'/>
                </div>
            </div>
            <h1 className='w-full justify-center flex'>Welcome back!</h1>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter email' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='*******' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
            <input type="submit" value='Sign in' className='bg-blue-500 rounded-2xl p-4 mt-2'/>
            <span className='w-full flex justify-between'>
                <p>Create Account <Link to="/signUp"><b className='text-blue-500 mt-4'>Sign Up</b></Link></p>
                <p className='text-blue-500 font-bold'>Forgot password</p>
            </span>
        </form>

    </div>
  )
}

export default LoginForm