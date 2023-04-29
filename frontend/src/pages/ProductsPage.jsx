import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import styles from '../styles/styles';
import { useSearchParams } from 'react-router-dom';
import { productData } from '../static/data';
import ProductCard from '../components/Route/ProductCard/ProductCard';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryData === null) {
            const products = productData && productData.sort((a, b) => a.total_sell - b.total_sell);
            setProducts(products);
        }
        else {
            const products = productData && productData.filter((item) => item.category === categoryData);
            setProducts(products);
        }
    }, [categoryData]);

    return (
        <div>
            <Header activeHeading={3} /><br /><br />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {products && products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
                {products && products.length === 0 && (
                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                        No Products Found!
                    </h1>
                )}
            </div>
        </div>
    )
}

export default ProductsPage