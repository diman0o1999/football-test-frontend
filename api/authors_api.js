import axios from 'axios';
import constants from "../constants";
import {AUTHOR_SCHEMA} from "./schemas";
import {validate, validateArray} from "../utils/validation_util";
import {validatePosts} from "./posts_api";


export const fetchAuthors = async () => {
    const authors = (await axios.get(`${constants.BASE_URL}/users`)).data
    validateArray(authors, AUTHOR_SCHEMA, 'Couldn\'t fetch authors.')

    await Promise.all(authors.map(async author => {
        const posts = await fetchPostsByAuthorId(author.id)
        validatePosts(posts)
        author.posts = posts
    }))
    return authors
}

export const fetchAuthor = async id => {
    const res = await axios.get(`${constants.BASE_URL}/users/${id}`)
    validateAuthor(res.data)
    return res.data
}

export const validateAuthor = (author) =>
    validate(author, AUTHOR_SCHEMA, 'Couldn\t fetch author')

const fetchPostsByAuthorId = async (id) => {
    const res = await axios.get(`${constants.BASE_URL}/users/${id}/posts`)
    validatePosts(res.data)
    return res.data
}