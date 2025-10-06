import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-gray-200 py-4 mt-10 w-full h-20 flex justify-center items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Rajdeo Prasad. All rights reserved.</p>

                <div className="flex space-x-4">
                    <a
                        href="https://github.com/formalrajdeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rajdeo-prasad-a27b49203/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
