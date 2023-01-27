import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
        try {
            const {data} = await axios.get("topstories.json?print=pretty");

            const posts = [];
            const postsQuantity = data.length <= 20 ? data.length : 20;

            for (let i = 0; i < postsQuantity; i++) {
                const post = await fetchOnePost(data[i]);
                posts.push(post);
            } 

            return posts;     
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue(e.message);
        }
});


export async function fetchOnePost(id) {

    try {
        const response = await axios.get(`item/${id}.json?print=pretty`)

        return response.data;      
    } catch (e) {
        console.error(e)
    }
}

export async function fetchComments(arr) {

    try {
        const comments = [];
        
        if (!arr.length || arr.length === 0) {
            return comments;
        }

        for (let i = 0; i < arr.length; i++) {
            const comment = await fetchOnePost(arr[i]);
            comments.push(comment);
        } 

        return comments;     
    } catch (e) {
        console.error(e)
    }
}


