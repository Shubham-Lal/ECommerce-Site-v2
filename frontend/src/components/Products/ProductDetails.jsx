import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from '../../styles/styles';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { productDetailsData } from '../../static/data';

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
                    ₹{product.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {product.price ? "₹" + product.price : null}
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

          <ProductDetailsInfo product={product} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  )
}

const ProductDetailsInfo = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#F5F6FB] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        {productDetailsData.map((item, index) => (
          <div className="relative" key={index}>
            <h5
              className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
              onClick={() => setActiveTab(index)}
            >
              {item.tab}
            </h5>
            {activeTab === index ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
        ))}
      </div>

      {activeTab === 0 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
          </p>
        </>
      ) : null}

      {activeTab === 1 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews yet!</p>
        </div>
      ) : null}

      {activeTab === 2 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover"
                src={product.shop.shop_avatar.url}
                alt="seller"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>
                  {product.shop.name}
                </h3>
                <h5 className="pb-2 text-[15px] flex items-center">
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
            <p className="pt-2 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consequuntur eos reprehenderit. Provident veritatis eum aut repellendus magni. Laudantium, voluptatum dolorum laborum labore nihil voluptate dolore voluptates asperiores ex possimus.
            </p>
          </div>

          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">31 December, 2022</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">503</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[500]">223</span>
              </h5>
              <Link to="/">
                <div className={`${styles.button} mt-3 rounded h-[39.5px] flex items-center hover:bg-amber-500 hover:rounded-sm transition-all duration-200`}>
                  <h4 className="text-[#fff] flex items-center">
                    Visit Shop <AiOutlineShoppingCart className="ml-1" />
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetails