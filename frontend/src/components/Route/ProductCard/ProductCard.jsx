import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineStar,
    AiOutlineShoppingCart
} from "react-icons/ai";
import ProductDetailsCard from './ProductDetailsCard';

const ProductCard = ({ product }) => {
    const [favorite, setFavorite] = useState(false);
    const [quickView, setQuickView] = useState(false);

    const name = product.name;
    const productName = name.replace(/\s+/g, "-");

    return (
        <>
            <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative group">
                <div className="flex justify-end">
                </div>
                <Link to={`/product/${productName}`}>
                    <img
                        src={product.image_Url[0].url}
                        alt={product.name}
                        className={`w-full h-[170px] object-contain transition-all group-hover:scale-110`}
                    />
                </Link>
                <Link to="/">
                    <h5 className={`${styles.shop_name}`}>
                        {product.shop.name}
                    </h5>
                </Link>
                <Link to={`/product/${productName}`}>
                    <h4 className="pb-3 font-[500] capitalize">
                        {product.name.length > 40 ? product.name.slice(0, 40) + "..." : product.name}
                    </h4>

                    {/* Rating */}
                    <div className="flex">
                        <AiFillStar
                            className="mr-2 cursor-pointer"
                            size={20}
                            color="#F6BA00"
                        />
                        <AiFillStar
                            className="mr-2 cursor-pointer"
                            size={20}
                            color="#F6BA00"
                        />
                        <AiFillStar
                            className="mr-2 cursor-pointer"
                            size={20}
                            color="#F6BA00"
                        />
                        <AiFillStar
                            className="mr-2 cursor-pointer"
                            size={20}
                            color="#F6BA00"
                        />
                        <AiOutlineStar
                            className="mr-2 cursor-pointer"
                            size={20}
                            color="#F6BA00"
                        />
                    </div>

                    {/* Price + Discounted Price */}
                    <div className="py-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <h5 className={`${styles.productDiscountPrice}`}>
                                ₹{product.price === 0 ? product.price : product.discount_price}
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {product.price ? "₹" + product.price : null}
                            </h4>
                        </div>
                        <span className="font-[400] text-[17px] text-[#68D284]">
                            {product.total_sell} sold
                        </span>
                    </div>
                </Link>
                <div>
                    {favorite ? (
                        <AiFillHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => setFavorite(prev => !prev)}
                            color="red"
                            title="Remove from wishlist"
                        />
                    ) : (
                        <AiOutlineHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5 text-[#333] hover:text-[red]"
                            onClick={() => setFavorite(prev => !prev)}
                            title="Add to wishlist"
                        />
                    )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14 text-[#333] hover:text-[#F6BA00] transition-all duration-200"
                        onClick={() => setQuickView(prev => !prev)}
                        title="View product"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24 text-[#444] hover:text-[#F6BA00] transition-all duration-200"
                        title="Add to cart"
                    />
                    {quickView ? (
                        <ProductDetailsCard
                            setQuickView={setQuickView}
                            product={product}
                        />
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default ProductCard