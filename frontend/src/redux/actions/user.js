import axios from "axios";
import { server } from "../../server";

// Load User
export const loadUser = (token) => async (dispatch) => {
    if (token === "null") return;
    try {
        dispatch({
            type: "LoadUserRequest",
        });
        const { data } = await axios.post(`${server}/user/getuser`, { token }, { withCredentials: true });
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
};