import React, { useEffect } from 'react';
import SellerSignup from '../components/Seller/SellerSignup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SellerSignupPage = () => {
  const { isLoading, isSellerAuthenticated } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSellerAuthenticated) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isSellerAuthenticated, navigate]);

  return (
    <div>
      <SellerSignup />
    </div>
  )
}

export default SellerSignupPage