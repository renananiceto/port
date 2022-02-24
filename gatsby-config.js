module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Dancing Script`,
        `Source Sans 3', sans-serif` 
      ],
      display: 'swap'
    }
  }
]
};  