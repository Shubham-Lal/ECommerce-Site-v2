import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import { serverAPI, serverURL } from '../../server';
import styles from '../../styles/styles';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Loader from '../../styles/Loader';

const SellerInfo = ({ isOwner }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [seller, setSeller] = useState({});
  const [sellerAvatar, setSellerAvatar] = useState("");

  const handleSellerLogout = () => {
    localStorage.removeItem("sellerToken");
    toast.success("Logout Successfull!");
    navigate("/");
    window.location.reload(true);
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${serverAPI}/seller/sellerinfo/${id}`)
      .then((res) => {
        setSeller(res.data.seller);
        setSellerAvatar(res.data.seller.avatar);
      })
      .catch((err) => {
        toast.error("Error fetching seller! Try again later...");
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    isLoading ? <Loader />
      : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex items-center justify-center">
              <img
                className="w-[150px] h-[150px] object-cover rounded-full"
                src={`${serverURL}/${sellerAvatar}`}
                alt="shop"
              />
            </div>
            <h3 className="py-2 text-center text-[20px]">
              {seller.name}
            </h3>
            <p className="text-[16px] text-[#000000A6] text-center p-[10px] flex items-center">
              {seller?.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000A6]">
              {seller.address}
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Contact No.</h5>
            <h4 className="text-[#000000A6]">
              +91 {seller.phoneNumber}
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000A6]">
              11
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Seller Rating</h5>
            <h4 className="text-[#000000A6]">
              4.2/5
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000A6]">
              {seller.createdAt?.slice(0, 10)}
            </h4>
          </div>
          {isOwner && (
            <div className="p-3">
              <div className={`${styles.button} w-full h-[42px] rounded hover:bg-amber-500 hover:rounded-sm duration-200`}>
                <span className="text-[#fff] flex items-center">
                  Edit Details
                </span>
              </div>
              <div
                className={`${styles.button} w-full h-[42px] rounded hover:bg-amber-500 hover:rounded-sm duration-200`}
                onClick={handleSellerLogout}
              >
                <span className="text-[#fff] flex items-center">
                  Logout
                </span>
              </div>
            </div>
          )}
        </div>
      )
  )
}

export default SellerInfo