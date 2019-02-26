module.exports = {
  siteMetadata: {
    title: `Добро пожаловать! Меня зовут Анна.`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
