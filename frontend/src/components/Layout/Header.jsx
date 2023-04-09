import React, { useState } from 'react';
import styles from '../../styles/styles';
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [serachData, setSearchData] = useState([]);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData && productData.filter((product) => {
            return product.name.toLowerCase().includes(term.toLowerCase())
        });
        setSearchData(filteredProducts); console.log(serachData);
    };

    return (
        <div className={`${styles.section}`}>
            <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src="/certystore.png" alt="" />
                    </Link>
                </div>
                {/* Search Widget */}
                <div className="w-[50%] relative">
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search CertyStore..."
                        className="h-[40px] w-full px-2 border-[2px] border-[#3957DB] rounded-md"
                    />
                    <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer hover:text-[#3957DB]" />
                    {serachData && serachData.length !== 0 ? (
                        <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                            {serachData.map((item, index) => {
                                const name = item.name;
                                const productName = name.replace(/\s+/g, "-");
                                return (
                                    <Link to={`/product/${productName}`} key={index}>
                                        <div className="w-full flex items-start py-3">
                                            <img
                                                src={item.image_Url[0].url}
                                                className="w-[40px] h-[40px] mr-[10px]"
                                                alt={productName}
                                            />
                                            <h1>
                                                {item.name}
                                            </h1>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Header