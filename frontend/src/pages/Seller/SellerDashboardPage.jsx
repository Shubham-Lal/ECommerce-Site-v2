import React from 'react';
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader';
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar';

const SellerDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={0} />
        </div>
      </div>
    </div>
  )
}

export default SellerDashboardPage