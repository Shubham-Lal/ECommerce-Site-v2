import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

const ProductCreateRequest = createAction('ProductCreateRequest');
const ProductCreateSuccess = createAction('ProductCreateSuccess');
const ProductCreateFail = createAction('ProductCreateFail');
const clearErrors = createAction('clearErrors');

export const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ProductCreateRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(ProductCreateSuccess, (state, action) => {
            state.success = true;
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(ProductCreateFail, (state, action) => {
            state.success = false;
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        })
});