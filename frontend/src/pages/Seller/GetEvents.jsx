import React from 'react'
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar'
import AllEvents from '../../components/Seller/AllEvents'

const GetEvents = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSidebar active={4} />
                </div>
                <div className="w-full flex justify-center overflow-x-hidden">
                    <AllEvents />
                </div>
            </div>
        </div>
    )
}

export default GetEvents