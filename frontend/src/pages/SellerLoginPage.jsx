import React, { useEffect } from 'react'
import SellerLogin from '../components/Seller/SellerLogin'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SellerLoginPage = ({ setSellerToken, sellerRemember, setSellerRemember }) => {
  const { isSellerAuthenticated, seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSellerAuthenticated) {
      navigate(`/seller/${seller._id}`);
    }
  }, [isSellerAuthenticated, navigate, seller?._id]);

  return (
    <div>
      <SellerLogin setSellerToken={setSellerToken} sellerRemember={sellerRemember} setSellerRemember={setSellerRemember} />
    </div>
  )
}

export default SellerLoginPage