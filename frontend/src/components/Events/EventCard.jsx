import React from 'react';
import styles from '../../styles/styles';
import CountDown from './CountDown';

const EventCard = ({ active }) => {
    return (
        <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
            <div className="w-full lg:w-[50%] m-auto">
                <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481"
                    alt="hot deal"
                />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col justify-center">
                <h2 className={`${styles.productTitle}`}>
                    Macbook Pro M2
                </h2>
                <p className="text-justify">
                    Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to
                    make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful
                    marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications,
                    dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details
                    section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
                </p>
                <div className="flex items-center py-2 justify-between">
                    <div className="flex items-center">
                        <h5 className="font-[500] text-[18px] text-[#D55B45] pr-3 line-through">
                            ₹1099
                        </h5>
                        <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                            ₹1049
                        </h5>
                    </div>
                    <span className="pr-3 font-[400] text-[17px] text-[#44A55E]">
                        35 sold
                    </span>
                </div>
                <CountDown />
            </div>
        </div>
    )
}

export default EventCard