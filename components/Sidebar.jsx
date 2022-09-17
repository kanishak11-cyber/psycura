import React from 'react'
import Calender from './Calender'
import { BsFillPersonFill, BsSearch, BsFillHeartFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
import Link from "next/link"
const Sidebar = () => {
    return (
        <div className='white-glassmorphism px-10  '>
            <div className='py-5'>
                <h1 className='justify-center text-center  flex flex-row align-center white-glassmorphism'>
                    <BsSearch className='text-3xl text-center p-2 border-hidden' />
                    <input placeholder='search' className='bg-transparent' />
                </h1>
            </div>

            <Link href='/Profile' passHref>
            <div className='hover:text-blue-500 h'>
                <h1 className=' flex flex-row align-center text-xl py-2'>
                    <BsFillPersonFill className='text-3xl text-center' />
                    <span className='px-2'>
                        Profile
                    </span>

                </h1>
            </div>
            </Link>

            <Link href='/Setting' passHref>
            <div className='hover:text-green-500 h'>
                <h1 className=' flex flex-row align-center text-xl py-2'>
                    <AiFillSetting className='text-2xl text-center' />
                    <span className='px-2'>
                        Setting
                    </span>
                </h1>
            </div>
            </Link>
            
            <Link href='/Favourite'>
             <div className='hover:text-red-500 h'>
                <h1 className=' flex flex-row align-center  ext-xl py-2 '>
                    <BsFillHeartFill className='text-2xl text-center' />
                    <span className='px-2'>
                        Favourite
                    </span>
                </h1>
            </div>
            </Link>
           
           <Link href='/Private'>
           <div className='hover:text-yellow-500 h'>
                <h1 className=' flex flex-row align-center text-xl py-2'>
                    <RiGitRepositoryPrivateLine className='text-2xl text-center' />
                    <span className='px-2'>
                        Private
                    </span>
                </h1>
            </div>
           </Link>
            

            <div className='py-10'>
                <Calender />
            </div>
        </div>
    )
}

export default Sidebar