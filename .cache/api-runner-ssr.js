var plugins = [{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Edwin Andrew","short_name":"Edwin Andrew","start_url":"/","background_color":"#ffffff","theme_color":"#000000","display":"minimal-ui","icon":"src/favicon1.png"},
    },{
      plugin: require('C:/Users/edwin/OneDrive/Documents/GitHub/GatsbyPortfolio/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"quality":80}}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
