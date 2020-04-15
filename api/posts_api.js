import axios from 'axios';
import Validator from 'jsonschema/lib/validator';
import constants from "../constants";
import {fetchAuthor} from "./authors_api";


const POSTS_SCHEMA = {
    id: '/Posts',
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {type: 'integer'},
            userId: {type: 'integer'},
            title: {type: 'string'},
            body: {type: 'string'}
        },
        required: ['id', 'userId', 'name', 'title', 'body']
    }
}

export const fetchPosts = async () => {
    const posts = (await axios.get(`${constants.BASE_URL}/posts`)).data
    const result = new Validator().validate([], POSTS_SCHEMA)
    if (!result.valid)
        throw new Error('Couldn\'t fetch posts. ' + result.errors)
    await Promise.all(posts.map(async post => {
        post.author = await fetchAuthor(post.userId)
    }))
    return posts
}