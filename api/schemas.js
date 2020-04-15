export const AUTHOR_SCHEMA = {
    id: 'Author',
    type: 'object',
    properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
    },
    required: ['id', 'name']
}

export const POST_SCHEMA = {
    id: '/Post',
    type: 'object',
    properties: {
        id: {type: 'integer'},
        userId: {type: 'integer'},
        title: {type: 'string'},
        body: {type: 'string'}
    },
    required: ['id', 'userId', 'title', 'body']
}