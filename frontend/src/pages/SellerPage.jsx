import React from 'react';
import styles from '../styles/styles';
import SellerInfo from '../components/Seller/SellerInfo';
import SellerProfileData from '../components/Seller/SellerProfileData';

const SellerPage = () => {
  return (
    <div className={`${styles.section} bg-[#F5F5F5]`}>
      <div className="w-full flex justify-between py-10">
        <div className="w-[25%] h-full bg-[#fff] rounded-[4px] shadow-sm overflow-y-auto sticky top-[2.5rem] left-0 z-10">
          <SellerInfo isOwner />
        </div>
        <div className="w-[72%] rounded-[4px]">
          <SellerProfileData isOwner />
        </div>
      </div>
    </div>
  )
}

export default SellerPage