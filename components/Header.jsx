import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='px-20 py-5 justify-between flex flex-row'>
            <Link href='/' passHref>
                <div>
                    <h1 className='text-2xl uppercase border py-3 px-1 bold'>Psycura</h1>
                </div>
            </Link>

            <div>
                <button className='text-2xl uppercase border py-3 px-1 bold hover:text-blue-500 rounded-lg'>
                    login
                </button>
            </div>
        </div>
    )
}

export default Header