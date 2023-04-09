import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';

const ProductCard = ({ product }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

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
                </Link>
            </div>
        </>
    )
}

export default ProductCard