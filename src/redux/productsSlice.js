// @ts-nocheck
import {
    createSlice,
    createEntityAdapter,
    createSelector,
} from '@reduxjs/toolkit';
import { debuggerApi } from '../app/debuggerApi';

const productsAdapter = createEntityAdapter({
    selectId: (product) => product.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productsAdapter.getInitialState();

export const productsApi = debuggerApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/products',
            providesTags: ['Products'],
        }),
        getProduct: build.query({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
        addProduct: build.mutation({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['Products'],
        }),
        updateProduct: build.mutation({
            query: (updatedProduct) => ({
                url: `/products/${updatedProduct.id}`,
                method: 'PUT',
                body: updatedProduct,
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
    }),
});

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        clearProductsState: (state) => {
            productsAdapter.removeAll(state);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApi.endpoints.getProducts.matchFulfilled,
            (state, action) => {
                productsAdapter.setAll(state, action.payload);
            },
        );
        builder.addMatcher(
            productsApi.endpoints.addProduct.matchFulfilled,
            (state, action) => {
                productsAdapter.addOne(state, action.payload);
            },
        );
        builder.addMatcher(
            productsApi.endpoints.updateProduct.matchFulfilled,
            (state, action) => {
                productsAdapter.upsertOne(state, action.payload);
            },
        );
        builder.addMatcher(
            productsApi.endpoints.deleteProduct.matchFulfilled,
            (state, action) => {
                productsAdapter.removeOne(state, action.meta.arg);
            },
        );
    },
});

// createSelector
const selectProductsState = (state) => state.products;

const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
    selectIds: selectProductIds,
} = productsAdapter.getSelectors(selectProductsState);

export {
    productsAdapter,
    selectAllProducts,
    selectProductById,
    selectProductIds,
    productsSlice,
};
