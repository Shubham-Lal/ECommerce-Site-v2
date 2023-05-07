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

// Get All Events
export const getAllEvents = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "GetAllEventRequest",
        });

        const { data } = await axios.get(`${serverAPI}/event/get-events/${id}`);

        dispatch({
            type: "GetAllEventSuccess",
            payload: data.events,
        });
    }
    catch (error) {
        dispatch({
            type: "GetAllEventFail",
            payload: error.response.data.message,
        });
    }
};

// Delete a event
export const deleteEvent = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "clearErrors",
        });
        dispatch({
            type: "DeleteEventRequest",
        });

        const { data } = await axios.delete(`${serverAPI}/event/delete-event/${id}`);

        dispatch({
            type: "DeleteEventSuccess",
            payload: data.message,
        });
    }
    catch (error) {
        dispatch({
            type: "DeleteEventFail",
            payload: error.response.data.message,
        });
    }
};