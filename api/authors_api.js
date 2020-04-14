import axios from 'axios';
import Validator from 'jsonschema/lib/validator';
import constants from "../constants";


const AUTHORS_SCHEMA = {
    id: '/Author',
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {type: 'integer'},
            name: {type: 'string'},
        },
        required: ['id', 'name']
    }
}

export const fetchAuthors = async () => {
    const authorsErrMsg = 'Couldn\'t fetch authors'
    const authors = (await axios.get(`${constants.BASE_URL}/users`)).data
    const result = new Validator().validate(authors, AUTHORS_SCHEMA)
    if (!result.valid)
        throw new Error(authorsErrMsg)
    for (const author of authors)
        author.posts = await fetchPostsByAuthorId(author.id)
    return authors
}

export const fetchAuthor = async id => {
    const res = await axios.get(`${constants.BASE_URL}/users/${id}`)
    return res.data
}

const fetchPostsByAuthorId = async (id) => {
    const res = await axios.get(`${constants.BASE_URL}/users/${id}/posts`)
    return res.data
}