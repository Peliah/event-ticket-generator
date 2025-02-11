import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='max-w-[1200px] mx-auto border rounded-3xl border-[#197686] bg-[#05252c4d] mt-3 p-3' style={{ fontFamily: 'Jeju Myeongjo, serif', fontWeight: '300' }}>
            <div className='w-full flex justify-between items-center '>
                <div>
                    <Image
                        src={`/image/logo.png`}
                        className="w-full h-auto"
                        alt='logo'
                        sizes="100vw"
                        height={10}
                        width={10}
                    />
                </div>
                <div>
                    <ul className='flex gap-6 text-lg'>
                        <li>Events</li>
                        <li>My Tickets</li>
                        <li>About Project</li>
                    </ul>
                </div>
                <div>
                    <Link href='#' className='bg-white flex items-center py-3 px-5 rounded-xl gap-3'>
                        <h4 className='font-extralight text-[#05252C] uppercase' >My Tickets</h4>
                        <BsArrowRight className='text-[#05252c] font-light text-2xl' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar