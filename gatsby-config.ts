module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-fix-fouc`,
      options: {
        timeout: 2000,
      },
    },
  ],
};
