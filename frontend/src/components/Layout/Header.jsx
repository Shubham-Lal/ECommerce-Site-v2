import React, { useState } from 'react';
import styles from '../../styles/styles';
import { Link } from "react-router-dom";
import { categoriesData, navItems, productData } from "../../static/data";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Dropdown from './Dropdown';
import Navbar from './Navbar';
import { useSelector } from "react-redux";
import { serverURL } from '../../server';
import Cart from '../Popup/Cart';
import Wishlist from '../Popup/Wishlist';
import { RxCross1 } from 'react-icons/rx';

const Header = ({ activeHeading }) => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [headerActive, setHeaderActive] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Categories");
    const [cartPopup, setCartPopup] = useState(false);
    const [wishlistPopup, setWishlistPopup] = useState(false);
    const [headerSidebar, setHeaderSidebar] = useState(false);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData && productData.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()));
        setSearchData(filteredProducts);
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 90) setHeaderActive(true);
        else setHeaderActive(false);
    });

    return (
        <>
            <div className={`${styles.section}`}>
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    {/* LOGO */}
                    <div>
                        <Link to="/">
                            {/* <img src="/certystore.png" alt="" /> */}
                            <h1 className="text-[40px] text-[#F6BA00] font-Poppins font-bold">
                                CERTYSTORE
                            </h1>
                        </Link>
                    </div>

                    {/* SEARCH WIDGET */}
                    <div className="w-[50%] relative">
                        <input
                            type='text'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search CertyStore..."
                            className="h-[40px] w-full px-2 border-[2px] border-[#3957DB] rounded-md"
                        />
                        <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer hover:text-[#3957DB]" />
                        {searchTerm.length > 2 && searchData && searchData.length !== 0 ? (
                            // <div className="absolute min-h-[30vh] min-w-full bg-slate-50 shadow-sm-2 z-[9] p-4">
                            <div className="absolute min-h-fit min-w-full bg-slate-50 shadow-sm-2 z-[9] p-4">
                                {searchData.map((item, index) => {
                                    const name = item.name;
                                    const productName = name.replace(/\s+/g, "-");
                                    return (
                                        <Link to={`/product/${productName}`} key={index}>
                                            <div className="w-full flex items-start py-3">
                                                <img
                                                    src={item.image_Url[0].url}
                                                    className="w-[40px] h-[40px] mr-[10px]"
                                                    alt={productName}
                                                />
                                                <h1>
                                                    {item.name}
                                                </h1>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : null}
                    </div>

                    {/* SELLER */}
                    <div className={`${styles.button2} group relative`}>
                        <Link to="/seller">
                            <h1 className="text-[#fff] flex items-center">
                                Become Seller <IoIosArrowForward className=" absolute opacity-80 h-4 w-4 top-auto right-3 transition-all group-hover:translate-x-1.5 group-hover:h-5 group-hover:w-5 group-hover:opacity-100" />
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className={`${headerActive ? "shadow-sm fixed top-0 left-0 z-10" : null} hidden 800px:flex items-center justify-between w-full bg-[#3321C8] h-[70px] transition-all ${headerActive && "bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"}`}> */}
            <div className={`${headerActive ? "shadow-sm fixed top-0 left-0 z-10" : null} hidden 800px:flex items-center justify-between w-full bg-[#3321C8] h-[70px] transition-all`}>
                <div className={`${styles.section} relative ${styles.normalFlex} justify-between`}>

                    {/* CATEGORIES */}
                    <div>
                        <div className="hidden 1000px:block relative h-[60px] mt-[10px] w-[270px]">
                            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                            <div className="group h-full" onClick={() => setDropdown(prev => !prev)}>
                                <button
                                    className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                                >
                                    {selectedCategory}
                                </button>
                                <IoIosArrowDown
                                    size={20}
                                    className="absolute right-2 top-5 cursor-pointer group-hover:translate-y-1 transition"
                                />
                            </div>

                            {/* DROPDOWN */}
                            {dropdown ? (
                                <Dropdown
                                    categoriesData={categoriesData}
                                    setDropdown={setDropdown}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            ) : null}
                        </div>
                    </div>

                    {/* NAV ITEMS */}
                    <div className={`${styles.normalFlex}`}>
                        <Navbar
                            activeHeading={activeHeading}
                            navItems={navItems}
                        />
                    </div>

                    {/* RIGHT WIDGETS */}
                    <div className="flex">
                        {/* WISHLIST */}
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer mr-[15px] group" onClick={() => setWishlistPopup(true)}>
                                <AiOutlineHeart
                                    className="w-[30px] h-[30px] transition-all group-hover:scale-75"
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span
                                    className="absolute right-0 top-0 rounded-full bg-[#3BC177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center"
                                >
                                    0
                                </span>
                            </div>
                        </div>
                        {/* SHOPPING CART */}
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer mr-[15px] group" onClick={() => setCartPopup(true)}>
                                <AiOutlineShoppingCart
                                    className="w-[30px] h-[30px] transition-all group-hover:scale-75"
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span
                                    className="absolute right-0 top-0 rounded-full bg-[#3BC177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center"
                                >
                                    0
                                </span>
                            </div>
                        </div>
                        {/* USER */}
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer mr-[15px] group">
                                {isAuthenticated ? (
                                    <Link to="/profile">
                                        <img
                                            className="w-[35px] h-[35px] rounded-full object-cover transition-all group-hover:scale-90"
                                            src={`${serverURL}/${user.avatar}`}
                                            alt="user"
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/user-login">
                                        <CgProfile
                                            className="w-[30px] h-[30px] transition-all group-hover:scale-75"
                                            color="rgb(255 255 255 / 83%)"
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Cart Popup */}
            <div className={`fixed top-0 right-0 ${cartPopup ? "w-full" : "w-0"} transition-all duration-500 ease-linear h-screen bg-[#0000004b] z-10`}>
                <div
                    className={`fixed top-0 right-0 min-h-screen h-screen ${cartPopup ? "w-[25%]" : "w-0 transition-all duration-500"} bg-white flex flex-col justify-between rounded-l-3xl shadow-2xl`}
                >
                    {cartPopup ? (
                        <Cart setCartPopup={setCartPopup} />
                    ) : null}
                </div>
            </div>

            {/* Wishlist Cart Popup */}
            <div className={`fixed top-0 right-0 ${wishlistPopup ? "w-full" : "w-0"} transition-all duration-500 ease-linear h-screen bg-[#0000004b] z-10`}>
                <div
                    className={`fixed top-0 right-0 min-h-screen h-screen ${wishlistPopup ? "w-[25%]" : "w-0 transition-all duration-500"} bg-white flex flex-col justify-between rounded-l-3xl shadow-2xl`}
                >
                    {wishlistPopup ? (
                        <Wishlist setWishlistPopup={setWishlistPopup} />
                    ) : null}
                </div>
            </div>

            {/* Mobile Header */}
            <div className="fixed z-50 top-0 left-0 w-full 800px:hidden h-[70px] bg-[#fff] shadow-2xl rounded-b-2xl">
                <div className="w-full flex items-center justify-between mt-3.5">
                    <div>

                        <BiMenuAltLeft
                            size={40}
                            className="ml-4"
                            onClick={() => setHeaderSidebar(true)}
                        />
                    </div>
                    <div>
                        <Link to="/">
                            <h1 className="text-[30px] text-[#F6BA00] font-Poppins font-bold">
                                CERTYSTORE
                            </h1>
                        </Link>
                    </div>
                    <div>
                        <div className="relative mr-[20px] group">
                            <AiOutlineShoppingCart size={30} className="group-hover:scale-75 duration-200" />
                            <span
                                className="absolute right-0 top-0 rounded-full bg-[#3BC177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center"
                            >
                                0
                            </span>
                        </div>
                    </div>
                </div>

                {/* Header Sidebar */}
                {headerSidebar && (
                    <div className="fixed bg-[#0000005F] z-20 top-0 left-0 w-full h-full">
                        <div className="fixed w-[60%] h-screen bg-[#fff] top-0 left-0 z-10 rounded-r-2xl overflow-y-scroll">
                            {/* Top */}
                            <div className="w-full flex justify-between pr-3">
                                <div>
                                    <div className="relative mr-[15px] group">
                                        <AiOutlineHeart size={30} className="mt-5 ml-3 group-hover:scale-75 duration-200" />
                                        <span
                                            className="absolute right-0 top-0 rounded-full bg-[#3BC177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center"
                                        >
                                            0
                                        </span>
                                    </div>
                                </div>
                                <RxCross1
                                    size={30}
                                    className="ml-4 mt-5 hover:scale-75 duration-200"
                                    onClick={() => setHeaderSidebar(false)}
                                />
                            </div>

                            {/* Search Widget */}
                            <div className="my-8 w-full m-auto h-[40px] relative">
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Search CertyStore"
                                    className="h-[40px] w-full px-2 focus:border-[#3957DB] border-[2px] rounded-md"
                                />
                                {searchTerm.length > 2 && searchData && searchData.length !== 0 ? (
                                    <div className="absolute rounded-b-xl min-h-fit w-full bg-slate-50 shadow z-[9] p-3">
                                        {searchData.map((item, index) => {
                                            const name = item.name;
                                            const productName = name.replace(/\s+/g, "-");
                                            return (
                                                <Link
                                                    to={`/product/${productName}`}
                                                    onClick={() => setHeaderSidebar(false)}
                                                    key={index}
                                                >
                                                    <div className="w-full flex items-center justify-start py-2">
                                                        <img
                                                            src={item.image_Url[0].url}
                                                            className="w-[40px] h-[40px] mr-2"
                                                            alt={productName}
                                                        />
                                                        <h1>
                                                            {item.name}
                                                        </h1>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                ) : null}
                            </div>

                            <Navbar
                                activeHeading={activeHeading}
                                navItems={navItems}
                            />

                            {/* Seller */}
                            <div className={`${styles.button2} group relative ml-5 !rounded-[4px]`}>
                                <Link to="/seller">
                                    <h1 className="text-[#fff] flex items-center">
                                        Become Seller <IoIosArrowForward className=" absolute opacity-80 h-4 w-4 top-auto right-3 transition-all group-hover:translate-x-1.5 group-hover:h-5 group-hover:w-5 group-hover:opacity-100" />
                                    </h1>
                                </Link>
                            </div>
                            <br /><br /><br />

                            <div>
                                {!isAuthenticated ? (
                                    <div className="flex w-full justify-between px-5">
                                        <Link to="/user-login" className="text-[18px] pr-[10px] text-[#000000b7]">Login</Link>
                                        <Link to="/user-signup" className="text-[18px] text-[#000000b7]">Signup</Link>
                                    </div>
                                ) : (
                                    <div className="flex w-full justify-center">
                                        <Link to="/profile">
                                            <img
                                                className="w-[60px] h-[60px] rounded-full border-[3px] border-[#17DD1F]"
                                                src={`${serverURL}/${user.avatar}`}
                                                alt="user"
                                            />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header