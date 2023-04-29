import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import styles from '../../../styles/styles';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart
} from 'react-icons/ai';

const ProductDetailsCard = ({ setQuickView, product }) => {
  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const handleMessageSubmit = () => {

  };

  return (
    <div className="bg-[#fff]">
      {product ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-auto 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50 cursor-pointer hover:scale-75 transition-all duration-200"
              onClick={() => setQuickView(false)}
            />

            <div className="block w-full 800px:flex">
              {/* Left Widgets */}
              <div className="w-full 800px:w-[50%]">
                <img
                  src={product.image_Url[0].url}
                  alt="product"
                />
                <div className="flex">
                  <img
                    className="w-[50px] h-[50px] rounded-full mr-2 object-cover"
                    src={product.shop.shop_avatar.url}
                    alt="shop"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>
                      {product.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px] flex flex-row items-center">
                      {product.shop.ratings}
                      <AiFillStar
                        className="mr-2 cursor-pointer"
                        size={20}
                        color="#F6BA00"
                      />
                      Ratings
                    </h5>
                  </div>
                </div>
                <div className={`${styles.button} bg-[#000] mt-4 rounded h-11 hover:bg-amber-500 hover:rounded-sm transition-all duration-200`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>

              {/* Right Widgets */}
              <div className="w-full 800px:w-[50%] pt-5 px-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {product.name}
                </h1>
                <p className="text-justify">
                  {product.description}
                </p>
                <div className="flex items-center pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {product.discount_price}$
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

                <div className='flex items-center justify-between'>
                  <div className={`${styles.button} mt-6 rounded h-11 flex items-center hover:bg-amber-500 hover:rounded-sm transition-all duration-200`}>
                    <span className="text-[#fff] flex items-center">
                      Add to Cart <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <h5 className="text-[16px] text-[red] mt-5">
                    {product.total_sell} Items Sold
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetailsCard