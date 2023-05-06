import axios from "axios";
import { serverAPI } from "../../server";

// Add Product
export const addProduct = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "ProductCreateRequest",
        });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post(`${serverAPI}/product/add-product`, newForm, config);

        dispatch({
            type: "ProductCreateSuccess",
            payload: data.product,
        });
    }
    catch (error) {
        dispatch({
            type: "ProductCreateFail",
            payload: error.response.data.message,
        });
    }
};

// Get All Products
export const getAllProducts = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "GetAllProductRequest",
        });

        const { data } = await axios.get(`${serverAPI}/product/get-products/${id}`);

        dispatch({
            type: "GetAllProductSuccess",
            payload: data.products,
        });
    }
    catch (error) {
        dispatch({
            type: "GetAllProductFail",
            payload: error.response.data.message,
        });
    }
};

// Delete a product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "DeleteProductRequest",
        });

        const { data } = await axios.delete(`${serverAPI}/product/delete-product/${id}`);

        dispatch({
            type: "DeleteProductSuccess",
            payload: data.message,
        });
    }
    catch (error) {
        dispatch({
            type: "DeleteProductFail",
            payload: error.response.data.message,
        });
    }
};