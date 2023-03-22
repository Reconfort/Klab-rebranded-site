import React from 'react'
import { FaUser } from 'react-icons/fa'
import FormImage from '../assets/CardImage.jpg'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div className='bg-white rounded-3xl w-11/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 flex duration-500 hover:shadow-2xl'>
        <img src={FormImage} alt=""  className='w-2/5 rounded-3xl hidden xl:block lg:block md:block sm:hidden'/>
        <form action="" className='w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full flex flex-col gap-2 p-8 rounded-3xl'>
            <div className='w-full flex justify-center items-center'>
                <div className='my-4'>
                    <h1 className='text-2xl'>Sign-up here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                </div>
                
            </div>
            <div className="flex flex-row gap-4">
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='John Doe' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='johnDoe@gmail.com' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
            </div>
            <div className="flex flex-row gap-4">
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='John Doe' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='johnDoe@gmail.com' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
            </div>
            <div className="flex flex-row gap-4">
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='John Doe' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
                <span className='flex flex-col w-1/2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='johnDoe@gmail.com' className='rounded-2xl bg-slate-200 outline-none border-none p-4'/>
                </span>
            </div>
            <input type="submit" value='Sign up' className='bg-blue-500 rounded-2xl p-4 mt-2'/>
            <span className='w-full flex justify-between'>
                <p>Already member <Link to="/account"><b className='text-blue-500 mt-4'>Sign in</b></Link></p>
            </span>
        </form>

    </div>
  )
}

export default RegisterForm