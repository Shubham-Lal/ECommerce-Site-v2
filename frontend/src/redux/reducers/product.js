import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

const ProductCreateRequest = createAction('ProductCreateRequest');
const ProductCreateSuccess = createAction('ProductCreateSuccess');
const ProductCreateFail = createAction('ProductCreateFail');
const GetAllProductRequest = createAction('GetAllProductRequest');
const GetAllProductSuccess = createAction('GetAllProductSuccess');
const GetAllProductFail = createAction('GetAllProductFail');
const DeleteProductRequest = createAction('DeleteProductRequest');
const DeleteProductSuccess = createAction('DeleteProductSuccess');
const DeleteProductFail = createAction('DeleteProductFail');
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
        .addCase(GetAllProductRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(GetAllProductSuccess, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(GetAllProductFail, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(DeleteProductRequest, (state) => {
            state.isLoading = true;
        })
        .addCase(DeleteProductSuccess, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        })
        .addCase(DeleteProductFail, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        })
});