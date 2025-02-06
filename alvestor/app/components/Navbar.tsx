import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className='h-[20vh] bg-[#09090A] bg-opacity-50 border-b border-white flex items-center justify-between px-12 blur-[500]'>
            <Image src='/logo.png' alt='logo' width={240} height={256} layout='intrinsic' />
                <nav className='space-x-20 text-[1.5rem]'>
                    <Link href='/' >Home</Link>
                    <Link href='/' >Features</Link>
                    <Link href='/' >Investments</Link>
                </nav>
                <button className='bg-black text-white text-[1.5rem] border-4 px-4 py-2 rounded-2xl border-[#B94DDD] hover:bg-gradient-to-br from-[#B94DDD] to-[#1A337F]
                '><Link href='\login'>Login</Link></button>
        </div>
    </>
  )
}

export default Navbar