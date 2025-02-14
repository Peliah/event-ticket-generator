'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

const Navbar = () => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='max-w-[1200px] mx-auto border rounded-3xl border-[#197686] bg-[#05252c4d] mt-3 p-3' style={{ fontFamily: 'Jeju Myeongjo, serif', fontWeight: '300' }}>
            <div className='w-full flex justify-between items-center'>
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
                <div className='hidden md:block'>
                    <ul className='flex gap-6 text-lg text-[#B3B3B3]'>
                        <li>
                            <Link href='/'>
                                <h1 className={pathname === '/' ? 'text-white' : ''}>Events</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href='/my-tickets'>
                                <h1 className={pathname === '/my-tickets' ? 'text-white' : ''}>My Tickets</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <h1 className={pathname === '/about' ? 'text-white' : ''}>About Project</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link
                        className="bg-white hover:bg-[#24A0B5] flex items-center py-4 md:py-3 px-3 md:px-6 rounded-xl gap-3 border border-[rgba(213, 234, 0, 0.1)] hover:text-[#D9D9D9] hover:border-[#D9D9D9] text-[#05252C]"
                        href="/my-tickets"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h4 className="font-extralight uppercase">My Tickets</h4>
                        <BsArrowRight className={`font-light text-2xl ${isHovered ? 'hidden' : ''}`} />
                        <BsArrowUpRight className={`font-light text-xl ${isHovered ? '' : 'hidden'}`} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
