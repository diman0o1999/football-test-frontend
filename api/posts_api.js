import axios from 'axios';
import constants from "../constants";
import {fetchAuthor} from "./authors_api";


export const fetchPosts = async () => {
    const posts = (await axios.get(`${constants.BASE_URL}/posts`)).data
    for (const post of posts)
        post.author = await fetchAuthor(post.userId)
    return posts
}