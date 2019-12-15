module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    description: '',
    keywords: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3r2nvprifwjw',
        accessToken: 'JpxGRN-_lT3ch2HvTE2OdmiNZDG1YHRZ-S1aJKQbm4A'
      }
    }
  ],
}