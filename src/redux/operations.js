import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
        try {
            const {data} = await axios.get("topstories.json?print=pretty");

            const posts = [];
            const postsQuantity = data.length <= 100 ? data.length : 100;

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

// export const fetchPosts = async () => {

//     try {
//         const {data} = await axios.get("topstories.json?print=pretty");

//         const posts = [];
//         // const postsQuantity = data.length <= 100 ? data.length : 100;

//         for (let i = 0; i < 20; i++) {
//             const post = await fetchOnePost(data[i]);
//             posts.push(post);
//         } 

//         return posts;     
//     } catch (e) {
//         console.error(e)
//     }
// }


export async function fetchOnePost(id) {

    try {
        const response = await axios.get(`item/${id}.json?print=pretty`)

        return response.data;      
    } catch (e) {
        console.error(e)
    }
}


