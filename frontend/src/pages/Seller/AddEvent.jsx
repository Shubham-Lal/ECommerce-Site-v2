import React from 'react'
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar'
import CreateEvent from '../../components/Seller/CreateEvent'

const AddEvent = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSidebar active={5} />
                </div>
                <div className="w-full flex justify-center">
                    <CreateEvent />
                </div>
            </div>
        </div>
    )
}

export default AddEvent