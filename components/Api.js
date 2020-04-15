// чтобы  был тут как бы для намерка на подход

import apiClient from '../lib/api-client'

const getConfederationsAll = params =>
  apiClient.get('/confederations', {
    params,
  })

export default {
  getConfederationsAll,
}
