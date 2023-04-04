// @ts-nocheck
import {
    createSlice,
    createEntityAdapter,
    createSelector,
} from '@reduxjs/toolkit';
import { debuggerApi } from '../app/debuggerApi';

const usersAdapter = createEntityAdapter({
    selectId: (user) => user.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = usersAdapter.getInitialState();

const usersApi = debuggerApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => '/users',
            providesTags: ['Users'],
        }),
        getUser: build.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        addUser: build.mutation({
            query: (newUser) => ({
                url: '/users',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: build.mutation({
            query: (updatedUser) => ({
                url: `/users/${updatedUser.id}`,
                method: 'PUT',
                body: updatedUser,
            }),
            invalidatesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'User', id }],
        }),
    }),
});

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        clearUsersState: (state) => {
            usersAdapter.removeAll(state);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                usersAdapter.setAll(state, action.payload);
            },
        );
        builder.addMatcher(
            usersApi.endpoints.addUser.matchFulfilled,
            (state, action) => {
                usersAdapter.addOne(state, action.payload);
            },
        );
        builder.addMatcher(
            usersApi.endpoints.updateUser.matchFulfilled,
            (state, action) => {
                usersAdapter.upsertOne(state, action.payload);
            },
        );
        builder.addMatcher(
            usersApi.endpoints.deleteUser.matchFulfilled,
            (state, action) => {
                usersAdapter.removeOne(state, action.meta.arg);
            },
        );
    },
});

// createSelector
const selectUsersState = (state) => state.users;

const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = usersAdapter.getSelectors(selectUsersState);

const selectUserByIdWithDetails = createSelector(
    [selectUserById, selectAllUsers],
    (user, allUsers) => {
        if (!user) return null;

        return {
            ...user,
            friends: user.friends.map((friendId) =>
                allUsers.find((u) => u.id === friendId),
            ),
        };
    },
);

export {
    usersAdapter,
    selectAllUsers,
    selectUserById,
    selectUserIds,
    selectUserByIdWithDetails,
    usersSlice,
};

