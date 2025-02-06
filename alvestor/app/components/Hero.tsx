import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <Spotlight fill="#006699" className='-top-10 left-0 '/>
        <Spotlight fill="#F14A16" className='-top-80 -left-10 '/>
        <div className='h-[80vh]'>
    {/* <div className='flex flex-col items-center justify-center h-full text-[8rem] font-bold'>
        Ease the <span className='inline bg-gradient-to-r from-[#B94DDD] to-[#006699] bg-clip-text text-transparent text-[8rem] font-bold'>Destiny</span>
    </div> */}

    <div className='flex items-center justify-center mt-32'>
        <div className='text-[8rem] font-bold'>
            Ease the <span className='inline bg-gradient-to-r from-[#B94DDD] to-[#006699] bg-clip-text text-transparent text-[8rem] font-bold'>Destiny</span>
        </div>
    </div>

    <button className='px-6 py-3 border-white border-2 rounded-xl'><Link href='/login'>Investments</Link></button>
</div>

    </>
  )
}

export default Hero