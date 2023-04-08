import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
};

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFail = createAction('LoadUserFail');
const clearErrors = createAction('clearErrors');

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(LoadUserRequest, (state) => {
            state.loading = true;
        })
        .addCase(LoadUserSuccess, (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(LoadUserFail, (state, action) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        })
});

// LoadUserRequest: (state) => {
//     state.loading = true;
// },
// LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
// },
// LoadUserFail: (state, action) => {
//     state.isAuthenticated = false;
//     state.loading = false;
//     state.error = action.payload;
// },
// clearErrors: (state) => {
//     state.error = null;
// },