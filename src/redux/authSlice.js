// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { debuggerApi } from '../app/debuggerApi';

const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await debuggerApi.login(payload);
    return response.data;
});

const logout = createAsyncThunk('auth/logout', async () => {
    const response = await debuggerApi.logout();
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isLoading = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export { authSlice, login, logout };
