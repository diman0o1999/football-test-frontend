import axios from 'axios'

import constants from '../constants'
import { validate } from '../utils/validation_util'

import { AUTHOR_SCHEMA } from './schemas'
import { validatePosts } from './posts_api'

export const fetchAuthors = () =>
  axios.get(`${constants.BASE_URL}/users`).then(response => response.data)

export const fetchAuthor = async id => {
  const res = await axios.get(`${constants.BASE_URL}/users/${id}`)
  validateAuthor(res.data)
  return res.data
}

export const validateAuthor = author =>
  validate(author, AUTHOR_SCHEMA, 'Couldn\t fetch author')

const fetchPostsByAuthorId = async id => {
  const res = await axios.get(`${constants.BASE_URL}/users/${id}/posts`)
  validatePosts(res.data)
  return res.data
}
