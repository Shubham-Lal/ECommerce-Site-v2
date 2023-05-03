import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { serverURL } from '../../../server';

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <h1 className="text-[30px] 800px:text-[40px] text-[#F6BA00] font-Poppins font-bold">
            CERTYSTORE
          </h1>
        </Link>
      </div>
      <div className="flex items-center mr-4">
        <div className="flex items-center">
          <Link to="/dashboard/coupons" className="hidden 800px:block">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="hidden 800px:block">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="hidden 800px:block">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="hidden 800px:block">
            <FiPackage
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-inbox" className="hidden 800px:block">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/seller/${seller._id}`}>
            <img
              src={`${serverURL}/${seller.avatar}`}
              className="w-[50px] h-[50px] rounded-full object-cover"
              alt="shop"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader