import React from 'react'
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar'
import AllCoupons from '../../components/Seller/AllCoupons'

const Coupons = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSidebar active={8} />
                </div>
                <div className="w-full flex justify-center overflow-x-hidden">
                    <AllCoupons />
                </div>
            </div>
        </div>
    )
}

export default Coupons