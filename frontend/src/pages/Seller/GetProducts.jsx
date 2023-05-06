import React from 'react';
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader';
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar';
import AllProducts from '../../components/Seller/AllProducts';

const GetProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSidebar active={2} />
                </div>
                <div className="w-full flex justify-center overflow-x-hidden">
                    <AllProducts />
                </div>
            </div>
        </div>
    )
}

export default GetProducts