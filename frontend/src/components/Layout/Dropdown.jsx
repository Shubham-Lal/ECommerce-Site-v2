import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../../styles/styles';

const Dropdown = ({ categoriesData, setDropdown, setSelectedCategory }) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        setDropdown(false);
        navigate(`/products?category=${item.title}`);
        // window.location.reload();
    };

    return (
        <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
            <Link to="/products">
                <div className={`${styles.normalFlex} group`}>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651"
                        alt="all"
                        loading="lazy"
                        className="ml-[10px] select-none w-[25px] h-[25px] object-contain transition-all group-hover:w-[30px] group-hover:h-[30px] cursor-pointer"
                    />
                    <h3 className="cursor-pointer m-3 select-none">
                        All Products
                    </h3>
                </div>
            </Link>
            {categoriesData && categoriesData.map((category, index) => (
                <div
                    className={`${styles.normalFlex} group`}
                    onClick={() => {
                        handleClick(category);
                    }}
                    key={index}
                >
                    <img
                        src={category.image_Url}
                        alt={category.title}
                        loading="lazy"
                        className="ml-[10px] select-none w-[25px] h-[25px] object-contain transition-all group-hover:w-[30px] group-hover:h-[30px] cursor-pointer"
                    />
                    <h3 className="capitalize cursor-pointer m-3 select-none">
                        {category.title}
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default Dropdown