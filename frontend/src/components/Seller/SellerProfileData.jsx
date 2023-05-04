import React, { useState } from 'react'
import { productData } from '../../static/data';
import ProductCard from '../Route/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import styles from '../../styles/styles';

const SellerProfileData = ({ isOwner }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="flex w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-[4px] drop-shadow-lg p-2 items-center justify-between sticky top-[2.5rem] z-10">
        <div className="w-full flex gap-[20px]">
          <div className="flex items-center rounded-lg" onClick={() => setActiveTab(0)}>
            <h5 className={`font-[600] text-[20px] ${activeTab === 0 ? "text-[#56D879]" : "text-[#333] hover:scale-105 duration-200"} cursor-pointer`}>
              Products
            </h5>
          </div>
          <div className="flex items-center rounded-lg" onClick={() => setActiveTab(1)}>
            <h5 className={`font-[600] text-[20px] ${activeTab === 1 ? "text-[#56D879]" : "text-[#333] hover:scale-105 duration-200"} cursor-pointer`}>
              Events
            </h5>
          </div>
          <div className="flex items-center rounded-lg" onClick={() => setActiveTab(2)}>
            <h5 className={`font-[600] text-[20px] ${activeTab === 2 ? "text-[#56D879]" : "text-[#333] hover:scale-105 duration-200"} cursor-pointer`}>
              Reviews
            </h5>
          </div>
        </div>

        <div>
          {isOwner && (
            <div>
              <div className={`${styles.button} h-[42px] group relative !rounded-[4px]`}>
                <Link to="/dashboard">
                  <h1 className="text-[#fff] flex items-center">
                    Go Dashboard <IoIosArrowForward className=" absolute opacity-80 h-4 w-4 top-auto right-3 transition-all group-hover:translate-x-1.5 group-hover:h-5 group-hover:w-5 group-hover:opacity-100" />
                  </h1>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <br />

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 mb-12 border-0">
        {productData && productData.map((product, index) => (
          <ProductCard product={product} isSeller key={index} />
        ))}
      </div>
    </div>
  )
}

export default SellerProfileData