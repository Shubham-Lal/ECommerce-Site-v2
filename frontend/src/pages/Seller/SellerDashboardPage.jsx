import React, { useState } from 'react';
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader';
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar';

const SellerDashboardPage = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  )
}

export default SellerDashboardPage