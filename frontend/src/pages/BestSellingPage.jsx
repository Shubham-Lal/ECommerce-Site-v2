import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import styles from '../styles/styles';
import ProductCard from '../components/Route/ProductCard/ProductCard';
import { productData } from '../static/data';

const BestSellingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
        setProducts(products);
    }, []);

    return (
        <div>
            <Header activeHeading={2} /><br /><br />
            <div className="h-[2.5rem] 800px:h-0" />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {products && products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSellingPage