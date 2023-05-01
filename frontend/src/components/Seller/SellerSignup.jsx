import React, { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { BsShop } from 'react-icons/bs';
import { toast } from 'react-toastify';

const SellerSignup = () => {
    const [shopName, setShopName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    const handleCreateSeller = async (e) => {
        e.preventDefault();
        if (!shopName || !email || !phoneNumber || !address || !zipCode || !password) return toast.warn("Please fill out all the fields to proceed!");
        if (password.length < 6) return toast.warn("Password should be greater than or equal to 6 characters!");
        if (!avatar) return toast.warn("Please upload your Shop Logo to proceed!");
        setLoading(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold font-Poppins text-gray-900">
                    Register as a Seller
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md font-Roboto">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleCreateSeller}>

                        {/* SHOP NAME INPUT FIELD */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Shop Name
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={shopName}
                                    placeholder="Enter Shop Name"
                                    onChange={(e) => setShopName(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* EMAIL INPUT FIELD */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your Email/Business Email
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder="Enter Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        {/* PHONE NUMBER INPUT FIELD */}
                        <div>
                            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                                Your Business Number
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type="number"
                                    name="phonenumber"
                                    id="phonenumber"
                                    value={phoneNumber}
                                    placeholder="Enter Phone No."
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* ADDRESS INPUT FIELD */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Your Business Address
                            </label>
                            <div className="mt-1">
                                <textarea
                                    className="min-h-[80px] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={address}
                                    placeholder="Enter Business Address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* ZIP CODE INPUT FIELD */}
                        <div>
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                                Your Zip Code
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type="number"
                                    name="zipcode"
                                    id="zipcode"
                                    value={zipCode}
                                    placeholder="Enter Zip Code"
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* PASSWORD INPUT FIELD */}
                        <div>
                            <label htmlFor="password" className="block text-sm select-none font-medium text-gray-700">
                                Your Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    className="appearance-none block w-full px-3 py-2 select-none border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    type={`${visible ? "text" : "password"}`}
                                    name="password"
                                    id="password"
                                    value={password}
                                    placeholder="Enter Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                {visible
                                    ? <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                    : <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                }
                            </div>
                        </div>

                        {/* SHOP LOGO */}
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 overflow-hidden">
                                    {avatar
                                        ? <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="avatar"
                                            className="h-full w-full object-cover"
                                        />
                                        : <BsShop className="h-8 w-8 cursor-pointer" onClick={() => fileInputRef.current.click()} />
                                    }
                                </span>
                                {avatar && (
                                    <span
                                        className="cursor-pointer ml-2 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                        onClick={() => setAvatar(null)}
                                    >
                                        Remove Shop Logo
                                    </span>
                                )}
                                {!avatar && (
                                    <label
                                        htmlFor="file-input"
                                        className="cursor-pointer ml-2 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <span>
                                            Upload Shop Logo
                                        </span>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            multiple={false}
                                            name="avatar"
                                            id="file-input"
                                            accept=".jpg,.jpeg,.png"
                                            onChange={handleFileUpload}
                                            className="sr-only"
                                        />
                                    </label>
                                )}
                            </div>
                        </div>

                        {/* CREATE SELLER BUTTON */}
                        <div>
                            <button
                                type="submit"
                                className={`group cursor-${loading ? "not-allowed" : "pointer"} relative w-full h-40px flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? "bg-gray-400" : "bg-blue-600"} hover:${loading ? "bg-gray-500" : "bg-blue-700"}`}
                            >
                                {loading ? "Creating..." : "CREATE"}
                            </button>
                        </div>
                        {/* NEW USER */}
                        <div className={`${styles.normalFlex} w-full`}>
                            <h4>
                                Already a seller?
                            </h4>
                            <Link to="/seller-login" className="text-blue-600 pl-2">
                                Sign In
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SellerSignup