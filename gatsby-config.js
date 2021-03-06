module.exports = {
    // Site metadata can be queried via graphQL
    siteMetadata: {
        siteName: `Using TypeScript Example`,
        exampleUrl: `https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript`,
    },

    // NOTE: make sure to install new plugins with npm i --save ...
    plugins: [
        // Typescript (ya' know)
        `gatsby-plugin-typescript`,

        // Remark (for markdown files)
        `gatsby-transformer-remark`,

        // Typography.js (css helper)
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
                omitGoogleFont: true,
            },
        },

        // Filesystem
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
    ],
}
