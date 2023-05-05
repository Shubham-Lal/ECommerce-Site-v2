import React from 'react';
import { Link } from 'react-router-dom';
import { sellerDasboardSidebar } from '../../../static/data';

const DashboardSidebar = ({ active }) => {
    return (
        <div className="w-full h-[calc(100vh-80px)] bg-white shadow-sm overflow-y-auto sticky top-0 left-0 z-10">
            {sellerDasboardSidebar.map((item, index) => (
                <div className="w-full flex items-center p-4" key={index}>
                    <Link to={item.url} className="w-full flex items-center justify-center 800px:justify-normal">
                        <i className={`text-[30px] ${active === index ? "text-[#342AC8]" : "text-[#555]"}`}>
                            {item.icon}
                        </i>
                        <h5 className={`hidden 800px:block pl-2 text-[18px]  ${active === index ? "text-[#342AC8] font-[500]" : "text-[#555] font-[400]"}`}>
                            {item.name}
                        </h5>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DashboardSidebar