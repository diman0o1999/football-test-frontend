import axios from 'axios';
import constants from "../constants";
import {fetchAuthor, validateAuthor} from "./authors_api";
import {validateArray} from "../utils/validation_util";
import {POST_SCHEMA} from "./schemas";


export const fetchPosts = async () => {
    const posts = (await axios.get(`${constants.BASE_URL}/posts`)).data
    validatePosts(posts)
    await Promise.all(posts.map(async post => {
        const author = await fetchAuthor(post.userId)
        validateAuthor(author)
        post.author = author
    }))
    return posts
}


export const validatePosts = (posts) =>
    validateArray(posts, POST_SCHEMA, 'Couldn\t fetch posts.')