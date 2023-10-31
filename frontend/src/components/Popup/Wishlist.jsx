import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import styles from '../../styles/styles';

const Wishlist = ({ setWishlistPopup }) => {
    const wishlistData = [
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
            imageURL: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
        },
    ];

    return (
        <>
            <div className="flex w-full justify-start pt-5 pl-5">
                <RxCross1
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setWishlistPopup(false)}
                />
            </div>

            <div className={`${styles.normalFlex} w-full justify-center p-4 mb-3`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                    {wishlistData.length} wislisted items
                </h5>
            </div>

            <div className="w-full border-t h-screen overflow-y-auto">
                {wishlistData && wishlistData.slice(wishlistData.length > 4 && 0, 4).map((item, index) => (
                    <WishlistItem key={index} item={item} />
                ))}
                {wishlistData.length > 4 && (
                    <h4 className="w-full text-center font-[400] text-[15px] text-[#00000082]">
                        & more {wishlistData.length - 4} items
                    </h4>
                )}
            </div>
        </>
    )
}

const WishlistItem = ({ item }) => {
    return (
        <div className="border-b p-8">
            <div className={`${styles.normalFlex} w-full justify-between select-none`}>
                <RxCross1
                    size={10}
                    className="cursor-pointer"
                />
                <img
                    className="w-[80px] h-[80px] object-cover ml-2"
                    src={item.imageURL}
                    alt="product"
                />
                <div className="pl-[5px]">
                    <h1>
                        {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
                    </h1>
                    <h4 className="font-[600] text-[17px] text-[#D02222] font-Roboto pt-[3px]">
                        INR₹ {item.price}
                    </h4>
                </div>
                <div className="">
                    <BsCartPlus
                        size={20}
                        className="cursor-pointer"
                        title="Add to Cart"
                    />
                </div>
            </div>
        </div>
    )
};

export default Wishlist