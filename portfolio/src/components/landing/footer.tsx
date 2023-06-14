import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
const Footer = () => {
    return (
        <>
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Top area: Blocks */}
                <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                    {/* 1st block */}
                    <div className="md:col-span-4 lg:col-span-5">
                    <div className="flex items-center mt-4 space-x-3">
                        <img className="rounded-full shadow-md"
                        src={logo}
                        alt="Thumbnail"
                        height={50}
                        width={50}
                        />
                        <div>Make_Relation &copy;</div>
                    </div>
                    <div className="text-gray-400">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                    </div>

                    {/* 2nd, 3rd and 4th blocks */}
                    <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                    {/* 2nd block */}
                    <div className="text-sm">
                        <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                        <ul>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="text-sm">
                        <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                        <ul>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="text-sm">
                        <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                        <ul>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                        </li>
                        </ul>
                    </div>

                    </div>

                </div>

                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between">

                    {/* Social links */}
                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                    
                    {/* <li className="ml-4">
                        <Link to="https://www.instagram.com/painting_mini/" className="flex justify-center items-center text-card-post bg-gray-800 hover:text-gray-100 hover:bg--600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20.145" cy="11.892" r="1" />
                            <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                            <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                        </svg>
                        </Link>
                    </li> */}
                    
                    </ul>

                    {/* Copyrights note */}
                    <div className="text-gray-400 text-sm mr-4">&copy; makeR.com. All rights reserved.</div>

                </div>

                </div>
            </div>
            </footer>
    </>
    )
}
export default Footer