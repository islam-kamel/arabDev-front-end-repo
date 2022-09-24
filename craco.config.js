// TODO: Fix Conflicting values for 'process.env'

const path = require(`path`)
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: {
    plugins: [new Dotenv()],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages'),
      buttons: path.resolve(__dirname, 'src/components/Buttons/'),
    },
  },
}
