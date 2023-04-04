// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const debuggerApi = createApi({
    reducerPath: 'debuggerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({}),
    tagTypes: ['Users', 'User', 'Products', 'Product'],
    entityTypes: ['Users', 'User', 'Products', 'Product'],
});
