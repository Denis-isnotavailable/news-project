import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./operations";

const initialState = {
    posts: [],
    operation: null,
    isLoading: false,
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.operation = 'fetch';
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.posts = action.payload;
                    state.operation = null;
                    state.isLoading = false;
                    state.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.operation = null;
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const postsReducer = postsSlice.reducer;