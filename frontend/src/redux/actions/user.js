import axios from "axios";
import { serverAPI } from "../../server";

// Load User
export const loadUser = (token) => async (dispatch) => {
    if (token !== null) {
        try {
            dispatch({
                type: "LoadUserRequest",
            });
            const { data } = await axios.post(`${serverAPI}/user/getuser`, { token }, { withCredentials: true });
            dispatch({
                type: "LoadUserSuccess",
                payload: data.user,
            });
        }
        catch (error) {
            dispatch({
                type: "LoadUserFail",
                payload: error.response.data.message,
            });
        }
    }
};

// Load Seller
export const loadSeller = (sellerToken) => async (dispatch) => {
    if (sellerToken !== null) {
        try {
            dispatch({
                type: "LoadSellerRequest",
            });
            const { data } = await axios.post(`${serverAPI}/seller/getseller`, { sellerToken }, { withCredentials: true });
            dispatch({
                type: "LoadSellerSuccess",
                payload: data.seller,
            });
        }
        catch (error) {
            dispatch({
                type: "LoadSellerFail",
                payload: error.response.data.message,
            });
        }
    }
};