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