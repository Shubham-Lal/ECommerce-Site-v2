import React from 'react'
import DashboardHeader from '../../components/Seller/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Seller/Layout/DashboardSidebar'
import CreateProduct from '../../components/Seller/CreateProduct'

const AddProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={3} />
        </div>
        <div className="w-full flex justify-center">
          <CreateProduct />
        </div>
      </div>
    </div>
  )
}

export default AddProduct