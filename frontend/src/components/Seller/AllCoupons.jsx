import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/product';
import Loader from '../../styles/Loader';
import { DataGrid } from '@mui/x-data-grid';
import styles from '../../styles/styles';
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";
import { serverAPI } from '../../server';

const AllCoupons = () => {
    const dispatch = useDispatch();
    const [openCoupon, setOpenCoupon] = useState(false);
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [loading, setLoading] = useState(false);
    const { seller } = useSelector((state) => state.seller);
    const { products } = useSelector((state) => state.products);
    const [isLoading, setIsLoading] = useState(false);
    const [coupons, setCoupons] = useState([]);

    const handleCouponSubmit = async (e) => {
        e.preventDefault();
        if (!name || !value) return toast.warn("Plesae fill out all the fields to proceed!");
        setLoading(true);
        await axios.post(`${serverAPI}/coupon/create-coupon`, {
            name,
            value,
            minAmount,
            maxAmount,
            selectedProduct: selectedProduct === "" || selectedProduct === "Single Product" ? null : selectedProduct,
            sellerId: seller._id,
        })
            .then((res) => {
                toast.success("Coupon created successfully!");
                window.location.reload(true);
            })
            .catch((err) => {
                toast.error("Try again after some time!");
                setLoading(false);
            })
    };

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
            field: "name",
            headerName: "Name",
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: "percentage",
            headerName: "Discount",
            minWidth: 100,
            flex: 0.6,
        },
    ];
    const row = [];
    coupons && coupons.forEach((item) => {
        row.push({
            id: item._id,
            name: item.name,
            percentage: item.value + " %",
        });
    });

    useEffect(() => {
        dispatch(getAllProducts(seller._id));
    }, [dispatch, seller._id]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${serverAPI}/coupon/get-coupons/${seller._id}`)
            .then((res) => {
                setCoupons(res.data.coupons);
            })
            .catch((err) => {
                toast.error("Error fetching coupons. Try gain later!");
            })
            .finally(() => setIsLoading(false));
    }, [seller._id]);

    return (
        <>
            {isLoading
                ? <Loader />
                : (
                    <div className="w-full mx-8 pt-1 800px:mt-10 bg-white">
                        <div className="w-full flex items-center justify-between px-3">
                            <h5 className="text-[25px] 800px:text-[30px] font-Poppins text-center">
                                Coupons
                            </h5>
                            <div
                                className={`${styles.button2} !h-[45px] hover:bg-amber-500 hover:rounded-sm duration-200 mb-3`}
                                onClick={() => setOpenCoupon(true)}
                            >
                                <span className="text-white">
                                    Create Coupon
                                </span>
                            </div>
                        </div>
                        <DataGrid
                            rows={row}
                            columns={columns}
                            pageSizeOptions={[25, 50, 100]}
                            disableRowSelectionOnClick
                            autoHeight
                        />
                    </div>
                )
            }
            {openCoupon && (
                <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#00000062] z-40">
                    <div className="w-[90%] 800px:w-[40%] h-max bg-white rounded-md shadow p-4">
                        <div
                            className="w-full flex justify-end cursor-pointer"
                            onClick={() => setOpenCoupon(false)}
                        >
                            <RxCross1 size={30} />
                        </div>
                        <h5 className="text-[25px] 800px:text-[30px] font-Poppins text-center">
                            Create Coupon
                        </h5>

                        <form onSubmit={handleCouponSubmit}>
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
                                    placeholder="Your coupon name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="value" className="pb-2">
                                    Discount<span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center gap-1">
                                    <input
                                        id="value"
                                        type="number"
                                        className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                                        value={value}
                                        placeholder="Your coupon discount"
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <span className="text-[20px] mt-2">%</span>
                                </div>
                            </div>
                            <br />
                            <div className="block 800px:flex 800px:gap-4">
                                <div className="w-full">
                                    <label htmlFor="minAmount" className="pb-2">
                                        Minimun Amount
                                    </label>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[20px] mt-2">₹</span>
                                        <input
                                            id="minAmount"
                                            type="number"
                                            className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                                            value={minAmount}
                                            placeholder="Min product amount to apply coupon"
                                            onChange={(e) => setMinAmount(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="w-full">
                                    <label htmlFor="maxAmount" className="pb-2">
                                        Maximum Amount
                                    </label>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[20px] mt-2">₹</span>
                                        <input
                                            id="maxAmount"
                                            type="number"
                                            className={`${styles.input} border-gray-300 focus:border-[#3AD132] placeholder-gray-400 sm:text-sm mt-2 appearance-none block w-full px-3 h-[35px]`}
                                            value={maxAmount}
                                            placeholder="Max product amount to apply coupon"
                                            onChange={(e) => setMaxAmount(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="selectProducts" className="pb-2">
                                    Select Product
                                </label>
                                <select
                                    id="selectProducts"
                                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                >
                                    <option value="Single Product">Apply coupon for a single product</option>
                                    {products && products.map((product, index) => (
                                        <option value={product.name} key={index}>{product.name}</option>
                                    ))}
                                </select>
                            </div>
                            <br />
                            <button disabled={loading} type="submit" className={`${styles.button} ${loading && "!cursor-not-allowed !bg-amber-500"} !my-0 hover:bg-amber-500 w-full !h-[42px] rounded hover:rounded-sm duration-200`}>
                                <span className="text-[#fff] flex items-center">
                                    {loading ? "Creating..." : "Create"}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllCoupons