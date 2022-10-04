const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@context': 'src/context',
    '@pages': 'src/pages',
  })(config)

  return config
}
