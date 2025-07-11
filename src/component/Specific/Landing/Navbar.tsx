import { Logo } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full bg-[#FFFFFF] min-h-14 h-19 shadow-xs'>
      <div className='mx-8 py-6 px-4 flex justify-between items-center'>

        <div className=' px-4 flex justify-between items-center space-x-12'>
          <Image src={Logo} alt={"logo"} priority width={100} height={100} className='w-auto h-7' />
          <nav className='space-x-6'>
            <Link href="#" prefetch className='text-[#000000] font-inter text-sm font-medium'>
              About Us</Link>
            <Link href="#" prefetch className='text-[#000000] font-inter text-sm font-medium'>Things to Do</Link>
            <Link href="#" prefetch className='text-[#000000] font-inter text-sm font-medium' >
              Plan Your Trip</Link>
            <Link href="#" prefetch className='text-[#000000] font-inter text-sm font-medium'>
              Support</Link>
          </nav>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex justify-between items-center gap-1'>
            <IoPersonCircleOutline color='#EB6753' size={24} />
            <Link href="#" prefetch className='text-[#000000] font-inter text-sm'>
              Login
            </Link>
          </div>

          {/* <div> */}
            {/* <Link href="#" prefetch className='text-[#000000] hover:text-[#FF6347]'> */}
              {/* <Image src="/images/search-icon.png" alt="Search" width={24} height={24} /> */}
              {/* asas */}
            {/* </Link> */}
            {/* <Link href="#" prefetch className='text-[#000000] hover:text-[#FF6347]'> */}
              {/* <Image src="/images/user-icon.png" alt="User" width={24} height={24} /> */}
              {/* asas */}
            {/* </Link> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar