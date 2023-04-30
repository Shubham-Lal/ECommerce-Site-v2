import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { profileSidebarData } from '../../static/data';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!isAuthenticated) return;
    localStorage.removeItem("token");
    toast.success("Logout Successfull!");
    window.location.reload(true);
    navigate("/user-login");
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      {profileSidebarData.slice(0, 7).map((item, index) => (
        <Link to={item.link ? item.link : null} key={index}>
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActiveTab(index)}
          >
            <i className={`text-[20px] text-[${activeTab === index ? "#342AC8" : ""}]`}>{item.icon}</i>
            <span className={`${activeTab === index ? "text-[#342AC8] font-[600]" : ""} pl-3`}>
              {item.name}
            </span>
          </div>
        </Link>
      ))}
      <div
        className="flex items-center cursor-pointer w-full mb-5"
        onClick={() => setActiveTab(7) || handleLogout()}
      >
        <i className={`text-[20px] text-[${activeTab === 7 ? "#342AC8" : ""}]`}>{profileSidebarData[7].icon}</i>
        <span className={`${activeTab === 7 ? "text-[#342AC8] font-[600]" : ""} pl-3`}>
          {profileSidebarData[7].name}
        </span>
      </div>
    </div>
  )
}

export default ProfileSidebar