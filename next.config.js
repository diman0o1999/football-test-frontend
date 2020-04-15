const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = (phase) => {
  // withCSS(
  return withCSS(
    withSass({
      env: {
        API_URL: 'https://jsonplaceholder.typicode.com/',
      },
    }),
  )
}
