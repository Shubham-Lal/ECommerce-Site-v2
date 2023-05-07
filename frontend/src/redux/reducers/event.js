import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

const EventCreateRequest = createAction('EventCreateRequest');
const EventCreateSuccess = createAction('EventCreateSuccess');
const EventCreateFail = createAction('EventCreateFail');
const GetAllEventRequest = createAction('GetAllEventRequest');
const GetAllEventSuccess = createAction('GetAllEventSuccess');
const GetAllEventFail = createAction('GetAllEventFail');
const DeleteEventRequest = createAction('DeleteEventRequest');
const DeleteEventSuccess = createAction('DeleteEventSuccess');
const DeleteEventFail = createAction('DeleteEventFail');
const clearErrors = createAction('clearErrors');

export const eventReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(EventCreateRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(EventCreateSuccess, (state, action) => {
            state.success = true;
            state.isLoading = false;
            state.event = action.payload;
        })
        .addCase(EventCreateFail, (state, action) => {
            state.success = false;
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(GetAllEventRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(GetAllEventSuccess, (state, action) => {
            state.isLoading = false;
            state.events = action.payload;
        })
        .addCase(GetAllEventFail, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(DeleteEventRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(DeleteEventSuccess, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        })
        .addCase(DeleteEventFail, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        })
});