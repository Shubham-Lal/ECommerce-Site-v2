import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/styles';
import { categoriesData } from '../../static/data';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { toast } from "react-toastify";

const CreateProduct = () => {
    // const navigate = useNavigate();
    // const { seller } = useSelector((state) => state.seller);
    // const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [stock, setStock] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (e) => {
        let files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        if (!name || !description || !discountPrice || !stock) return toast.warn("Please complete all fields to proceed!");
        if (category === "Choose a category" || !category) return toast.warn("Select a product category!");
        if (images.length === 0) return toast.warn("Please upload product images!");
        setLoading(true);
    };

    return (
        <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[calc(100vh-80px)] 800px:h-[80vh] rounded-[4px] p-3 overflow-y-auto">
            <h5 className="text-[25px] 800px:text-[30px] font-Poppins text-center">
                Add Product
            </h5>
            <form onSubmit={handleProductSubmit}>
                <br />
                <div>
                    <label htmlFor="name" className="pb-2">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={name}
                        placeholder="Your product name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="description" className="pb-2">
                        Description<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="description"
                        type="text"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={description}
                        placeholder="Your product description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="category" className="pb-2">
                        Category<span className="text-red-500">*</span>
                    </label>
                    <select
                        id="category"
                        className="w-full mt-2 border h-[35px] rounded-[5px]"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Choose a category">Choose a category</option>
                        {categoriesData.map((category, index) => (
                            <option value={category.title} key={index}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="tags" className="pb-2">
                        Tags
                    </label>
                    <input
                        id="tags"
                        type="text"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={tags}
                        placeholder="Your product tags"
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="originalPrice" className="pb-2">
                        Original Price
                    </label>
                    <input
                        id="originalPrice"
                        type="number"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={originalPrice}
                        placeholder="Your product original price"
                        onChange={(e) => setOriginalPrice(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="discountPrice" className="pb-2">
                        Final Price<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="discountPrice"
                        type="number"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={discountPrice}
                        placeholder="Your product final price"
                        onChange={(e) => setDiscountPrice(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="stock" className="pb-2">
                        Stock<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="stock"
                        type="number"
                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                        value={stock}
                        placeholder="Your product stock"
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Upload Images<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageUpload}
                    />
                    <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="upload">
                            <AiOutlinePlusCircle
                                size={30}
                                className="mt-3 cursor-pointer"
                                color="#555"
                            />
                        </label>
                        {images && (
                            images.map((image, index) => (
                                <img
                                    key={index}
                                    className="w-[120px] h-[120px] object-cover m-2"
                                    src={URL.createObjectURL(image)}
                                    alt="product"
                                />
                            ))
                        )}
                    </div>
                </div>
                <br />
                <button disabled={loading} onSubmit={handleProductSubmit} className={`${styles.button} ${loading && "cursor-not-allowed"} w-full h-[42px] rounded hover:bg-amber-500 hover:rounded-sm duration-200`}>
                    <span className="text-[#fff] flex items-center">
                        {loading ? "Adding" : "Submit"}
                    </span>
                </button>
            </form>
        </div>
    )
}

export default CreateProduct