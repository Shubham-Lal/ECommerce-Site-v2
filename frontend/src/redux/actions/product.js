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