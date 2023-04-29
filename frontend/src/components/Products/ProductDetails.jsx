import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../../styles/styles';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart
} from 'react-icons/ai';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=Hello");
  };

  return (
    <div className="bg-white">
      {product ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              {/* Left */}
              <div className="w-full 800px:w-[50%]">
                <img
                  className="w-full 800px:w-[80%] object-cover"
                  src={product?.image_Url[select].url}
                  alt="product"
                />
                <div className="w-full 800px:w-[80%] flex justify-evenly">
                  <div className={`${select === 0 ? "border" : null} cursor-pointer`}>
                    <img
                      className="h-[200px] object-contain"
                      src={product?.image_Url[0].url}
                      onClick={() => setSelect(0)}
                      alt='product'
                    />
                  </div>
                  <div className={`${select === 1 ? "border" : null} cursor-pointer`}>
                    <img
                      className="h-[200px] object-contain"
                      src={product?.image_Url[1].url}
                      onClick={() => setSelect(1)}
                      alt='product'
                    />
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle} font-Poppins`}>
                  {product.name}
                </h1>

                <p className="text-justify">
                  {product.description}
                </p>

                <div className="flex items-center pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    ${product.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {product.price ? product.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  {/* Product Count */}
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={() => count > 1 && setCount(count - 1)}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-900 font-medium px-4 py-[9.5px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                  {/* Wishlist */}
                  <div>
                    {favorite ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setFavorite(prev => !prev)}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer text-[#333] hover:text-[red]"
                        onClick={() => setFavorite(prev => !prev)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                <div className={`${styles.button} mt-6 rounded h-11 flex items-center hover:bg-amber-500 hover:rounded-sm transition-all duration-200`}>
                  <span className="text-[#fff] flex items-center">
                    Add to Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>

                <div className="flex items-center pt-8">
                  <img
                    className="w-[50px] h-[50px] rounded-full object-cover mr-2"
                    src={product?.shop.shop_avatar.url}
                    alt="shop"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name} py-1`}>
                      {product.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px] flex items-center">
                      {product.shop.ratings}
                      <AiFillStar
                        className="mr-2 cursor-pointer"
                        size={20}
                        color="#F6BA00"
                      />
                      Ratings
                    </h5>
                  </div>
                  {/* bg-[#342AC8] bg-[#3321C8] */}
                  <div
                    className={`${styles.button} bg-[#6443D1] hover:bg-[#4c33a0] mt-4 rounded h-11 hover:rounded-sm transition-all duration-200`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Contact <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetails