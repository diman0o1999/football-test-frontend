import Validator from 'jsonschema/lib/validator';


const BASE_URL = 'https://jsonplaceholder.typicode.com'
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
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok)
        throw new Error(authorsErrMsg)
    const authors = await res.json()
    const result = new Validator().validate(authors, AUTHORS_SCHEMA)
    if (!result.valid)
        throw new Error(authorsErrMsg)
    for (const author of authors)
        author.posts = await fetchPostsByAuthorId(author.id)
    return authors
}

const fetchPostsByAuthorId = async (id) => {
    const res = await fetch(`${BASE_URL}/users/${id}/posts`)
    if (!res.ok)
        throw new Error(`Couldn\'t fetch posts by author ID: ${id}`)
    return await res.json()
}