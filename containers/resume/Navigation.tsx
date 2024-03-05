'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoIosContact, IoMdMail } from 'react-icons/io'
import { IoDocument } from 'react-icons/io5'

const NAV_LINKS = [
    {
        icon: <IoIosContact size={40} color="gray" />,
        title: 'Profile',
        href: '/'
    },
    {
        icon: <IoDocument size={40} color="gray" />,
        title: 'Resume',
        href: '/resume'
    },
    {
        icon: <IoMdMail size={40} color="gray" />,
        title: 'Contact',
        href: '/contact'
    }
]

const Navigation = () => {
    const pathname = usePathname()
    return (
        <div className="my-4">
            <ul className="flex justify-center items-center gap-4 bg-gray-200">
                {NAV_LINKS.map((link, link_indx) => {
                    return (
                        <Link key={link_indx} href={link.href} className={`px-5 py-3 flex flex-col justify-center items-center ${pathname === link.href ? 'bg-gray-400 text-white' : 'hover:bg-gray-300 hover:cursor-pointer hover:text-gray-700'}`}>
                            <li>
                                <div>
                                    {link.icon}
                                </div>
                                <div>
                                    {link.title}
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navigation