import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

const LoadSellerRequest = createAction('LoadSellerRequest');
const LoadSellerSuccess = createAction('LoadSellerSuccess');
const LoadSellerFail = createAction('LoadSellerFail');
const clearErrors = createAction('clearErrors');

export const sellerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(LoadSellerRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(LoadSellerSuccess, (state, action) => {
            state.isSellerAuthenticated = true;
            state.isLoading = false;
            state.seller = action.payload;
        })
        .addCase(LoadSellerFail, (state, action) => {
            state.isSellerAuthenticated = false;
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        })
});