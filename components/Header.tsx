import Link from 'next/link';
import React from 'react'
import { FaTwitterSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/rajdeo-prasad-a27b49203/'
    },
    {
        icon: <FaTwitterSquare />,
        href: 'https://twitter.com/rajdeoOfficial'
    },
    {
        icon: <FaGithub />,
        href: 'https://github.com/formalrajdeo'
    }
]

const Header = () => {
    return (
        <header className="flex justify-between items-center max-sm:flex-col">
            <div>
                <div>
                    <span className="font-semibold text-3xl">RAJDEO PRASAD</span>
                </div>
                <div className="flex justify-center items-center text-xs">
                    <div>
                        <span>DEVELOPER</span>
                    </div>
                    {/* <div className="px-2 mx-2 border-t-0 border-b-0 border-l border-r border-black">
                        <span>YOUTUBER</span>
                    </div>
                    <div>
                        <span>TEACHER</span>
                    </div> */}
                </div>
            </div>
            <ul className="flex justify-between items-center max-sm:mt-4">
                {SOCIAL_LINKS.map((social, social_idx) => {
                    return (
                        <Link key={social_idx} href={social.href} target='_blank'>
                            <li className="bg-black text-white p-2 m-1 hover:bg-blue-500 hover:cursor-pointer">
                                {social.icon}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </header>
    )
}

export default Header