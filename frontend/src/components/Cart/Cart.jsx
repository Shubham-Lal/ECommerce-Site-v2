import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';

const Cart = ({ setCartPopup }) => {
    const cartData = [
        {
            name: "Iphone 14 Pro Max",
            description: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
            price: 1099,
            imageURL: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
        {
            name: "Fashionable Watch",
            description: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
            price: 79,
            imageURL: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
            name: "MacBook Pro M2",
            description: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
            price: 1049,
            imageURL: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
    ];

    return (
        <>
            <div className="flex w-full justify-start pt-5 pl-5">
                <RxCross1
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setCartPopup(false)}
                />
            </div>

            <div className={`${styles.normalFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                    {cartData.length} items
                </h5>
            </div>
            <div className="px-5 mb-3">
                <Link to="/checkout">
                    <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#E44343] rounded-[5px]`}>
                        <h1 className="text-[#fff] text-[18px] font-[600]">
                            Checkout Now (USD$2227)
                        </h1>
                    </div>
                </Link>
            </div>
            <br />

            <div className="w-full border-t h-screen overflow-y-auto">
                {cartData && cartData.slice(cartData.length > 4 && 0, 4).map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
                {cartData.length > 4 && (
                    <h4 className="w-full text-center font-[400] text-[15px] text-[#00000082]">
                        & more {cartData.length - 4} items
                    </h4>
                )}
            </div>
        </>
    )
}

const CartItem = ({ item }) => {
    const [value, setValue] = useState(1);
    const totalPrice = item.price * value;

    return (
        <div className="border-b p-8">
            <div className={`${styles.normalFlex} w-full justify-between select-none`}>
                <div className="flex flex-col items-center">
                    <div
                        className={`${styles.normalFlex} justify-center cursor-pointer bg-[#E44343] border border-[#E4434373] rounded-full w-[25px] h-[25px]`}
                        onClick={() => setValue(value + 1)}
                    >
                        <HiPlus size={18} color='#fff' />
                    </div>
                    <span className="select-none">
                        {value}
                    </span>
                    <div
                        className="flex items-center justify-center cursor-pointer bg-[#A7ABB14F] rounded-full w-[25px] h-[25px]"
                        onClick={() => setValue(value === 1 ? 1 : value - 1)}
                    >
                        <HiOutlineMinus size={16} color="#7D879C" />
                    </div>
                </div>
                <img
                    className="w-[80px] h-[80px] object-cover ml-2"
                    src={item.imageURL}
                    alt="product"
                />
                <div className="pl-[5px]">
                    <h1>
                        {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
                    </h1>
                    <h4 className="font-[400] text-[15px] text-[#00000082]">
                        ${item.price} X {value}
                    </h4>
                    <h4 className="font-[600] text-[17px] text-[#D02222] font-Roboto pt-[3px]">
                        US${totalPrice}
                    </h4>
                </div>
                <RxCross1
                    className="cursor-pointer"
                    size={10}
                />
            </div>
        </div>
    )
};

export default Cart