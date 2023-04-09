import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/styles';

const Dropdown = ({ categoriesData, setDropdown }) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        setDropdown(false);
        navigate(`/products?category=${item.title}`);
        window.location.reload();
    };

    return (
        <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
            {categoriesData && categoriesData.map((category, index) => (
                <div
                    className={`${styles.normalFlex} group`}
                    onClick={() => handleClick(category)}
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