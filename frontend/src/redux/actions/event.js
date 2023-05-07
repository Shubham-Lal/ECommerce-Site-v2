import axios from "axios";
import { serverAPI } from "../../server";

// Create Event
export const createEvent = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "EventCreateRequest",
        });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post(`${serverAPI}/event/create-event`, newForm, config);

        dispatch({
            type: "EventCreateSuccess",
            payload: data.product,
        });
    }
    catch (error) {
        dispatch({
            type: "EventCreateFail",
            payload: error.response.data.message,
        });
    }
};