import React from 'react';
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { footerCompanyLinks, footerItemLinks, footerSupportLinks } from '../../static/data';

const Footer = () => {
    return (
        <div className="bg-[#000] text-white">
            {/* Newsletter */}
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342AC8] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 font-Poppins">
                    <span className="text-[#56D879]">
                        Subscribe
                    </span>
                    <span> us for latest updates</span><br />
                    <span>about events & offers</span>
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your email..."
                        className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                        required
                    />
                    <button className="bg-[#56D879] hover:bg-teal-500 duration-200 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                        <span>Subscribe</span>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16 sm:text-center items-center">
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                    <h5 className="text-[40px] font-Roboto font-semibold">
                        CertyStore
                    </h5>
                    <br />
                    <p>
                        Whether it be products, services, or experiences, we make sure to deliver precisely what you desire, with utmost quality and satisfaction.
                    </p>
                    {/* Social Links */}
                    <div className="flex items-center mt-[15px] gap-[15px]">
                        <Link to="https://facebook.com" target="_blank">
                            <AiFillFacebook
                                size={25}
                                className="cursor-pointe hover:text-[#3B5998] hover:scale-125 transition-all duration-200"
                            />
                        </Link>
                        <Link to="https://instagram.com" target="_blank">
                            <AiFillInstagram
                                size={25}
                                className="cursor-pointer hover:text-[#D62976] hover:scale-125 transition-all duration-200"
                            />
                        </Link>
                        <Link to="https://twitter.com" target="_blank">
                            <AiOutlineTwitter
                                size={25}
                                className="cursor-pointer hover:text-[#00ACEE] hover:scale-125 transition-all duration-200"
                            />
                        </Link>
                        <Link to="https://youtube.com" target="_blank">
                            <AiFillYoutube
                                size={25}
                                className="cursor-pointer hover:text-[#C4302B] hover:scale-125 transition-all duration-200"
                            />
                        </Link>
                    </div>
                </ul>

                {/* <div className="grid grid-cols-2 sm:hidden"> */}
                {/* Company */}
                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold text-[18px]">
                        Company
                    </h1>
                    {footerCompanyLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-5"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Shop */}
                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold text-[18px]">
                        Shop
                    </h1>
                    {footerItemLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-5"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Support */}
                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold text-[18px]">
                        Support
                    </h1>
                    {footerSupportLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-5"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="sm:block flex items-center justify-center w-full">
                    <img
                        src="/payments.webp"
                        alt="payments"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>
                    *For education purpose only
                </span>
                <span>
                    Made with 🖤 by Casuals4Fun | WeKnewHow
                </span>
                <span>
                    Check out on
                    <Link to="https://github.com/CERTIFIED2003/ECommerce-Site-v2" className="ml-1 underline">
                        Github
                    </Link>
                </span>
                {/* <div className="sm:block flex items-center justify-center w-full">
                    <img
                        src="/payments.webp"
                        alt="payments"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Footer